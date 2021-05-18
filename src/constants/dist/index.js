"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a, _b, _c, _d, _e, _f, _g, _h;
exports.__esModule = true;
exports.MIN_ETH = exports.BLOCKED_PRICE_IMPACT_NON_EXPERT = exports.PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN = exports.ALLOWED_PRICE_IMPACT_HIGH = exports.ALLOWED_PRICE_IMPACT_MEDIUM = exports.ALLOWED_PRICE_IMPACT_LOW = exports.BIPS_BASE = exports.ONE_BIPS = exports.DEFAULT_DEADLINE_FROM_NOW = exports.INITIAL_ALLOWED_SLIPPAGE = exports.NetworkContextName = exports.PINNED_PAIRS = exports.BASES_TO_TRACK_LIQUIDITY_FOR = exports.SUGGESTED_BASES = exports.CUSTOM_BASES = exports.BASES_TO_CHECK_TRADES_AGAINST = exports.ETH = exports.UST = exports.USDT = exports.BUSD = exports.DAI = exports.COLLECTIBLE_ADDRESS = exports.COLLECTIBLE_FACTORY_ADDRESS = exports.ROUTER_ADDRESS = void 0;
var sdk_1 = require("@pancakeswap-libs/sdk");
exports.ROUTER_ADDRESS = '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F';
exports.COLLECTIBLE_FACTORY_ADDRESS = (_a = {},
    _a[sdk_1.ChainId.MAINNET] = '0xd7eC2C74808c1f15AdC9028E092A08D5d446b364',
    _a[sdk_1.ChainId.BSCTESTNET] = '0xd7eC2C74808c1f15AdC9028E092A08D5d446b364',
    _a);
exports.COLLECTIBLE_ADDRESS = (_b = {},
    _b[sdk_1.ChainId.MAINNET] = '0x4374dB92BC4c551450A1Cb27ed99090307b11D5D',
    _b[sdk_1.ChainId.BSCTESTNET] = '0x4374dB92BC4c551450A1Cb27ed99090307b11D5D',
    _b);
exports.DAI = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin');
exports.BUSD = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD');
exports.USDT = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD');
exports.UST = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x23396cf899ca06c4472205fc903bdb4de249d6fc', 18, 'UST', 'Wrapped UST Token');
exports.ETH = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x2170ed0880ac9a755fd29b2688956bd959f933f8', 18, 'ETH', 'Binance-Peg Ethereum Token');
var WETH_ONLY = (_c = {},
    _c[sdk_1.ChainId.MAINNET] = [sdk_1.WETH[sdk_1.ChainId.MAINNET]],
    _c[sdk_1.ChainId.BSCTESTNET] = [sdk_1.WETH[sdk_1.ChainId.BSCTESTNET]],
    _c);
// used to construct intermediary pairs for trading
exports.BASES_TO_CHECK_TRADES_AGAINST = __assign(__assign({}, WETH_ONLY), (_d = {}, _d[sdk_1.ChainId.MAINNET] = __spreadArrays(WETH_ONLY[sdk_1.ChainId.MAINNET], [exports.DAI, exports.BUSD, exports.USDT, exports.UST, exports.ETH]), _d));
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
exports.CUSTOM_BASES = (_e = {},
    _e[sdk_1.ChainId.MAINNET] = {},
    _e);
// used for display in the default list when adding liquidity
exports.SUGGESTED_BASES = __assign(__assign({}, WETH_ONLY), (_f = {}, _f[sdk_1.ChainId.MAINNET] = __spreadArrays(WETH_ONLY[sdk_1.ChainId.MAINNET], [exports.DAI, exports.BUSD, exports.USDT]), _f));
// used to construct the list of all pairs we consider by default in the frontend
exports.BASES_TO_TRACK_LIQUIDITY_FOR = __assign(__assign({}, WETH_ONLY), (_g = {}, _g[sdk_1.ChainId.MAINNET] = __spreadArrays(WETH_ONLY[sdk_1.ChainId.MAINNET], [exports.DAI, exports.BUSD, exports.USDT]), _g));
exports.PINNED_PAIRS = (_h = {},
    _h[sdk_1.ChainId.MAINNET] = [
        [
            new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', 18, 'CAKE', 'PancakeSwap Token'),
            new sdk_1.Token(sdk_1.ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
        ],
        [exports.BUSD, exports.USDT],
        [exports.DAI, exports.USDT],
    ],
    _h);
exports.NetworkContextName = 'NETWORK';
// default allowed slippage, in bips
exports.INITIAL_ALLOWED_SLIPPAGE = 80;
// 20 minutes, denominated in seconds
exports.DEFAULT_DEADLINE_FROM_NOW = 60 * 20;
// one basis point
exports.ONE_BIPS = new sdk_1.Percent(sdk_1.JSBI.BigInt(1), sdk_1.JSBI.BigInt(10000));
exports.BIPS_BASE = sdk_1.JSBI.BigInt(10000);
// used for warning states
exports.ALLOWED_PRICE_IMPACT_LOW = new sdk_1.Percent(sdk_1.JSBI.BigInt(100), exports.BIPS_BASE); // 1%
exports.ALLOWED_PRICE_IMPACT_MEDIUM = new sdk_1.Percent(sdk_1.JSBI.BigInt(300), exports.BIPS_BASE); // 3%
exports.ALLOWED_PRICE_IMPACT_HIGH = new sdk_1.Percent(sdk_1.JSBI.BigInt(500), exports.BIPS_BASE); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
exports.PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN = new sdk_1.Percent(sdk_1.JSBI.BigInt(1000), exports.BIPS_BASE); // 10%
// for non expert mode disable swaps above this
exports.BLOCKED_PRICE_IMPACT_NON_EXPERT = new sdk_1.Percent(sdk_1.JSBI.BigInt(1500), exports.BIPS_BASE); // 15%
// used to ensure the user doesn't send so much ETH so they end up with <.01
exports.MIN_ETH = sdk_1.JSBI.exponentiate(sdk_1.JSBI.BigInt(10), sdk_1.JSBI.BigInt(16)); // .01 ETH
