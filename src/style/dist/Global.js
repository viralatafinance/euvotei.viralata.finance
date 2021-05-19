"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    // background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n\n    & .tooltip-content {\n      z-index: 999999 !important;\n    }\n  }\n\n  html,\n  button,\n  input,\n  select,\n  textarea {\n    font-family: \"Source Sans Pro\", Helvetica, sans-serif !important;\n  }\n\n  .backdrop {\n    background-color: rgba(0,0,0,0.8);\n  }\n  .currencies-modal {\n    padding: 0px !important;\n  }\n\n  .viralata-modal {\n    color: #fff !important;\n    background-color: #000 !important;\n    border: 1px solid #4bf2cd\n  }\n\n.slides-mobile {\n  overflow: hidden;\n  margin-top: -5vh;\n}\n \n.slides-mobile > button:first-child {\n  left: 0px !important;\n} \n\n.slides-mobile > button:last-child {\n  right: 0px !important;;\n}\n\n\n\n.slides {\n\n  flex: 1;\n  align-self: center;\n\n  display: grid;\n  > .slide {\n    grid-area: 1 / -1;\n  }\n\n  > button {\n    appearance: none;\n    background: transparent;\n    border: none;\n    color: white;\n    position: absolute;\n    font-size: 5rem;\n    width: 5rem;\n    height: 5rem;\n    top: 47%;\n    transition: opacity 0.3s;\n    opacity: 0.7;\n    z-index: 5;\n\n    &:hover {\n      opacity: 1;\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    &:first-child {\n      left: 5px;\n    }\n    &:last-child {\n      right:  5px;\n    }\n  }\n}\n\n.slide {\n  //transform-style: preserve-3d;\n  // border: solid 1px red;\n\n  // &[data-active] {\n  //   .slideContent > * {\n  //     transform: none;\n  //     opacity: 1;\n  //   }\n  // }\n}\n\n.slideContent {\n  width:  40vh;\n  height: 45vh;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  transition: transform 0.5s ease-in-out;\n  opacity: 0.05;\n  padding: 20px;\n  border-radius: 10px;\n\n  display: grid;\n  align-content: flex-end;\n\n  transform-style: preserve-3d;\n  transform: perspective(1000px) translateX(calc(100% * var(--offset)))\n    rotateY(calc(-45deg * var(--dir)));\n}\n\n.slideContentInner {\n  transform-style: preserve-3d;\n  transform: translateZ(2rem);\n  transition: opacity 0.3s linear;\n  text-shadow: 0 0.1rem 1rem #000;\n  opacity: 0;\n  color: #fff;\n  text-align: right;\n  padding: 10px;\n\n  .slideSubtitle,\n  .slideTitle {\n    font-size: 2rem;\n    font-weight: normal;\n    letter-spacing: 0.2ch;\n    text-transform: uppercase;\n    margin: 0;\n  }\n\n  \n  .slideSubtitle {\n    font-size: 1rem;\n\n    \n  }\n\n  .slideDescription {\n    margin: 0;\n    font-size: 0.8rem;\n    letter-spacing: 0.2ch;\n  }\n}\n\n.slideBackground {\n  position: fixed;\n  top: 0;\n  left: -10%;\n  right: -10%;\n  bottom: 0;\n  background-size: cover;\n  background-position: center center;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.3s linear, transform 0.3s ease-in-out;\n  pointer-events: none;\n\n  transform: translateX(calc(10% * var(--dir)));\n}\n\n.slide[data-active] {\n  z-index: 2;\n  pointer-events: auto;\n\n  .slideBackground {\n    opacity: 0.2;\n    transform: none;\n  }\n\n  .slideContentInner {\n    opacity: 1;\n  }\n\n  .slideContent {\n    --x: calc(var(--px) - 0.5);\n    --y: calc(var(--py) - 0.5);\n    opacity: 1;\n\n    transform: perspective(1000px);\n\n    &:hover {\n      transition: none;\n      transform: perspective(1000px) rotateY(calc(var(--x) * 45deg))\n        rotateX(calc(var(--y) * -45deg));\n    }\n  }\n}\n\n\n"], ["\n  body {\n    // background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n\n    & .tooltip-content {\n      z-index: 999999 !important;\n    }\n  }\n\n  html,\n  button,\n  input,\n  select,\n  textarea {\n    font-family: \"Source Sans Pro\", Helvetica, sans-serif !important;\n  }\n\n  .backdrop {\n    background-color: rgba(0,0,0,0.8);\n  }\n  .currencies-modal {\n    padding: 0px !important;\n  }\n\n  .viralata-modal {\n    color: #fff !important;\n    background-color: #000 !important;\n    border: 1px solid #4bf2cd\n  }\n\n.slides-mobile {\n  overflow: hidden;\n  margin-top: -5vh;\n}\n \n.slides-mobile > button:first-child {\n  left: 0px !important;\n} \n\n.slides-mobile > button:last-child {\n  right: 0px !important;;\n}\n\n\n\n.slides {\n\n  flex: 1;\n  align-self: center;\n\n  display: grid;\n  > .slide {\n    grid-area: 1 / -1;\n  }\n\n  > button {\n    appearance: none;\n    background: transparent;\n    border: none;\n    color: white;\n    position: absolute;\n    font-size: 5rem;\n    width: 5rem;\n    height: 5rem;\n    top: 47%;\n    transition: opacity 0.3s;\n    opacity: 0.7;\n    z-index: 5;\n\n    &:hover {\n      opacity: 1;\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    &:first-child {\n      left: 5px;\n    }\n    &:last-child {\n      right:  5px;\n    }\n  }\n}\n\n.slide {\n  //transform-style: preserve-3d;\n  // border: solid 1px red;\n\n  // &[data-active] {\n  //   .slideContent > * {\n  //     transform: none;\n  //     opacity: 1;\n  //   }\n  // }\n}\n\n.slideContent {\n  width:  40vh;\n  height: 45vh;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  transition: transform 0.5s ease-in-out;\n  opacity: 0.05;\n  padding: 20px;\n  border-radius: 10px;\n\n  display: grid;\n  align-content: flex-end;\n\n  transform-style: preserve-3d;\n  transform: perspective(1000px) translateX(calc(100% * var(--offset)))\n    rotateY(calc(-45deg * var(--dir)));\n}\n\n.slideContentInner {\n  transform-style: preserve-3d;\n  transform: translateZ(2rem);\n  transition: opacity 0.3s linear;\n  text-shadow: 0 0.1rem 1rem #000;\n  opacity: 0;\n  color: #fff;\n  text-align: right;\n  padding: 10px;\n\n  .slideSubtitle,\n  .slideTitle {\n    font-size: 2rem;\n    font-weight: normal;\n    letter-spacing: 0.2ch;\n    text-transform: uppercase;\n    margin: 0;\n  }\n\n  \n  .slideSubtitle {\n    font-size: 1rem;\n\n    \n  }\n\n  .slideDescription {\n    margin: 0;\n    font-size: 0.8rem;\n    letter-spacing: 0.2ch;\n  }\n}\n\n.slideBackground {\n  position: fixed;\n  top: 0;\n  left: -10%;\n  right: -10%;\n  bottom: 0;\n  background-size: cover;\n  background-position: center center;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.3s linear, transform 0.3s ease-in-out;\n  pointer-events: none;\n\n  transform: translateX(calc(10% * var(--dir)));\n}\n\n.slide[data-active] {\n  z-index: 2;\n  pointer-events: auto;\n\n  .slideBackground {\n    opacity: 0.2;\n    transform: none;\n  }\n\n  .slideContentInner {\n    opacity: 1;\n  }\n\n  .slideContent {\n    --x: calc(var(--px) - 0.5);\n    --y: calc(var(--py) - 0.5);\n    opacity: 1;\n\n    transform: perspective(1000px);\n\n    &:hover {\n      transition: none;\n      transform: perspective(1000px) rotateY(calc(var(--x) * 45deg))\n        rotateX(calc(var(--y) * -45deg));\n    }\n  }\n}\n\n\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
});
exports["default"] = GlobalStyle;
var templateObject_1;
