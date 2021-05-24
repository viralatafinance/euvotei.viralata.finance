import { BigNumber } from '@ethersproject/bignumber'
import { useMemo, useCallback } from 'react'
import { Currency, Token } from '@pancakeswap-libs/sdk'
import { useCollectibleFactoryContract } from '../hooks/useContract'
import { useSingleCallResult } from '../state/multicall/hooks'
import { useCurrency } from '../hooks/Tokens'

// returns undefined if input token is undefined, or fails to get token contract,
// or contract total supply cannot be fetched

export interface CollectibleEdition {
  uri: string
  currency?: Token
  price: BigNumber
  startBlock: string
  endBlock: string
  limit: BigNumber
  owners: BigNumber
}

export function useCollectibleEditions(): CollectibleEdition[] | undefined {
  /*
  const contract = useCollectibleFactoryContract(false)

  const editionLenght: any = useSingleCallResult(contract, 'getEditionsLength')?.result

  if (editionLenght) {
    console.log('useCollectibleEditions')
  }

  const convertEditionInfo = (info, owners, currency) => {
    const [uri, , spendable, price, receiver, startBlock, endBlock, limit] = info || []
    return { uri, currency, price, receiver, startBlock, endBlock, limit, owners }
  }

  return useMemo(() => {
    const collectibleEditions: CollectibleEdition[] = []
    for (let i = 0; i < editionLenght; i++) {
      const [uri, receivers, spendable, price, startBlock, endBlock, limit]: any = useSingleCallResult(contract, 'editionInfo', [i])?.result
      const owners: BigNumber = useSingleCallResult(contract, 'getEditionOwners', [i])?.result?.[0]
      const currency = useCurrency(spendable)
      collectibleEditions.push({
        uri,
        currency: null,
        price,
        startBlock,
        endBlock,
        limit,
        owners,
      })
    }
    return collectibleEditions
  }, [editionLenght, contract])
  */
  return null
}

export default useCollectibleEditions
