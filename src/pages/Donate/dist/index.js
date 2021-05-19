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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.StyledTilt = exports.StyledText = exports.StyledTitle = exports.StyledWrapper = exports.StyledImage = void 0;
/* eslint-disable */
var react_1 = require("react");
var react_2 = require("@geist-ui/react");
var react_tilt_1 = require("react-tilt");
var styled_components_1 = require("styled-components");
var styleds_1 = require("../../components/swap/styleds");
var hooks_1 = require("../../hooks");
var useI18n_1 = require("../../hooks/useI18n");
var Collectibles_1 = require("../../data/Collectibles");
exports.StyledImage = styled_components_1["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.StyledWrapper = styled_components_1["default"](styleds_1.Wrapper)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 30px 40px;\n  margin-left: 100px;\n  width: 60%;\n  color: #fffd;\n  border: 1px solid #4bf2cd;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px !important;\n"], ["\n  padding: 30px 40px;\n  margin-left: 100px;\n  width: 60%;\n  color: #fffd;\n  border: 1px solid #4bf2cd;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px !important;\n"])));
exports.StyledTitle = styled_components_1["default"](react_2.Text)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 75px;\n  line-height: 95px;\n  font-weight: 900;\n  text-transform: uppercase;\n  font-family: Source Sans Pro, Helvetica, sans-serif;\n  color: #fff;\n  letter-spacing: -2px;\n"], ["\n  font-size: 75px;\n  line-height: 95px;\n  font-weight: 900;\n  text-transform: uppercase;\n  font-family: Source Sans Pro, Helvetica, sans-serif;\n  color: #fff;\n  letter-spacing: -2px;\n"])));
exports.StyledText = styled_components_1["default"](react_2.Text)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0px;\n  font-weight: 300;\n  color: white !important;\n  font-size: 32px;\n  text-align: center;\n  margin-top: 10px;\n"], ["\n  margin: 0px;\n  font-weight: 300;\n  color: white !important;\n  font-size: 32px;\n  text-align: center;\n  margin-top: 10px;\n"])));
exports.StyledTilt = styled_components_1["default"](react_tilt_1["default"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n"], ["\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n"])));
var slides = [
    {
        title: 'Viralata + Dogira',
        subtitle: 'Exclusive NFT Collection',
        description: '1/50',
        image: './images/placeholder.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'Exclusive NFT Collection',
        description: '1/50',
        image: './images/placeholder.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'Exclusive NFT Collection',
        description: '1/50',
        image: './images/placeholder.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'Exclusive NFT Collection',
        description: '1/50',
        image: './images/placeholder.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'Exclusive NFT Collection',
        description: '1/50',
        image: './images/placeholder.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'Exclusive NFT Collection',
        description: '1/50',
        image: './images/placeholder.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'Exclusive NFT Collection',
        description: '1/50',
        image: './images/placeholder.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'Exclusive NFT Collection',
        description: '1/50',
        image: './images/placeholder.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'Exclusive NFT Collection',
        description: '1/50',
        image: './images/placeholder.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'Exclusive NFT Collection',
        description: '1/50',
        image: './images/placeholder.jpg'
    },
];
function useTilt(active) {
    var ref = react_1["default"].useRef(null);
    react_1["default"].useEffect(function () {
        if (!ref.current || !active) {
            return;
        }
        var state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };
        var el = ref.current;
        var handleMouseMove = function (e) {
            if (el) {
                if (!state.rect) {
                    state.rect = el.getBoundingClientRect();
                }
                state.mouseX = e.clientX;
                state.mouseY = e.clientY;
                var px = state ? (state.mouseX - state.rect.left) / state.rect.width : 0;
                var py = state ? (state.mouseY - state.rect.top) / state.rect.height : 0;
                el.style.setProperty('--px', px);
                el.style.setProperty('--py', py);
            }
        };
        if (el) {
            el.addEventListener('mousemove', handleMouseMove);
        }
        return function () {
            if (el) {
                el.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [active]);
    return ref;
}
var initialState = {
    slideIndex: 0
};
var slidesReducer = function (state, event) {
    if (event.type === 'NEXT') {
        return __assign(__assign({}, state), { slideIndex: (state.slideIndex + 1) % slides.length });
    }
    if (event.type === 'PREV') {
        return __assign(__assign({}, state), { slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1 });
    }
};
function Slide(_a) {
    var slide = _a.slide, offset = _a.offset;
    var active = offset === 0 ? true : null;
    var ref = useTilt(active);
    var myStyle = {
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
        filter: !active ? 'hue-rotate(90deg)' : 'none'
    };
    return (react_1["default"].createElement("div", { ref: ref, className: "slide", "data-active": active, style: myStyle },
        react_1["default"].createElement("div", { className: "slideBackground" }),
        react_1["default"].createElement("div", { className: "slideContent", style: {
                backgroundImage: "url('" + slide.image + "')"
            } },
            react_1["default"].createElement("div", { className: "slideContentInner" },
                react_1["default"].createElement("h2", { className: "slideTitle" }, slide.title),
                react_1["default"].createElement("h3", { className: "slideSubtitle" }, slide.subtitle),
                react_1["default"].createElement("p", { className: "slideDescription" }, slide.description)))));
}
var Donate = function () {
    var TranslateString = useI18n_1["default"]();
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var account = hooks_1.useActiveWeb3React().account;
    var collectible = Collectibles_1.useCollectibleEditions();
    var _a = react_1.useState(false), confirmModalVisible = _a[0], setConfirmModalVisible = _a[1];
    var _b = react_1["default"].useReducer(slidesReducer, initialState), state = _b[0], dispatch = _b[1];
    return (react_1["default"].createElement("div", { style: { zIndex: 4, flex: 1, display: 'flex' } },
        react_1["default"].createElement("div", { className: "slides" },
            react_1["default"].createElement("button", { onClick: function () { return dispatch({ type: 'PREV' }); } }, "\u2039"),
            __spreadArrays(slides, slides, slides).map(function (slide, i) {
                var offset = slides.length + (state.slideIndex - i);
                return react_1["default"].createElement(Slide, { slide: slide, offset: offset, key: i });
            }),
            react_1["default"].createElement("button", { onClick: function () { return dispatch({ type: 'NEXT' }); } }, "\u203A")))
    // <>
    //   <AppBody>
    //     <DonateConfirmModal
    //       isOpen={confirmModalVisible}
    //       collectible={collectible}
    //       onConfirm={() => {
    //         setConfirmModalVisible(false)
    //       }}
    //     />
    //     <DonateCard collectible={collectible} />
    //     <ButtonCTA
    //       onClick={() => {
    //         setConfirmModalVisible(true)
    //       }}
    //     >
    //       Doar e receber meu NFT
    //     </ButtonCTA>
    //   </AppBody>
    // </>
    );
};
exports["default"] = Donate;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
