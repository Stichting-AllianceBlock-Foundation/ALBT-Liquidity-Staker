const etherlime = require('etherlime-lib')
const ethers = require('ethers')

const { parseEther, formatEther } = ethers.utils

const TestERC20 = require('../build/TestERC20.json')
const LMCFactory = require('../build/LiquidityMiningCampaignFactory.json')
const LMC = require('../build/LiquidityMiningCampaign.json')
const LockScheme = require('../build/LockScheme.json')
const PercentageCalculator = require('../build/PercentageCalculator.json')

// CONTSANTS
const BLOCKS_PER_DAY = 6500
const BLOCKS_PER_HOUR = 270
const BLOCKS_PER_MINUTE = 5

const protocol = "balancer"

// Addresses
const rewardAddresses = {
  "kovan": {
    "ALBT": "0xD21913390c484d490D24F046Da5329F1d778b75b",
    "ALBT1": "0xaa62E614c4E9E498259f820A90c18EF0B59c32b0",
    "ALBT2": "0xAF157961B523F242c4A83F0bCC43091fA206160A",
    "USDT": "0x06b4cedF8c7b6A490B1032F99373FFF5b7685408",
  },
  "bsc": {
    "bALBT": "0x666e672B2Ada59979Fc4dB7AF9A4710E0E4D51E6",
  }
}

const poolAddresses = {
  "kovan": {
    "uniswap": {
      "ETH-ALBT1": "0x4697038B031F78A9cd3D1A7C42c501543E723C1F",
      "ALBT2-USDT": "0x41F5C832F6F14a4BA973231fF4dF06Fd5Ae2c271",
      "ALBT-USDT": "0xa5efc1af5dbd006ab4098ee704fea171061bce62",
    },
    "balancer": {
      "ETH-ALBT-USDT": "0x729e628ed77cc6d764cfbe00fa2b73665661cee1",
      "ETH-ALBT1-USDT": "0x0084f8f6ae73b28874a92754aa21a21d71fcac49",
    }
  },
  "bsc": {
    "pancakeswap": {
      "BNB-bALBT": "0xd954551853F55deb4Ae31407c423e67B1621424A",
    },
  }
}

// Set this address for wrapping
const LMCFactoryAddress = ""

const PercentageCalculatorAddress = "0x68b2874397e1ECdAa7B5E041ED3Fd5c873002d7F"
const infuraApiKey = "40c2813049e44ec79cb4d7e0d18de173"

let throttleRoundBlocks = BLOCKS_PER_MINUTE * 10

const stakeLimit = parseEther("1000")
const contractStakeLimit = parseEther("100000000")

const gasPrice = { gasPrice: 20000000000 }
const amountReward = parseEther("100000000000")
const initialTokensToUser = parseEther("100")

const logTx = async (tx) => {
  console.log(`Hash: ${tx.hash}`)
  const txResult = await tx.wait()
  if (txResult.status === 1) {
    console.log('\x1b[32m%s\x1b[0m', 'Transaction successful!')
    console.log('')
  } else {
    console.log('\x1b[31m%s\x1b[0m', 'Something bad happened :(')
    console.log('')
  }
}

const deploy = async (network, secret, etherscanApiKey) => {
  const deployer = new etherlime.InfuraPrivateKeyDeployer(secret, network, infuraApiKey)
  const wallet = new ethers.Wallet(secret, deployer.provider)

  // Set addresses by network
  const rewardTokensAddresses = [
    rewardAddresses[network]["ALBT"],
    rewardAddresses[network]["ALBT1"],
  ];

  const poolTokenAddresses = [
    poolAddresses[network][protocol]["ETH-ALBT-USDT"],
    poolAddresses[network][protocol]["ETH-ALBT1-USDT"],
  ];

  // Set reward rate
  const rewardsPerBlock = rewardTokensAddresses.map(el => parseEther("1"))

  // Deploy LMC Factory
  let LMCFactoryInstance;

  // Check for deployed Factory
  if (LMCFactoryAddress !== '') {
    LMCFactoryInstance = deployer.wrapDeployedContract(LMCFactory, LMCFactoryAddress, wallet)
  } else {
    LMCFactoryInstance = await deployer.deploy(LMCFactory, {})
  }

  // Mint reward tokens
  console.log(``)
  console.log(`Mint reward tokens for Factory LMC`)
  for (let i = 0; i < rewardTokensAddresses.length; i++) {
    // Get Reward Token Instance
    const rewardTokensInstance = new ethers.Contract(rewardTokensAddresses[i], TestERC20.abi, wallet)
    
    let mint = await rewardTokensInstance.mint(LMCFactoryInstance.contractAddress, amountReward)

    await logTx(mint);
  }

  // LMC settings
  const currentBlock = await deployer.provider.getBlock('latest')
  const startBlock = currentBlock.number + 10
  const endBlock = startBlock + BLOCKS_PER_DAY * 365

  let LMCAddresses = [];
  let LMCInstances = [];

  // Deploy LMC
  console.log(``)
  console.log(`Deploy LMC:`)
  for (let i = 0; i < poolTokenAddresses.length; i++) {
    console.log(`Deploying LMC: ${poolTokenAddresses[0]}`)
    let tx = await LMCFactoryInstance.deploy(poolTokenAddresses[0], startBlock, endBlock, rewardTokensAddresses, rewardsPerBlock, rewardTokensAddresses[0], stakeLimit, contractStakeLimit);

    await logTx(tx);
  }

  // Get Rewards Pool number
  let rewardsPoolsLength = await LMCFactoryInstance.getRewardsPoolNumber();
  
  for (let i = 0; i < rewardsPoolsLength; i++) {
    // Get LMC Address
    let LMCAddress = await LMCFactoryInstance.rewardsPools(i);
  
    // Get LMC Instance
    let LMCInstance = deployer.wrapDeployedContract(LMC, LMCAddress, wallet)
    
    LMCAddresses.push(LMCAddress)
    LMCInstances.push(LMCInstance)
  }

  let percentageCalculator;

  if (PercentageCalculatorAddress === "") {
    // Deploy Calculator
    percentageCalculator = await deployer.deploy(PercentageCalculator);
  } 

  // Scheme settings
  const libraries = {
    PercentageCalculator: PercentageCalculatorAddress === "" ? percentageCalculator.contractAddress : PercentageCalculatorAddress
  }

  const lockSchemеsSettings = [
    {
      title: "NO-LOCK",
      bonusPermile: 0,
      lockBlock: BLOCKS_PER_DAY * 365,
      rampUpBlock: BLOCKS_PER_DAY * 365 - 1
    },
    {
      title: "0M",
      bonusPermile: 0,
      lockBlock: BLOCKS_PER_DAY * 7,
      rampUpBlock: 1
    },
    {
      title: "3M",
      bonusPermile: 7000,
      lockBlock: BLOCKS_PER_DAY * 90,
      rampUpBlock: BLOCKS_PER_DAY * 30
    },
    {
      title: "6M",
      bonusPermile: 18000,
      lockBlock: BLOCKS_PER_DAY * 180,
      rampUpBlock: BLOCKS_PER_DAY * 60
    }
  ];

  // Deploy Lock Schemes
  console.log(``)
  console.log(`Deploy Lock Schemes:`)
  for (let i = 0; i < rewardsPoolsLength; i++) {
    const LMCAddress = await LMCFactoryInstance.rewardsPools(i);
    const lockSchemеs = [];

    console.log(`Deploying Lock Schemes for ${LMCAddress}:`)

    for (let j = 0; j < lockSchemеsSettings.length; j++) {
      
      // Deploy Lock Scheme
      let LSCInstance = await deployer.deploy(
        LockScheme,
        libraries,
        lockSchemеsSettings[j].lockBlock,
        lockSchemеsSettings[j].rampUpBlock,
        lockSchemеsSettings[j].bonusPermile,
        LMCAddress
      );

      lockSchemеs.push(LSCInstance.contractAddress);
    }
  
    // Set Lock Scheme
    let tx = await LMCFactoryInstance.setLockSchemesToLMC(lockSchemеs, LMCAddress)

    await logTx(tx);
  }

  // Set Transfered and receiver
  // let tx = await LMCFactoryInstance.enableReceivers("0xEFc4CE3a9b60BDd73a70B1916402fEE698B6aa61", ["0xF5D7fe0BAffaA7978B4799Bf26C50285E709B8c1"]);
  // await logTx(mint);
}

module.exports = {
  deploy
}