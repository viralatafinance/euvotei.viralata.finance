"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("@geist-ui/react");
var ConnectModal_1 = require("components/WalletModal/ConnectModal");
var AccountModal_1 = require("components/WalletModal/AccountModal");
var core_1 = require("@web3-react/core");
var connectors_1 = require("connectors");
var react_2 = require("react");
var styled_components_1 = require("styled-components");
var StyledPageHeader = styled_components_1["default"](react_1.Page.Header)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 40px;\n  position: fixed;\n  z-index: 999;\n"], ["\n  padding: 40px;\n  position: fixed;\n  z-index: 999;\n"])));
var FlexDiv = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var Logo = styled_components_1["default"].a(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  color: #000;\n"], ["\n  display: flex;\n  color: #000;\n"])));
var LogoImage = styled_components_1["default"].img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  max-height: 220px !important;\n  \n"], ["\n  max-height: 220px !important;\n  \n"])));
var StyledConnect = styled_components_1["default"](react_1.Tag)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border: 2px solid transparent !important;\n  background: transparent !important;\n  color: #4bf2cd !important;\n  font-size: 16px !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: 2px solid #4bf2cd;\n  padding: 10px 25px !important;\n  height: auto !important;\n  border-radius: 6px;\n  display: inline-block;\n  font-weight: 700;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  cursor: pointer;\n  line-height: inherit !important;\n\n  :hover {\n    transform: scale(1.05);\n  }\n"], ["\n  border: 2px solid transparent !important;\n  background: transparent !important;\n  color: #4bf2cd !important;\n  font-size: 16px !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: 2px solid #4bf2cd;\n  padding: 10px 25px !important;\n  height: auto !important;\n  border-radius: 6px;\n  display: inline-block;\n  font-weight: 700;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  cursor: pointer;\n  line-height: inherit !important;\n\n  :hover {\n    transform: scale(1.05);\n  }\n"])));
var Header = function () {
    var connectModal = react_1.useModal(false);
    var accountModal = react_1.useModal(false);
    var isDesktop = react_1.useMediaQuery('md', { match: 'up' });
    var _a = core_1.useWeb3React(), account = _a.account, activate = _a.activate, deactivate = _a.deactivate;
    var handleLogin = function (connectorId) {
        var connector = connectors_1.connectorsByName[connectorId];
        if (connector) {
            activate(connector);
        }
    };
    return (react_2["default"].createElement(StyledPageHeader, null,
        react_2["default"].createElement(ConnectModal_1["default"], { isOpen: connectModal.visible, onDismiss: function () { return connectModal.setVisible(false); }, login: handleLogin }),
        react_2["default"].createElement(AccountModal_1["default"], { isOpen: accountModal.visible, onDismiss: function () { return accountModal.setVisible(false); }, account: account || '', logout: deactivate }),
        react_2["default"].createElement(react_1.Grid.Container, { justify: "center" },
            react_2["default"].createElement(Logo, { href: "https://viralata.finance" },
                react_2["default"].createElement(LogoImage, { src: isDesktop ? '/images/logo-black.png' : '/images/logo.png', alt: "Vira-lata Finance" })))));
};
exports["default"] = Header;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
