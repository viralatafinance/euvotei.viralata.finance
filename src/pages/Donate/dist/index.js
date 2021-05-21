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
var useTheme_1 = require("../../hooks/useTheme");
exports.StyledImage = styled_components_1["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.StyledWrapper = styled_components_1["default"](styleds_1.Wrapper)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 30px 40px;\n  margin-left: 100px;\n  width: 60%;\n  color: #fffd;\n  border: 1px solid #4bf2cd;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px !important;\n"], ["\n  padding: 30px 40px;\n  margin-left: 100px;\n  width: 60%;\n  color: #fffd;\n  border: 1px solid #4bf2cd;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px !important;\n"])));
exports.StyledTitle = styled_components_1["default"](react_2.Text)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 75px;\n  line-height: 95px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #fff;\n  letter-spacing: -2px;\n"], ["\n  font-size: 75px;\n  line-height: 95px;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #fff;\n  letter-spacing: -2px;\n"])));
exports.StyledText = styled_components_1["default"](react_2.Text)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0px;\n  font-weight: 300;\n  color: white !important;\n  font-size: 32px;\n  text-align: center;\n  margin-top: 10px;\n"], ["\n  margin: 0px;\n  font-weight: 300;\n  color: white !important;\n  font-size: 32px;\n  text-align: center;\n  margin-top: 10px;\n"])));
exports.StyledTilt = styled_components_1["default"](react_tilt_1["default"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n"], ["\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n"])));
var slides = [
    {
        title: 'Viralata + Dogira',
        subtitle: 'NFT Collection',
        description: 'soon',
        image: './images/NFT-PREV1.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'NFT Collection',
        description: 'soon',
        image: './images/NFT-PREV2.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'NFT Collection',
        description: 'soon',
        image: './images/NFT-PREV3.jpg'
    },
    {
        title: 'Viralata + Dogira',
        subtitle: 'NFT Collection',
        description: 'soon',
        image: './images/NFT-PREV4.jpg'
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
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1
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
var StyledContent = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  z-index: 999;\n  color: #fff;\n  text-align: center;\n  max-width: 1200px;\n  padding: 20px;\n  margin-top: 50px;\n  margin-bottom: 100px;\n"], ["\n  z-index: 999;\n  color: #fff;\n  text-align: center;\n  max-width: 1200px;\n  padding: 20px;\n  margin-top: 50px;\n  margin-bottom: 100px;\n"])));
var testimonials = [
    {
        image: '5.jpg',
        name: 'CAMPO BOM PRA CACHORRO',
        instagram: '@campobompracachorro',
        instagramLink: 'https://www.instagram.com/campobompracachorro/',
        date: '05/04/2021',
        total: 13662.0,
        thanks: 'https://www.instagram.com/p/CNVSiIvlxgM/?igshid=1fzazq17hn7x9',
        howto: 'https://www.instagram.com/stories/highlights/17899065055761227/',
        testimonial: (react_1["default"].createElement("p", { style: { color: '#999' } },
            "Com a a\u00E7\u00E3o realizada pela",
            ' ',
            react_1["default"].createElement("a", { className: "theme-color", href: "https://viralata.finance" }, "viralata.finance"),
            ' ',
            "conseguimos arrecadar um valor que ser\u00E1 destinado \u00E0 compra de ra\u00E7\u00E3o e a vacina\u00E7\u00E3o anual de nossos animais. Esse doa\u00E7\u00E3o ter\u00E1 um impacto imenso em nosso ano, pois nos auxiliar\u00E1 nesse momento em que n\u00E3o podemos realizar nossos eventos de arrecada\u00E7\u00E3o e que nosso brech\u00F3 opera on-line/presencial."))
    },
    {
        image: '4.jpg',
        name: 'KAPA MOGI GUAÇU',
        instagram: '@kapakamaelprotetores',
        instagramLink: 'https://www.instagram.com/kapakamaelprotetores/',
        date: '06/04/2021',
        total: 9183.12,
        thanks: 'https://www.instagram.com/p/CNYnvvIDMU9/',
        howto: 'https://abacashi.com/p/ajude-o-kapa-kamael'
    },
    {
        image: '3.jpg',
        name: 'ELOY RABELO NETO',
        instagram: '@eloyrabeloneto',
        instagramLink: 'https://www.instagram.com/eloyrabeloneto/',
        date: '06/04/2021',
        total: 3651.92,
        thanks: 'https://www.instagram.com/p/CNOfeCljPP3/',
        howto: 'https://www.instagram.com/p/CNX9lN5jpE5/'
    },
    {
        image: '2.jpg',
        name: 'ONG SÃO LÁZARO',
        instagram: '@abrigosaolazaro',
        instagramLink: 'https://www.instagram.com/abrigosaolazaro/',
        date: '09/04/2021',
        total: 1547.0,
        thanks: 'https://twitter.com/viralatafinance/status/1382843993998905346',
        howto: 'https://www.instagram.com/stories/highlights/18006842821046515/'
    },
    {
        image: '1.jpg',
        name: 'CAARP - ABRIGO DE ANIMAIS',
        instagram: '@caarp_',
        instagramLink: 'https://instagram.com/caarp_',
        date: '11/04/2021',
        total: 1299.61,
        howto: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDMwOTIyMDYwMTY3MjUx?igshid=6lyshei28gfg',
        thanks: ''
    },
    {
        image: '6.jpg',
        name: 'INSTITUTO GUARDA ANIMAL',
        instagram: '@institutoguardaanimal',
        instagramLink: 'https://www.instagram.com/institutoguardaanimal/',
        date: '04/04/2021',
        total: 33995.86,
        thanks: 'https://www.instagram.com/p/CNN6aLsBb4l/',
        howto: 'https://www.instagram.com/stories/highlights/18010328458048980/'
    },
    {
        image: '7.jpg',
        name: 'APIPA - ASSOCIAÇÃO PIAUIENSE DE PROTEÇÃO E AMOR AOS ANIMAIS',
        instagram: '@apipaoficial',
        instagramLink: 'https://www.instagram.com/apipaoficial/',
        date: '02/04/2021',
        total: 2470.0,
        thanks: 'https://www.instagram.com/p/CNLjc0rnGQR/',
        howto: 'https://www.apipapiaui.org/doe'
    },
    {
        image: '8.jpg',
        name: 'MARCINHO BELOTA',
        instagram: '@marcinhobelota',
        instagramLink: 'https://www.instagram.com/marcinhobelota/',
        date: '02/04/2021',
        total: 2000.0,
        thanks: 'https://www.instagram.com/tv/CNH9yiJpegc/',
        howto: ''
    },
    {
        image: '9.jpg',
        name: 'LAR DOS ANIMAIS GOIÂNIA',
        instagram: '@lardosanimaisgoiania',
        instagramLink: 'https://www.instagram.com/lardosanimaisgoiania/',
        date: '27/03/2021',
        total: 2500.0,
        thanks: 'https://www.youtube.com/watch?v=dV6rDd1-hps',
        howto: 'https://l.instagram.com/?u=https%3A%2F%2Fbit.ly%2FQueroDoarLarDosAnimais&e=ATOZ2gUsrX9Q2WIBKZrJDB-QdcAcG5OnTW7_mWYO_xJXOWTnN_Lzm7K56l1JQHrz1G0tyRf3vJdvDgotf25xdtcaOzR6sjPdDd_csg&s=1'
    },
    {
        image: '14.jpg',
        name: 'ABRIGO FLORA E FAUNA',
        instagram: '@abrigofloraefauna',
        instagramLink: 'https://www.instagram.com/abrigofloraefauna/',
        date: '18/04/2021',
        total: 1199.0,
        thanks: 'https://twitter.com/viralatafinance/status/1384290709268680712',
        howto: 'https://www.instagram.com/stories/highlights/18059308147111228/'
    },
    {
        image: '10.jpg',
        name: 'AGAPA',
        instagram: '@angelagomesagapa',
        instagramLink: 'https://www.instagram.com/angelagomesagapa/',
        date: '21/04/2021',
        total: 4302.62,
        thanks: 'https://www.instagram.com/angelagomesagapa/',
        howto: 'https://www.instagram.com/stories/highlights/17920591399420733/'
    },
    {
        image: '11.jpg',
        name: 'ABRIGO AMIGA DE UM AUMIGO',
        instagram: '@abrigoamigadeumaumigoof',
        instagramLink: 'https://www.instagram.com/abrigoamigadeumaumigoof/',
        date: '25/04/2021',
        total: 11396.14,
        thanks: 'https://www.instagram.com/p/COMjG5Cp-bm/',
        howto: 'https://www.instagram.com/stories/highlights/18163043998127912/'
    },
    {
        image: '12.jpg',
        name: 'JUNTOS POR CARMINHA E 40 CÃES',
        instagram: '@juntosporcarminhae40caes',
        instagramLink: 'https://www.instagram.com/juntosporcarminhae40caes/',
        date: '27/04/2021',
        total: 9643.38,
        thanks: 'https://www.instagram.com/juntosporcarminhae40caes/',
        howto: 'https://www.instagram.com/stories/highlights/17877018269143535/'
    },
    {
        image: '13.jpg',
        name: 'ABRIGO VIRA-LATA, VIRA AMOR',
        instagram: '@viralataviraamorcacoal',
        instagramLink: 'https://instagram.com/viralataviraamorcacoal',
        date: '02/05/2021',
        total: 5652.85,
        thanks: 'https://instagram.com/viralataviraamorcacoal',
        howto: 'https://www.instagram.com/p/COY47HInKfQ/?igshid=1a5r09frgdgpl'
    },
];
var Donate = function () {
    var TranslateString = useI18n_1["default"]();
    var account = hooks_1.useActiveWeb3React().account;
    var collectible = Collectibles_1.useCollectibleEditions();
    var _a = react_1.useState(false), confirmModalVisible = _a[0], setConfirmModalVisible = _a[1];
    var _b = react_1["default"].useReducer(slidesReducer, initialState), state = _b[0], dispatch = _b[1];
    var isDesktop = react_2.useMediaQuery('md', { match: 'up' });
    var cName = isDesktop ? 'slides' : 'slides slides-mobile';
    var cWrapperName = isDesktop ? 'slides-wrapper' : 'slides-wrapper slides-wrapper-mobile';
    var _c = useTheme_1["default"](), isDark = _c.isDark, toggleTheme = _c.toggleTheme, theme = _c.theme;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'slide-container' },
            react_1["default"].createElement("button", { onClick: function () { return dispatch({ type: 'PREV' }); } }, "\u2039"),
            react_1["default"].createElement("div", { className: cWrapperName },
                react_1["default"].createElement("div", { className: cName }, __spreadArrays(slides, slides, slides).map(function (slide, i) {
                    var offset = slides.length + (state.slideIndex - i);
                    return react_1["default"].createElement(Slide, { slide: slide, offset: offset, key: i });
                }))),
            react_1["default"].createElement("button", { onClick: function () { return dispatch({ type: 'NEXT' }); } }, "\u203A")),
        react_1["default"].createElement(StyledContent, { className: (!isDark ? 'neon-content-light' : '') + " " + (!isDesktop ? 'neon-content-mobile' : '') },
            react_1["default"].createElement("h2", { className: "neon-words" },
                react_1["default"].createElement("span", { className: "neon-words__word" }, "Viralata + Dogira is a partnership to help NGO's in raising funds"),
                react_1["default"].createElement("span", { className: "neon-words__word" }, "You can read more below")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("h2", { className: "neon-words" },
                react_1["default"].createElement("span", { className: "neon-words__word" }, "1. Why?"),
                react_1["default"].createElement("span", { className: "neon-block" },
                    "Viralata Finance was inspired by the caramel coloured stray dog and the millions of other stray dogs that wander the streets of Brazil.",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("br", null),
                    "As a community, we believe that we have the power to make a difference through community efforts and charitable donations.",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("br", null),
                    "So far we have donated",
                    ' ',
                    react_1["default"].createElement("b", null,
                        "R$",
                        ' ',
                        testimonials
                            .map(function (r) { return r.total; })
                            .reduce(function (a, b) { return a + b; })
                            .toLocaleString()),
                    ' ',
                    "to NGO's in Brazil.")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("h2", { className: "neon-words" },
                react_1["default"].createElement("span", { className: "neon-words__word" }, "2. How to contribute?"),
                react_1["default"].createElement("span", { className: "neon-block" },
                    "When you buy a NFT you will be supporting Viralata Finance Charity Fund for NGO's. The NFT contract will distribute the amount in:",
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", null, "84% to Charity Fund Wallet"),
                        react_1["default"].createElement("li", null, "10% to the artist"),
                        react_1["default"].createElement("li", null, "6% to Viralata Finance for further development")),
                    react_1["default"].createElement("br", null),
                    "Charity Fund Wallet ",
                    react_1["default"].createElement("br", null),
                    " ",
                    react_1["default"].createElement("a", { href: "https://bscscan.com/address/0x9220557A6dDa69a1837c1B88359D55Aa6bE9A77e" }, "0x9220557A6dDa69a1837c1B88359D55Aa6bE9A77e"),
                    " ",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("br", null),
                    "Artist Wallet ",
                    react_1["default"].createElement("br", null),
                    " ",
                    react_1["default"].createElement("a", { href: "https://bscscan.com/address/" }, "-"),
                    " ",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("br", null),
                    "Viralata Finance Wallet ",
                    react_1["default"].createElement("br", null),
                    " ",
                    react_1["default"].createElement("a", { href: "https://bscscan.com/address/0xE2905203e911f7f591Db51Dc9ECb8f541BCC74B3" }, "0xE2905203e911f7f591Db51Dc9ECb8f541BCC74B3"),
                    " ",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("br", null),
                    "You can also donate directly to the wallets above using BEP20 tokens.")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("h2", { className: "neon-words" },
                react_1["default"].createElement("span", { className: "neon-words__word" }, "3. How are NGOs selected?"),
                react_1["default"].createElement("span", { className: "neon-block" },
                    "We select NGOs after careful discussion and review from ourselves, as well as the team. We take in to account their history as a shelter, their size, staff, and reputation through a variety of methods: reviewing social media, meetings, and in some cases in person visits to verify. ",
                    react_1["default"].createElement("br", null),
                    "First contact is usually made based off of word of mouth from our community, or through community outreach.")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("h2", { className: "neon-words" },
                react_1["default"].createElement("span", { className: "neon-words__word" }, "4. How are the donations used?"),
                react_1["default"].createElement("span", { className: "neon-block" },
                    "Each NGO covers different needs. Some NGOs specifically require assistance with veterinarian bills (rescuing and rehabilitating injured or sick animals), others may require assistance with food, or medicine.",
                    react_1["default"].createElement("br", null),
                    " In other situations, they may need assistance for building additional pens or expanding the shelter to accommodate more animals.")),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("h2", { className: "neon-words" },
                react_1["default"].createElement("span", { className: "neon-words__word" }, "5. Who are some previous NGOs that have been helped?"),
                react_1["default"].createElement("span", { className: "neon-block" },
                    react_1["default"].createElement("ul", null, testimonials.map(function (t, i) {
                        return react_1["default"].createElement("li", { key: i }, t.name);
                    })))),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("h2", { className: "neon-words" },
                react_1["default"].createElement("span", { className: "neon-words__word" }, "6. Where to find more information about?"),
                react_1["default"].createElement("span", { className: "neon-block" },
                    "You can find more information about Viralata Finance Charity Fund at ",
                    react_1["default"].createElement("a", { href: "https://viralata.finance" }, "viralata.finance"),
                    " and",
                    ' ',
                    react_1["default"].createElement("a", { href: "https://viralatometro.com" }, "viralatometro.com."),
                    " ",
                    react_1["default"].createElement("br", null),
                    " Also you can read our document about it by ",
                    react_1["default"].createElement("a", { href: "https://drive.google.com/file/d/1bZ8wrgbQb1iS52DiSyX3igPkjesuN2LI/view?usp=sharing" }, "clicking here.")))))
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
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
