"use strict";
exports.__esModule = true;
exports.useCollectibleEditions = void 0;
function useCollectibleEditions() {
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
    return null;
}
exports.useCollectibleEditions = useCollectibleEditions;
exports["default"] = useCollectibleEditions;
