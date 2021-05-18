"use strict";
exports.__esModule = true;
exports.useMulticallContract = exports.usePairContract = exports.useBytes32TokenContract = exports.useENSResolverContract = exports.useENSRegistrarContract = exports.useCollectibleContract = exports.useCollectibleFactoryContract = exports.useWETHContract = exports.useTokenContract = void 0;
var sdk_1 = require("@pancakeswap-libs/sdk");
var IUniswapV2Pair_json_1 = require("@uniswap/v2-core/build/IUniswapV2Pair.json");
var react_1 = require("react");
var ens_registrar_json_1 = require("../constants/abis/ens-registrar.json");
var ens_public_resolver_json_1 = require("../constants/abis/ens-public-resolver.json");
var erc20_1 = require("../constants/abis/erc20");
var erc20_json_1 = require("../constants/abis/erc20.json");
var weth_json_1 = require("../constants/abis/weth.json");
var collectibleFactory_json_1 = require("../constants/abis/collectibleFactory.json");
var collectible_json_1 = require("../constants/abis/collectible.json");
var multicall_1 = require("../constants/multicall");
var utils_1 = require("../utils");
var index_1 = require("./index");
var constants_1 = require("../constants");
// returns null on errors
function useContract(address, ABI, withSignerIfPossible) {
    if (withSignerIfPossible === void 0) { withSignerIfPossible = true; }
    var _a = index_1.useActiveWeb3React(), library = _a.library, account = _a.account;
    return react_1.useMemo(function () {
        if (!address || !ABI || !library)
            return null;
        try {
            return utils_1.getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
        }
        catch (error) {
            console.error('Failed to get contract', error);
            return null;
        }
    }, [address, ABI, library, withSignerIfPossible, account]);
}
function useTokenContract(tokenAddress, withSignerIfPossible) {
    return useContract(tokenAddress, erc20_json_1["default"], withSignerIfPossible);
}
exports.useTokenContract = useTokenContract;
function useWETHContract(withSignerIfPossible) {
    var chainId = index_1.useActiveWeb3React().chainId;
    return useContract(chainId ? sdk_1.WETH[chainId].address : undefined, weth_json_1["default"], withSignerIfPossible);
}
exports.useWETHContract = useWETHContract;
function useCollectibleFactoryContract(withSignerIfPossible) {
    var chainId = index_1.useActiveWeb3React().chainId;
    return useContract(chainId ? constants_1.COLLECTIBLE_FACTORY_ADDRESS[chainId] : undefined, collectibleFactory_json_1["default"], withSignerIfPossible);
}
exports.useCollectibleFactoryContract = useCollectibleFactoryContract;
function useCollectibleContract(withSignerIfPossible) {
    var chainId = index_1.useActiveWeb3React().chainId;
    return useContract(chainId ? constants_1.COLLECTIBLE_ADDRESS[chainId] : undefined, collectible_json_1["default"], withSignerIfPossible);
}
exports.useCollectibleContract = useCollectibleContract;
function useENSRegistrarContract(withSignerIfPossible) {
    var chainId = index_1.useActiveWeb3React().chainId;
    var address;
    if (chainId) {
        switch (chainId) {
            case sdk_1.ChainId.MAINNET:
            case sdk_1.ChainId.BSCTESTNET:
        }
    }
    return useContract(address, ens_registrar_json_1["default"], withSignerIfPossible);
}
exports.useENSRegistrarContract = useENSRegistrarContract;
function useENSResolverContract(address, withSignerIfPossible) {
    return useContract(address, ens_public_resolver_json_1["default"], withSignerIfPossible);
}
exports.useENSResolverContract = useENSResolverContract;
function useBytes32TokenContract(tokenAddress, withSignerIfPossible) {
    return useContract(tokenAddress, erc20_1.ERC20_BYTES32_ABI, withSignerIfPossible);
}
exports.useBytes32TokenContract = useBytes32TokenContract;
function usePairContract(pairAddress, withSignerIfPossible) {
    return useContract(pairAddress, IUniswapV2Pair_json_1.abi, withSignerIfPossible);
}
exports.usePairContract = usePairContract;
function useMulticallContract() {
    var chainId = index_1.useActiveWeb3React().chainId;
    return useContract(chainId && multicall_1.MULTICALL_NETWORKS[chainId], multicall_1.MULTICALL_ABI, false);
}
exports.useMulticallContract = useMulticallContract;
