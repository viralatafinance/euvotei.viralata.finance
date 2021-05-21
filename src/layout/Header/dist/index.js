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
var react_1 = require("@geist-ui/react");
var react_icons_1 = require("@geist-ui/react-icons");
var useTheme_1 = require("hooks/useTheme");
var ConnectModal_1 = require("components/WalletModal/ConnectModal");
var AccountModal_1 = require("components/WalletModal/AccountModal");
var core_1 = require("@web3-react/core");
var connectors_1 = require("connectors");
var react_2 = require("react");
var styled_components_1 = require("styled-components");
var StyledPageHeader = styled_components_1["default"](react_1.Page.Header)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 40px;\n  z-index: 999;\n"], ["\n  padding: 40px;\n  z-index: 999;\n"])));
var FlexDiv = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var Logo = styled_components_1["default"].a(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  color: #000;\n"], ["\n  display: flex;\n  color: #000;\n"])));
var LogoImage = styled_components_1["default"].img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  max-height: 100px !important;\n"], ["\n  max-height: 100px !important;\n"])));
var StyledConnect = styled_components_1["default"](function (_a) {
    var isDark = _a.isDark, rest = __rest(_a, ["isDark"]);
    return react_2["default"].createElement(react_1.Tag, __assign({}, rest));
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border: 2px solid transparent !important;\n  background: transparent !important;\n  color: ", "  !important;\n  font-size: 16px !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: 2px solid ", ";\n  padding: 10px 25px !important;\n  height: auto !important;\n  border-radius: 6px;\n  display: inline-block;\n  font-weight: 700;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  cursor: pointer;\n  line-height: inherit !important;\n\n  :hover {\n    transform: scale(1.05);\n  }\n"], ["\n  border: 2px solid transparent !important;\n  background: transparent !important;\n  color: ", "  !important;\n  font-size: 16px !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: 2px solid ", ";\n  padding: 10px 25px !important;\n  height: auto !important;\n  border-radius: 6px;\n  display: inline-block;\n  font-weight: 700;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  cursor: pointer;\n  line-height: inherit !important;\n\n  :hover {\n    transform: scale(1.05);\n  }\n"])), function (props) { return props.isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)'; }, function (props) { return props.isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254)'; });
var Header = function () {
    var connectModal = react_1.useModal(false);
    var accountModal = react_1.useModal(false);
    var _a = useTheme_1["default"](), isDark = _a.isDark, toggleTheme = _a.toggleTheme, theme = _a.theme;
    var isDesktop = react_1.useMediaQuery('md', { match: 'up' });
    var _b = core_1.useWeb3React(), account = _b.account, activate = _b.activate, deactivate = _b.deactivate;
    var handleLogin = function (connectorId) {
        var connector = connectors_1.connectorsByName[connectorId];
        if (connector) {
            activate(connector);
        }
    };
    var switchLightMode = function () {
        toggleTheme();
    };
    return (react_2["default"].createElement(StyledPageHeader, null,
        react_2["default"].createElement(ConnectModal_1["default"], { isOpen: connectModal.visible, onDismiss: function () { return connectModal.setVisible(false); }, login: handleLogin }),
        react_2["default"].createElement(AccountModal_1["default"], { isOpen: accountModal.visible, onDismiss: function () { return accountModal.setVisible(false); }, account: account || '', logout: deactivate }),
        react_2["default"].createElement(react_1.Grid.Container, { justify: "space-between" },
            react_2["default"].createElement(Logo, { href: "https://dogira.viralata.finance" },
                react_2["default"].createElement(LogoImage, { src: isDesktop ? '/images/logo-black.png' : '/images/logo.png', alt: "Vira-lata Finance" })),
            react_2["default"].createElement(react_1.Grid, { xs: true, alignItems: "center", justify: "flex-end" }),
            react_2["default"].createElement("div", { role: "button", "aria-hidden": "true", style: { cursor: 'pointer', marginTop: 35, marginRight: 20 }, onClick: switchLightMode, onKeyDown: switchLightMode },
                react_2["default"].createElement(react_icons_1.Sun, { color: !isDark ? 'rgb(69,7,254)' : 'rgb(0,255,252,0.2)' }),
                react_2["default"].createElement("span", { style: { marginRight: 5 } }, " "),
                react_2["default"].createElement(react_icons_1.Moon, { color: isDark ? 'rgb(0,255,252)' : 'rgb(69,7,254,0.2)' })),
            react_2["default"].createElement(FlexDiv, null,
                react_2["default"].createElement(StyledConnect, { isDark: isDark, onClick: function () {
                        if (account) {
                            accountModal.setVisible(true);
                        }
                        else {
                            connectModal.setVisible(true);
                        }
                    } }, account ? account.substr(0, 4) + "..." + account.substr(-4) : "Connect Wallet")))));
};
exports["default"] = Header;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
