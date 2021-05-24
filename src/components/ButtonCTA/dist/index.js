"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@geist-ui/react");
var styled_components_1 = require("styled-components");
var ButtonCTA = styled_components_1["default"](function (_a) {
    var isDark = _a.isDark, rest = __rest(_a, ["isDark"]);
    return react_1["default"].createElement(react_2.Button, __assign({}, rest));
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 3.5rem !important;\n  border-radius: 0px !important;\n  font-weight: bolder !important;\n  font-size: 1em !important;\n  border: 0px !important;\n  box-shadow: none !important;\n  margin: 10px 0px 0px !important;\n  width: 100% !important;\n  text-transform: none !important;\n\n  background-color: ", "  !important;\n  color: ", "  !important;\n\n  &:hover {    \n    background-color: ", "  !important;    \n  }\n  \n  &:disabled {\n    background-color:#ddd !important;\n    color: #333 !important;\n  }\n"], ["\n  height: 3.5rem !important;\n  border-radius: 0px !important;\n  font-weight: bolder !important;\n  font-size: 1em !important;\n  border: 0px !important;\n  box-shadow: none !important;\n  margin: 10px 0px 0px !important;\n  width: 100% !important;\n  text-transform: none !important;\n\n  background-color: ", "  !important;\n  color: ", "  !important;\n\n  &:hover {    \n    background-color: ", "  !important;    \n  }\n  \n  &:disabled {\n    background-color:#ddd !important;\n    color: #333 !important;\n  }\n"])), function (props) { return props.isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)'; }, function (props) { return props.isDark ? '#000' : '#fff'; }, function (props) { return props.isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)'; });
exports["default"] = ButtonCTA;
var templateObject_1;
