"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("@geist-ui/react");
var react_2 = require("react");
var styled_components_1 = require("styled-components");
var Footer = function () {
    var isDesktop = react_1.useMediaQuery('md', { match: 'up' });
    var StyledPageFooter = styled_components_1["default"](react_1.Page.Footer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 15px 20px;\n    background-color: rgba(255, 255, 255, 0.97);\n    z-index: 998;\n    background: #000;\n    width: 100% !important;\n    position: relative !important;\n    margin-top: auto;\n  "], ["\n    padding: 15px 20px;\n    background-color: rgba(255, 255, 255, 0.97);\n    z-index: 998;\n    background: #000;\n    width: 100% !important;\n    position: relative !important;\n    margin-top: auto;\n  "])));
    var StyledContent = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    margin: 0px auto;\n    max-width: 1400px;\n    color: white;\n  "], ["\n    width: 100%;\n    margin: 0px auto;\n    max-width: 1400px;\n    color: white;\n  "])));
    var StyledContentTop = styled_components_1["default"](StyledContent)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    padding: 60px 20px 30px 20px !important;\n  "], ["\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    padding: 60px 20px 30px 20px !important;\n  "])));
    var StyledContentBottom = styled_components_1["default"](StyledContent)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 30px 20px !important;\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 0.9em;\n    font-weight: bold;\n\n    ", "\n  "], ["\n    padding: 30px 20px !important;\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 0.9em;\n    font-weight: bold;\n\n    ",
        "\n  "])), !isDesktop &&
        " width: 100%;\n      text-align: center;\n\n      & div {        \n        justify-content: center;\n      }\n    ");
    var StyledLink = styled_components_1["default"](react_1.Link)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    &:hover {\n      color: #00b0f2 !important;\n    }\n  "], ["\n    &:hover {\n      color: #00b0f2 !important;\n    }\n  "])));
    var StyledSocialMediaLinks = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ",
        "\n  "])), !isDesktop &&
        "\n    width: 100%;\n    text-align: center\n  ");
    return (react_2["default"].createElement(StyledPageFooter, null,
        react_2["default"].createElement(StyledContentTop, null,
            react_2["default"].createElement(react_1.Grid.Container, { gap: 2, justify: "center" },
                react_2["default"].createElement(react_1.Grid, { xs: 12, sm: 8, style: { marginBottom: 20 } },
                    react_2["default"].createElement("div", null,
                        react_2["default"].createElement(react_1.Text, { h3: true }, "Viralata Finance"),
                        react_2["default"].createElement(StyledLink, { href: "https://viralata.finance#" }, "Website"),
                        react_2["default"].createElement(react_1.Spacer, { y: 0.5 }),
                        react_2["default"].createElement(StyledLink, { href: "https://t.me/viralatafinance" }, "Telegram"),
                        react_2["default"].createElement(react_1.Spacer, { y: 0.5 }),
                        react_2["default"].createElement(StyledLink, { href: "https://twitter.com/viralatafinance" }, "Twitter"),
                        react_2["default"].createElement(react_1.Spacer, { y: 0.5 }),
                        react_2["default"].createElement(StyledLink, { href: "https://exchange.viralata.finance" }, "Buy"))),
                react_2["default"].createElement(react_1.Grid, { xs: 12, sm: 8, style: { marginBottom: 20 } },
                    react_2["default"].createElement("div", null,
                        react_2["default"].createElement(react_1.Text, { h3: true }, "Dogira Token"),
                        react_2["default"].createElement(StyledLink, { href: "https://dogira.net/" }, "Website"),
                        react_2["default"].createElement(react_1.Spacer, { y: 0.5 }),
                        react_2["default"].createElement(StyledLink, { href: "https://t.me/dogiratoken" }, "Telegram"),
                        react_2["default"].createElement(react_1.Spacer, { y: 0.5 }),
                        react_2["default"].createElement(StyledLink, { href: "https://twitter.com/DogiraOfficial" }, "Twitter"),
                        react_2["default"].createElement(react_1.Spacer, { y: 0.5 }),
                        react_2["default"].createElement(StyledLink, { href: "https://app.uniswap.org/#/swap?inputCurrency=0x4b86e0295e7d32433ffa6411b82b4f4e56a581e1" }, "Buy"))),
                react_2["default"].createElement(react_1.Grid, { xs: 24, sm: 8, style: { marginBottom: 20 } },
                    react_2["default"].createElement(StyledSocialMediaLinks, null,
                        react_2["default"].createElement("img", { src: isDesktop ? '/images/logo-black.png' : '/images/logo.png', alt: "Vira-lata Finance" }))))),
        react_2["default"].createElement(StyledContentBottom, null,
            react_2["default"].createElement(react_1.Grid.Container, { gap: 2, justify: isDesktop ? 'flex-start' : 'center' },
                react_2["default"].createElement(react_1.Grid, { xs: !isDesktop && 24 }, "\u00A9 Viralata Finance. All rights reserved.")))));
};
exports["default"] = Footer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
