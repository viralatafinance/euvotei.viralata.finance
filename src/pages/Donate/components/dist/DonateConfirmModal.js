"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var sdk_1 = require("@pancakeswap-libs/sdk");
var react_1 = require("@geist-ui/react");
var react_2 = require("react");
var styled_components_1 = require("styled-components");
var useI18n_1 = require("../../../hooks/useI18n");
var utils_1 = require("../../../utils");
var ButtonCTA_1 = require("../../../components/ButtonCTA");
var Loader_1 = require("../../../components/Loader");
var Row_1 = require("../../../components/Row");
var Column_1 = require("../../../components/Column");
var BuyInputPanel_1 = require("../../../components/BuyInputPanel");
var useApproveCallback_1 = require("../../../hooks/useApproveCallback");
var WarningContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 420px;\n  width: 100%;\n  overflow: auto;\n  text-align: left;\n  margin-top: 20px;\n"], ["\n  max-width: 420px;\n  width: 100%;\n  overflow: auto;\n  text-align: left;\n  margin-top: 20px;\n"])));
var StyledText = styled_components_1["default"](react_1.Text)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 16px;\n  margin: 0px 0px;\n  font-weight: 400;\n"], ["\n  font-size: 16px;\n  margin: 0px 0px;\n  font-weight: 400;\n"])));
var StyledTitle = styled_components_1["default"](StyledText)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #4bf2cd !important;\n  font-size: 22px;\n  font-weight: 700;\n  margin-left: 5px;\n  text-transform: uppercase;\n"], ["\n  color: #4bf2cd !important;\n  font-size: 22px;\n  font-weight: 700;\n  margin-left: 5px;\n  text-transform: uppercase;\n"])));
var StyledLoader = styled_components_1["default"](Loader_1["default"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  stroke: #000 !important;\n  path {\n    stroke: #000 !important;\n  }\n"], ["\n  stroke: #000 !important;\n  path {\n    stroke: #000 !important;\n  }\n"])));
function DonateConfirmModal(_a) {
    var _this = this;
    var _b;
    var isOpen = _a.isOpen, collectible = _a.collectible, onConfirm = _a.onConfirm;
    var TranslateString = useI18n_1["default"]();
    var minimumDonation = utils_1.getCurrencyAmount(collectible === null || collectible === void 0 ? void 0 : collectible.currency, collectible === null || collectible === void 0 ? void 0 : collectible.price);
    var _c = react_2.useState(minimumDonation), amountToDonate = _c[0], setAmountToDonate = _c[1];
    var _d = useApproveCallback_1.useApproveCallbackCollectibleFactory((collectible === null || collectible === void 0 ? void 0 : collectible.currency) ? new sdk_1.TokenAmount(collectible === null || collectible === void 0 ? void 0 : collectible.currency, amountToDonate) : undefined), approval = _d[0], approveCallback = _d[1];
    var _e = react_2.useState(false), approving = _e[0], setApproving = _e[1];
    return (react_2["default"].createElement(react_1.Modal, { disableBackdropClick: true, open: isOpen, onClose: onConfirm, wrapClassName: "viralata-modal" },
        react_2["default"].createElement(react_1.Modal.Title, null,
            react_2["default"].createElement(StyledTitle, null, TranslateString(1128, 'Confirmar doação'))),
        react_2["default"].createElement(WarningContainer, null,
            react_2["default"].createElement(Column_1.AutoColumn, { gap: "24px" },
                react_2["default"].createElement(StyledText, null, TranslateString(1130, 'Ao doar você estará enviando seus tokens para o Fundo de Caridade Viralata que posteriormente serão enviados para as respectivas instituições de caridade.')),
                react_2["default"].createElement(StyledText, null, TranslateString(1132, 'Após doar, você receberá em sua carteira um token único e colecionável como memória de seu ato de bondade.')),
                react_2["default"].createElement(StyledText, null, TranslateString(1134, 'Você pode doar a quantidade de tokens que quiser acima do valor mínimo.')),
                react_2["default"].createElement(StyledText, null,
                    TranslateString(1134, 'Valor mínimo: '),
                    react_2["default"].createElement("b", null,
                        minimumDonation,
                        " ", (_b = collectible === null || collectible === void 0 ? void 0 : collectible.currency) === null || _b === void 0 ? void 0 :
                        _b.symbol)),
                react_2["default"].createElement(BuyInputPanel_1["default"], { label: "Quantidade", value: amountToDonate, id: (collectible === null || collectible === void 0 ? void 0 : collectible.name) || '0', onUserInput: function (value) { return setAmountToDonate(value); }, currency: collectible === null || collectible === void 0 ? void 0 : collectible.currency }),
                react_2["default"].createElement(ButtonCTA_1["default"], { className: "token-dismiss-button", disabled: approval === useApproveCallback_1.ApprovalState.PENDING || approving, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                        var exception_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(approval === useApproveCallback_1.ApprovalState.NOT_APPROVED)) return [3 /*break*/, 5];
                                    setApproving(true);
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, 4, 5]);
                                    return [4 /*yield*/, approveCallback()];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 5];
                                case 3:
                                    exception_1 = _a.sent();
                                    console.error(exception_1);
                                    return [3 /*break*/, 5];
                                case 4:
                                    setApproving(false);
                                    return [7 /*endfinally*/];
                                case 5:
                                    onConfirm();
                                    return [2 /*return*/];
                            }
                        });
                    }); } }, approval === useApproveCallback_1.ApprovalState.PENDING || approving ? (react_2["default"].createElement(Row_1.AutoRow, { gap: "6px", justify: "center" },
                    "Aprovando ",
                    react_2["default"].createElement(StyledLoader, null))) : approval === useApproveCallback_1.ApprovalState.NOT_APPROVED ? (TranslateString(150, 'Aprovar e confirmar doação')) : (TranslateString(150, 'Confirmar doação')))))));
}
exports["default"] = DonateConfirmModal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
