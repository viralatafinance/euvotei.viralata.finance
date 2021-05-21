"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var react_2 = require("@geist-ui/react");
var styled_components_1 = require("styled-components");
var hooks_1 = require("../../hooks");
var utils_1 = require("../../utils");
var Column_1 = require("../Column");
var Row_1 = require("../Row");
var RowNoFlex = styled_components_1["default"](Row_1.AutoRow)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-wrap: nowrap;\n"], ["\n  flex-wrap: nowrap;\n"])));
var StyledLink = styled_components_1["default"](react_2.Link)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 15px;\n  font-weight: 600;\n  color: #333 !important;\n  margin-top: -10px;\n\n  &:hover {\n    color: #4bf2cd !important;\n  }\n"], ["\n  font-size: 15px;\n  font-weight: 600;\n  color: #333 !important;\n  margin-top: -10px;\n\n  &:hover {\n    color: #4bf2cd !important;\n  }\n"])));
function TransactionPopup(_a) {
    var hash = _a.hash, success = _a.success, summary = _a.summary;
    var chainId = hooks_1.useActiveWeb3React().chainId;
    return (react_1["default"].createElement(RowNoFlex, null,
        react_1["default"].createElement("div", { style: { paddingRight: 16 } }, success ? react_1["default"].createElement(react_feather_1.CheckCircle, { color: "#4bf2cd", size: 24 }) : react_1["default"].createElement(react_feather_1.AlertCircle, { color: "#4bf2cd", size: 24 })),
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "8px" },
            react_1["default"].createElement(react_2.Text, { style: { margin: 0, fontSize: 14 } }, summary !== null && summary !== void 0 ? summary : "Hash: " + hash.slice(0, 8) + "..." + hash.slice(58, 65)),
            chainId && (react_1["default"].createElement(StyledLink, { target: "_blank", href: utils_1.getBscScanLink(chainId, hash, 'transaction') }, "View on bscscan")))));
}
exports["default"] = TransactionPopup;
var templateObject_1, templateObject_2;
