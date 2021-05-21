"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Popup = exports.StyledClose = void 0;
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var web_1 = require("react-spring/web");
var styled_components_1 = require("styled-components");
var react_spring_1 = require("react-spring");
var hooks_1 = require("../../state/application/hooks");
var ListUpdatePopup_1 = require("./ListUpdatePopup");
var TransactionPopup_1 = require("./TransactionPopup");
exports.StyledClose = styled_components_1["default"](react_feather_1.X)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"])));
exports.Popup = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: #fff;\n  position: relative;\n  border-radius: 5px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px !important;\n\n  ", " {\n    min-width: 450px;\n  }\n"], ["\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: #fff;\n  position: relative;\n  border-radius: 5px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px !important;\n\n  ", " {\n    min-width: 450px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Fader = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: #fff;\n"], ["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: #fff;\n"])));
var AnimatedFader = react_spring_1.animated(Fader);
function PopupItem(_a) {
    var removeAfterMs = _a.removeAfterMs, content = _a.content, popKey = _a.popKey;
    var removePopup = hooks_1.useRemovePopup();
    var removeThisPopup = react_1.useCallback(function () { return removePopup(popKey); }, [popKey, removePopup]);
    react_1.useEffect(function () {
        if (removeAfterMs === null)
            return undefined;
        var timeout = setTimeout(function () {
            removeThisPopup();
        }, removeAfterMs);
        return function () {
            clearTimeout(timeout);
        };
    }, [removeAfterMs, removeThisPopup]);
    var popupContent;
    if ('txn' in content) {
        var _b = content.txn, hash = _b.hash, success = _b.success, summary = _b.summary;
        popupContent = react_1["default"].createElement(TransactionPopup_1["default"], { hash: hash, success: success, summary: summary });
    }
    else if ('listUpdate' in content) {
        var _c = content.listUpdate, listUrl = _c.listUrl, oldList = _c.oldList, newList = _c.newList, auto = _c.auto;
        popupContent = react_1["default"].createElement(ListUpdatePopup_1["default"], { popKey: popKey, listUrl: listUrl, oldList: oldList, newList: newList, auto: auto });
    }
    var faderStyle = web_1.useSpring({
        from: { width: '100%' },
        to: { width: '0%' },
        config: { duration: removeAfterMs !== null && removeAfterMs !== void 0 ? removeAfterMs : undefined }
    });
    return (react_1["default"].createElement(exports.Popup, null,
        react_1["default"].createElement(exports.StyledClose, { color: "#333", onClick: removeThisPopup }),
        popupContent,
        removeAfterMs !== null ? react_1["default"].createElement(AnimatedFader, { style: faderStyle }) : null));
}
exports["default"] = PopupItem;
var templateObject_1, templateObject_2, templateObject_3;
