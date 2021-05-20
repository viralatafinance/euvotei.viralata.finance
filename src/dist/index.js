"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_2 = require("@geist-ui/react");
var Global_1 = require("./style/Global");
var App_1 = require("./pages/App");
var updater_1 = require("./state/application/updater");
var updater_2 = require("./state/lists/updater");
var updater_3 = require("./state/multicall/updater");
var updater_4 = require("./state/transactions/updater");
var Providers_1 = require("./Providers");
require("inter-ui");
require("./i18n");
if ('ethereum' in window) {
    window.ethereum.autoRefreshOnNetworkChange = false;
}
window.addEventListener('error', function () {
    localStorage === null || localStorage === void 0 ? void 0 : localStorage.removeItem('redux_localstorage_simple_lists');
});
var myTheme1 = react_2.Themes.createFromLight({
    type: 'viralata',
    font: {
        sans: '"DM Sans", sans-serif',
        mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
    }
});
react_dom_1["default"].render(react_1["default"].createElement(react_1.StrictMode, null,
    react_1["default"].createElement(Providers_1["default"], null,
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(updater_2["default"], null),
            react_1["default"].createElement(updater_1["default"], null),
            react_1["default"].createElement(updater_4["default"], null),
            react_1["default"].createElement(updater_3["default"], null)),
        react_1["default"].createElement(Global_1["default"], null),
        react_1["default"].createElement(react_2.GeistProvider, { themes: [myTheme1], themeType: "viralata" },
            react_1["default"].createElement(react_2.CssBaseline, null),
            react_1["default"].createElement(App_1["default"], null)))), document.getElementById('root'));
