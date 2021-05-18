"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledTilt = exports.StyledText = exports.StyledTitle = exports.StyledWrapper = exports.StyledImage = void 0;
var react_1 = require("react");
var react_2 = require("@geist-ui/react");
var react_tilt_1 = require("react-tilt");
var styled_components_1 = require("styled-components");
var hooks_1 = require("../../../hooks");
var useI18n_1 = require("../../../hooks/useI18n");
var utils_1 = require("../../../utils");
exports.StyledImage = styled_components_1["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.StyledWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: center;\n  color: white !important;\n  margin-bottom: 15px;\n"], ["\n  text-align: center;\n  color: white !important;\n  margin-bottom: 15px;\n"])));
exports.StyledTitle = styled_components_1["default"](react_2.Text)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0px;\n  font-weight: 700;\n  font-size: 32px;\n  margin-top: 10px;\n"], ["\n  margin: 0px;\n  font-weight: 700;\n  font-size: 32px;\n  margin-top: 10px;\n"])));
exports.StyledText = styled_components_1["default"](react_2.Text)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0px;\n  font-weight: 300;\n  font-size: 18px;\n  margin-top: 10px;\n"], ["\n  margin: 0px;\n  font-weight: 300;\n  font-size: 18px;\n  margin-top: 10px;\n"])));
exports.StyledTilt = styled_components_1["default"](react_tilt_1["default"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n"], ["\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n"])));
function DonateCard(_a, showTotalDonated) {
    var _b, _c;
    var collectible = _a.collectible;
    var TranslateString = useI18n_1["default"]();
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var account = hooks_1.useActiveWeb3React().account;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, collectible && collectible.price && (react_1["default"].createElement("div", null,
        collectible.uri && (react_1["default"].createElement(exports.StyledTilt, { options: { max: 40, scale: 1.08 } },
            react_1["default"].createElement(exports.StyledImage, { alt: "NFT", src: "/images/bitcao.png" }))),
        react_1["default"].createElement(exports.StyledWrapper, null,
            react_1["default"].createElement(exports.StyledTitle, null, collectible.name),
            react_1["default"].createElement(exports.StyledText, null, collectible.description),
            react_1["default"].createElement(exports.StyledText, null,
                "Doa\u00E7\u00E3o m\u00EDnima:",
                ' ',
                react_1["default"].createElement("b", null,
                    utils_1.getCurrencyAmount(collectible === null || collectible === void 0 ? void 0 : collectible.currency, collectible === null || collectible === void 0 ? void 0 : collectible.price),
                    " ", (_b = collectible.currency) === null || _b === void 0 ? void 0 :
                    _b.symbol)),
            showTotalDonated && (react_1["default"].createElement(exports.StyledText, null,
                "Total arrecadado:",
                ' ',
                react_1["default"].createElement("b", null,
                    utils_1.getCurrencyAmount(collectible === null || collectible === void 0 ? void 0 : collectible.currency, collectible === null || collectible === void 0 ? void 0 : collectible.price.mul(collectible.owners)),
                    " ", (_c = collectible.currency) === null || _c === void 0 ? void 0 :
                    _c.symbol))))))));
}
exports["default"] = DonateCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
