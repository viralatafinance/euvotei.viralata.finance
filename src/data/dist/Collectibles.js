"use strict";
exports.__esModule = true;
exports.useCollectibleEditions = void 0;
var react_1 = require("react");
var useContract_1 = require("../hooks/useContract");
var hooks_1 = require("../state/multicall/hooks");
var Tokens_1 = require("../hooks/Tokens");
function useCollectibleEditions() {
    var _a, _b, _c;
    var contract = useContract_1.useCollectibleFactoryContract(false);
    // const editionsLength: BigNumber = useSingleCallResult(contract, 'getEditionsLength')?.result?.[0]
    // const result: CollectibleEdition[] = []
    var editionInfo = (_a = hooks_1.useSingleCallResult(contract, 'collectibleEditionInfo', [0])) === null || _a === void 0 ? void 0 : _a.result;
    var editionOwners = (_c = (_b = hooks_1.useSingleCallResult(contract, 'getEditionOwners', [0])) === null || _b === void 0 ? void 0 : _b.result) === null || _c === void 0 ? void 0 : _c[0];
    var _d = editionInfo || [], editionSpendable = _d[3];
    var editionCurrency = Tokens_1.useCurrency(editionSpendable);
    var convertEditionInfo = function (info, owners, currency) {
        var _a = info || [], name = _a[0], description = _a[1], uri = _a[2], spendable = _a[3], price = _a[4], receiver = _a[5], startBlock = _a[6], endBlock = _a[7], limit = _a[8];
        return { name: name, description: description, uri: uri, currency: currency, price: price, receiver: receiver, startBlock: startBlock, endBlock: endBlock, limit: limit, owners: owners };
    };
    return react_1.useMemo(function () { return convertEditionInfo(editionInfo, editionOwners, editionCurrency); }, [editionInfo, editionOwners, editionCurrency]);
}
exports.useCollectibleEditions = useCollectibleEditions;
exports["default"] = useCollectibleEditions;
