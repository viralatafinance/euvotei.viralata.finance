"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var sdk_1 = require("@pancakeswap-libs/sdk");
var react_1 = require("@geist-ui/react");
var react_2 = require("react");
var styled_components_1 = require("styled-components");
var useI18n_1 = require("../../../hooks/useI18n");
var utils_1 = require("../../../utils");
var Loader_1 = require("../../../components/Loader");
var Column_1 = require("../../../components/Column");
var useApproveCallback_1 = require("../../../hooks/useApproveCallback");
var WarningContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 420px;\n  width: 100%;\n  overflow: auto;\n  text-align: left;\n  margin-top: 20px;\n"], ["\n  max-width: 420px;\n  width: 100%;\n  overflow: auto;\n  text-align: left;\n  margin-top: 20px;\n"])));
var StyledText = styled_components_1["default"](react_1.Text)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 16px;\n  margin: 0px 0px;\n  font-weight: 400;\n"], ["\n  font-size: 16px;\n  margin: 0px 0px;\n  font-weight: 400;\n"])));
var StyledTitle = styled_components_1["default"](StyledText)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #4bf2cd !important;\n  font-size: 22px;\n  font-weight: 700;\n  margin-left: 5px;\n  text-transform: uppercase;\n"], ["\n  color: #4bf2cd !important;\n  font-size: 22px;\n  font-weight: 700;\n  margin-left: 5px;\n  text-transform: uppercase;\n"])));
var StyledLoader = styled_components_1["default"](Loader_1["default"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  stroke: #000 !important;\n  path {\n    stroke: #000 !important;\n  }\n"], ["\n  stroke: #000 !important;\n  path {\n    stroke: #000 !important;\n  }\n"])));
function DonateConfirmModal(_a) {
    var isOpen = _a.isOpen, collectible = _a.collectible, onConfirm = _a.onConfirm;
    var TranslateString = useI18n_1["default"]();
    var minimumDonation = utils_1.getCurrencyAmount(collectible === null || collectible === void 0 ? void 0 : collectible.currency, collectible === null || collectible === void 0 ? void 0 : collectible.price);
    var _b = react_2.useState(minimumDonation), amountToDonate = _b[0], setAmountToDonate = _b[1];
    var _c = useApproveCallback_1.useApproveCallbackCollectibleFactory((collectible === null || collectible === void 0 ? void 0 : collectible.currency) ? new sdk_1.TokenAmount(collectible === null || collectible === void 0 ? void 0 : collectible.currency, amountToDonate) : undefined), approval = _c[0], approveCallback = _c[1];
    var _d = react_2.useState(false), approving = _d[0], setApproving = _d[1];
    return (react_2["default"].createElement(react_1.Modal, { disableBackdropClick: true, open: isOpen, onClose: onConfirm, wrapClassName: "viralata-modal" },
        react_2["default"].createElement(react_1.Modal.Title, null,
            react_2["default"].createElement(StyledTitle, null, TranslateString(1128, 'Confirmar doação'))),
        react_2["default"].createElement(WarningContainer, null,
            react_2["default"].createElement(Column_1.AutoColumn, { gap: "24px" },
                react_2["default"].createElement(StyledText, null, TranslateString(1130, 'Ao doar você estará enviando seus tokens para o Fundo de Caridade Viralata que posteriormente serão enviados para as respectivas instituições de caridade.'))))));
}
exports["default"] = DonateConfirmModal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
