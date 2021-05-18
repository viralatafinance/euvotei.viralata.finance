"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.BodyWrapper = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var react_2 = require("@geist-ui/react");
exports.BodyWrapper = styled_components_1["default"](react_2.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // position: relative;\n  width: 100%;\n  // z-index: 5;\n  // padding: 0px !important;\n  // min-width: 360px;\n\n  // display: flex;\n  // flex-direction: column;\n\n  background: transparent !important;\n  box-shadow: none !important;\n  border-radius: 5px !important;\n  border: none !important;\n\n  // margin-top: 250px !important;\n\n  // & > div.content {\n  //   padding: 20px 20px !important;\n  //   display: flex;\n  //   flex-direction: column;\n  // }\n"], ["\n  // position: relative;\n  width: 100%;\n  // z-index: 5;\n  // padding: 0px !important;\n  // min-width: 360px;\n\n  // display: flex;\n  // flex-direction: column;\n\n  background: transparent !important;\n  box-shadow: none !important;\n  border-radius: 5px !important;\n  border: none !important;\n\n  // margin-top: 250px !important;\n\n  // & > div.content {\n  //   padding: 20px 20px !important;\n  //   display: flex;\n  //   flex-direction: column;\n  // }\n"
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
