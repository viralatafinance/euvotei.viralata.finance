"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.BodyWrapper = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
exports.BodyWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""
    /**
     * The styled container element that wraps the content of most pages and the tabs.
     */
])));
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
function AppBody(_a) {
    var children = _a.children;
    return react_1["default"].createElement(exports.BodyWrapper, null, children);
}
exports["default"] = AppBody;
var templateObject_1;
