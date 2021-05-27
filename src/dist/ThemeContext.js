"use strict";
exports.__esModule = true;
exports.ThemeContextProvider = exports.ThemeContext = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("@pancakeswap-libs/uikit");
var CACHE_KEY = 'IS_DARK';
var ThemeContext = react_1["default"].createContext({ isDark: true, toggleTheme: function () { return null; } });
exports.ThemeContext = ThemeContext;
var ThemeContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(function () {
        var isDarkUserSetting = localStorage.getItem(CACHE_KEY);
        return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : true;
    }), isDark = _b[0], setIsDark = _b[1];
    var toggleTheme = function () {
        setIsDark(function (prevState) {
            localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState));
            return !prevState;
        });
    };
    return (react_1["default"].createElement(ThemeContext.Provider, { value: { isDark: isDark, toggleTheme: toggleTheme } },
        react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: isDark ? uikit_1.dark : uikit_1.light }, children)));
};
exports.ThemeContextProvider = ThemeContextProvider;
