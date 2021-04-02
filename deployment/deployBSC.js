const etherlime = require('etherlime-lib')
const ethers = require('ethers')

const NonCompoundingRewardsPoolFactory = require('../build/NonCompoundingRewardsPoolFactory.json')
const TestERC20 = require('../build/TestERC20.json')
const Treasury = require('../build/Treasury.json')

// CONTSANTS
const BLOCKS_PER_DAY_BSC = 28800
const BLOCKS_PER_HOUR_BSC = BLOCKS_PER_DAY_BSC / 24
const BLOCKS_PER_MINUTE_BSC = BLOCKS_PER_HOUR_BSC / 60
const BLOCKS_PER_SECOND_BSC = BLOCKS_PER_MINUTE_BSC / 60
const BLOCKS_PER_WEEK_BSC = BLOCKS_PER_DAY_BSC * 7
const BLOCKS_PER_30_DAYS_BSC = BLOCKS_PER_DAY_BSC * 30

// Addresses
const BSCTestALBTAddress = "0x666e672B2Ada59979Fc4dB7AF9A4710E0E4D51E6"
const PancakeSwapRouter = "0xd954551853F55deb4Ae31407c423e67B1621424A" //This address is not real

let rewardTokensAddresses = [BSCTestALBTAddress]
let rewardsPerBock = []
let throttleRoundBlocks = BLOCKS_PER_MINUTE_BSC * 10

const deploy = async (network, secret, etherscanApiKey) => {
  const { parseEther } = ethers.utils

  const deployer = new etherlime.JSONRPCPrivateKeyDeployer(secret, 'https://data-seed-prebsc-1-s1.binance.org:8545/', {})
  const wallet = new ethers.Wallet(secret, deployer.provider)

  let albtInstance = new ethers.Contract(BSCTestALBTAddress, TestERC20.abi, wallet)

  let parsedReward = parseEther(`10`)
  rewardsPerBock.push(parsedReward)

  // Stake limits
  const stakeLimit = parseEther(`200`)
  const contractStakeLimit = parseEther(`400`)
  const longerContractStakeLimit = parseEther(`4000`)
  const throttleRoundCap = parseEther(`400`)

  const currentBlock = await deployer.provider.getBlock('latest')

  const startBlock = currentBlock.number + 5 * BLOCKS_PER_MINUTE_BSC    // 5 minutes timeout
  const endBlock0 = startBlock + (BLOCKS_PER_MINUTE_BSC * 30)           // 7 days / 30 minutes of staking
  const endBlock1 = startBlock + BLOCKS_PER_HOUR_BSC                    // 1 month / 60 minutes of staking
  const endBlock3 = startBlock + (BLOCKS_PER_HOUR_BSC * 24)             // 3 months / 24 hours of staking
  const endBlock6 = startBlock + (BLOCKS_PER_30_DAYS_BSC * 6)           // 6 months of staking
  const endBlock12 = startBlock + (BLOCKS_PER_30_DAYS_BSC * 12)         // 12 months of staking
  const endBlock24 = startBlock + (BLOCKS_PER_30_DAYS_BSC * 24)         // 24 monts of staking

  const blockDelta = endBlock24 - startBlock

  const amountToTransfer = rewardsPerBock[0].mul(blockDelta)
  const allRewards = amountToTransfer.mul(5)
  const gasPrice = { gasPrice: 20000000000 }

  const TreasuryInstance = await deployer.deploy(Treasury, {}, PancakeSwapRouter, BSCTestALBTAddress, gasPrice)
  console.log('\x1b[36m%s\x1b[0m', `--- Treasury address: ${TreasuryInstance.contractAddress} ---`)

  const NonCompoundingRewardsPoolFactoryInstance = await deployer.deploy(NonCompoundingRewardsPoolFactory, {}, TreasuryInstance.contractAddress, BSCTestALBTAddress, gasPrice)
  console.log('\x1b[36m%s\x1b[0m', `--- Factory address: ${NonCompoundingRewardsPoolFactoryInstance.contractAddress} ---`)

  // Mint
  const mint = await albtInstance.mint(NonCompoundingRewardsPoolFactoryInstance.contractAddress, allRewards, gasPrice)
  const mintStatus = await mint.wait()

  const poolDeployment0 = await NonCompoundingRewardsPoolFactoryInstance.deploy(BSCTestALBTAddress, startBlock, endBlock0, rewardTokensAddresses, rewardsPerBock, stakeLimit, throttleRoundBlocks, throttleRoundCap, contractStakeLimit, gasPrice)
  await poolDeployment0.wait()

  let nonCompoundingPool0 = await NonCompoundingRewardsPoolFactoryInstance.rewardsPools(0)
  console.log('\x1b[36m%s\x1b[0m', `--- First NonCompoundingPool address 0: ${nonCompoundingPool0} ---`)

  let poolDeployment = await NonCompoundingRewardsPoolFactoryInstance.deploy(BSCTestALBTAddress, startBlock, endBlock1, rewardTokensAddresses, rewardsPerBock, stakeLimit, throttleRoundBlocks, throttleRoundCap, contractStakeLimit, gasPrice)
  await poolDeployment.wait()

  let nonCompoundingPool1 = await NonCompoundingRewardsPoolFactoryInstance.rewardsPools(1)
  console.log('\x1b[36m%s\x1b[0m', `--- First NonCompoundingPool address 1: ${nonCompoundingPool1} ---`)

  let poolDeployment3 = await NonCompoundingRewardsPoolFactoryInstance.deploy(BSCTestALBTAddress, startBlock, endBlock3, rewardTokensAddresses, rewardsPerBock, stakeLimit, throttleRoundBlocks, throttleRoundCap, contractStakeLimit, gasPrice)
  await poolDeployment3.wait()

  let nonCompoundingPool3 = await NonCompoundingRewardsPoolFactoryInstance.rewardsPools(2)
  console.log('\x1b[36m%s\x1b[0m', `--- First NonCompoundingPool address 3: ${nonCompoundingPool3} ---`)

  let poolDeployment6 = await NonCompoundingRewardsPoolFactoryInstance.deploy(BSCTestALBTAddress, startBlock, endBlock6, rewardTokensAddresses, rewardsPerBock, stakeLimit, throttleRoundBlocks, throttleRoundCap, contractStakeLimit, gasPrice)
  await poolDeployment6.wait()

  let nonCompoundingPool6 = await NonCompoundingRewardsPoolFactoryInstance.rewardsPools(3)
  console.log('\x1b[36m%s\x1b[0m', `--- First NonCompoundingPool address 6: ${nonCompoundingPool6} ---`)

  let poolDeployment12 = await NonCompoundingRewardsPoolFactoryInstance.deploy(BSCTestALBTAddress, startBlock, endBlock12, rewardTokensAddresses, rewardsPerBock, stakeLimit, throttleRoundBlocks, throttleRoundCap, longerContractStakeLimit, gasPrice)
  await poolDeployment12.wait()

  let nonCompoundingPool12 = await NonCompoundingRewardsPoolFactoryInstance.rewardsPools(4)
  console.log('\x1b[36m%s\x1b[0m', `--- First NonCompoundingPool address 12: ${nonCompoundingPool12} ---`)

  let poolDeployment24 = await NonCompoundingRewardsPoolFactoryInstance.deploy(BSCTestALBTAddress, startBlock, endBlock24, rewardTokensAddresses, rewardsPerBock, stakeLimit, throttleRoundBlocks, throttleRoundCap, longerContractStakeLimit, gasPrice)
  await poolDeployment24.wait()

  let nonCompoundingPool24 = await NonCompoundingRewardsPoolFactoryInstance.rewardsPools(5)
  console.log('\x1b[36m%s\x1b[0m', `--- First NonCompoundingPool address 24: ${nonCompoundingPool24} ---`)

  await NonCompoundingRewardsPoolFactoryInstance.enableReceivers(nonCompoundingPool0, [nonCompoundingPool1, nonCompoundingPool3, nonCompoundingPool6, nonCompoundingPool12, nonCompoundingPool24], gasPrice)
  await NonCompoundingRewardsPoolFactoryInstance.enableReceivers(nonCompoundingPool1, [nonCompoundingPool1, nonCompoundingPool3, nonCompoundingPool6, nonCompoundingPool12, nonCompoundingPool24], gasPrice)
  await NonCompoundingRewardsPoolFactoryInstance.enableReceivers(nonCompoundingPool3, [nonCompoundingPool1, nonCompoundingPool3, nonCompoundingPool6, nonCompoundingPool12, nonCompoundingPool24], gasPrice)
  await NonCompoundingRewardsPoolFactoryInstance.enableReceivers(nonCompoundingPool6, [nonCompoundingPool1, nonCompoundingPool3, nonCompoundingPool6, nonCompoundingPool12, nonCompoundingPool24], gasPrice)
  await NonCompoundingRewardsPoolFactoryInstance.enableReceivers(nonCompoundingPool24, [nonCompoundingPool1, nonCompoundingPool3, nonCompoundingPool6, nonCompoundingPool12, nonCompoundingPool24], gasPrice)

  console.log(`
helperContracts: {
  "factory" : "${NonCompoundingRewardsPoolFactoryInstance.contractAddress}",
  "treasury": "${TreasuryInstance.contractAddress}"
},
  `)

  console.log(`
stakerContracts: {
    "bALBT-0M": "${nonCompoundingPool0}",
    "bALBT-1M": "${nonCompoundingPool1}",
    "bALBT-3M": "${nonCompoundingPool3}",
    "bALBT-6M": "${nonCompoundingPool6}",
    "bALBT-12M": "${nonCompoundingPool12}",
    "bALBT-24M": "${nonCompoundingPool24}"
},
  `)
}

module.exports = {
  deploy
}