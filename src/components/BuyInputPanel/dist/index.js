"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@geist-ui/react");
var styled_components_1 = require("styled-components");
var polished_1 = require("polished");
var useI18n_1 = require("hooks/useI18n");
var hooks_1 = require("../../state/wallet/hooks");
var CurrencyLogo_1 = require("../CurrencyLogo");
var Row_1 = require("../Row");
var NumericalInput_1 = require("../NumericalInput");
var hooks_2 = require("../../hooks");
var InputRow = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 0.75rem 0.5rem 0.75rem 1rem;\n"], ["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 0.75rem 0.5rem 0.75rem 1rem;\n"])));
var LabelRow = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: #fff;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: #fff;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.2, theme.colors.textSubtle);
});
var Aligner = styled_components_1["default"].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var InputPanel = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.1);\n  color: #fff;\n  z-index: 1;\n"], ["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.1);\n  color: #fff;\n  z-index: 1;\n"])));
var Container = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 1px solid rgb(75, 242, 205);\n"], ["\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 1px solid rgb(75, 242, 205);\n"])));
var StyledText = styled_components_1["default"](react_2.Text)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 0;\n  font-weight: 500 !important;\n"], ["\n  margin: 0;\n  font-weight: 500 !important;\n"])));
var StyledTextHover = styled_components_1["default"](react_2.Text)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 0 !important;\n  display: inline !important;\n  cursor: pointer !important;\n  font-weight: 500 !important;\n\n  :hover {\n    color: #4bf2cd !important;\n  }\n"], ["\n  margin: 0 !important;\n  display: inline !important;\n  cursor: pointer !important;\n  font-weight: 500 !important;\n\n  :hover {\n    color: #4bf2cd !important;\n  }\n"])));
function BuyInputPanel(_a) {
    var value = _a.value, onUserInput = _a.onUserInput, label = _a.label, currency = _a.currency, id = _a.id;
    var account = hooks_2.useActiveWeb3React().account;
    var selectedCurrencyBalance = hooks_1.useCurrencyBalance(account !== null && account !== void 0 ? account : undefined, currency !== null && currency !== void 0 ? currency : undefined);
    var TranslateString = useI18n_1["default"]();
    var translatedLabel = label || TranslateString(132, 'Input');
    return (react_1["default"].createElement(InputPanel, { id: id },
        react_1["default"].createElement(Container, { hideInput: false },
            react_1["default"].createElement(LabelRow, null,
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement(StyledText, null, translatedLabel),
                    account && (react_1["default"].createElement(StyledTextHover, { onClick: function () { return onUserInput((selectedCurrencyBalance === null || selectedCurrencyBalance === void 0 ? void 0 : selectedCurrencyBalance.toSignificant(6)) || '0'); } }, !!currency && selectedCurrencyBalance ? "Saldo: " + (selectedCurrencyBalance === null || selectedCurrencyBalance === void 0 ? void 0 : selectedCurrencyBalance.toSignificant(6)) : ' -')))),
            react_1["default"].createElement(InputRow, null,
                react_1["default"].createElement(NumericalInput_1.Input, { className: "token-amount-input", value: value, onUserInput: function (val) {
                        onUserInput(val);
                    } }),
                currency && (react_1["default"].createElement(Aligner, { style: { marginRight: 8 } },
                    react_1["default"].createElement(CurrencyLogo_1["default"], { currency: currency, size: "24px", style: { marginRight: '8px', width: 24, height: 24 } }),
                    react_1["default"].createElement(StyledText, null, currency && currency.symbol && currency.symbol.length > 20
                        ? currency.symbol.slice(0, 4) + "..." + currency.symbol.slice(currency.symbol.length - 5, currency.symbol.length)
                        : currency === null || currency === void 0 ? void 0 : currency.symbol)))))));
}
exports["default"] = BuyInputPanel;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
