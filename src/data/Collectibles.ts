import { BigNumber } from '@ethersproject/bignumber'
import { useMemo } from 'react'
import { Currency, Token } from '@pancakeswap-libs/sdk'
import { useCollectibleFactoryContract } from '../hooks/useContract'
import { useSingleCallResult } from '../state/multicall/hooks'
import { useCurrency } from '../hooks/Tokens'

// returns undefined if input token is undefined, or fails to get token contract,
// or contract total supply cannot be fetched

export interface CollectibleEdition {
  name: string
  description: string
  uri: string
  currency?: Token
  price: BigNumber
  receiver: string
  startBlock: string
  endBlock: string
  limit: string
  owners: BigNumber
}

export function useCollectibleEditions(): CollectibleEdition | undefined {
  const contract = useCollectibleFactoryContract(false)

  // const editionsLength: BigNumber = useSingleCallResult(contract, 'getEditionsLength')?.result?.[0]
  // const result: CollectibleEdition[] = []

  const editionInfo: any = useSingleCallResult(contract, 'collectibleEditionInfo', [0])?.result
  const editionOwners: BigNumber = useSingleCallResult(contract, 'getEditionOwners', [0])?.result?.[0]
  const [, , , editionSpendable] = editionInfo || []
  const editionCurrency = useCurrency(editionSpendable)

  const convertEditionInfo = (info, owners, currency) => {
    const [name, description, uri, spendable, price, receiver, startBlock, endBlock, limit] = info || []
    return { name, description, uri, currency, price, receiver, startBlock, endBlock, limit, owners }
  }

  return useMemo(() => convertEditionInfo(editionInfo, editionOwners, editionCurrency), [editionInfo, editionOwners, editionCurrency])
}

export default useCollectibleEditions
