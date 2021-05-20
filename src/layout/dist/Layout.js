"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("@geist-ui/react");
var react_2 = require("react");
var styled_components_1 = require("styled-components");
var Header_1 = require("./Header");
var StyledPage = styled_components_1["default"](react_1.Page)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0px !important;\n  min-height: 100vh;\n\n  & > main {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n  }\n\n  & main {\n    padding: 0px !important;\n  }\n  & footer {\n    width: 100% !important;\n  }\n"], ["\n  padding: 0px !important;\n  min-height: 100vh;\n\n  & > main {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n  }\n\n  & main {\n    padding: 0px !important;\n  }\n  & footer {\n    width: 100% !important;\n  }\n"])));
var StyledContent = styled_components_1["default"](react_1.Page.Content)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 0px !important;\n  width: 100%;\n"], ["\n  padding: 0px !important;\n  width: 100%;\n"])));
var Layout = function (_a) {
    var children = _a.children;
    return (react_2["default"].createElement(StyledPage, { size: "100%" },
        react_2["default"].createElement(Header_1["default"], null),
        react_2["default"].createElement(StyledContent, null, children)));
};
exports["default"] = Layout;
var templateObject_1, templateObject_2;
