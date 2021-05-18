"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var crowdin_api_client_1 = require("@crowdin/crowdin-api-client");
var Layout_1 = require("layout/Layout");
var Popups_1 = require("../components/Popups");
var Web3ReactManager_1 = require("../components/Web3ReactManager");
var Donate_1 = require("./Donate");
var redirects_1 = require("./Donate/redirects");
var languageCodes_1 = require("../constants/localisation/languageCodes");
var LanguageContext_1 = require("../hooks/LanguageContext");
var TranslationsContext_1 = require("../hooks/TranslationsContext");
var AppWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n"], ["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n"])));
var ContentWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px 0px;\n  align-items: center;\n  flex: 1;\n  z-index: 2;\n  min-height: 100vh;\n\n  ::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    min-height: 100%;\n    background-image: url(images/sunset-bg.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 1;\n    z-index: 1;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px 0px;\n  align-items: center;\n  flex: 1;\n  z-index: 2;\n  min-height: 100vh;\n\n  ::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    min-height: 100%;\n    background-image: url(images/sunset-bg.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 1;\n    z-index: 1;\n  }\n"])));
function App() {
    var _this = this;
    var _a = react_1.useState(undefined), selectedLanguage = _a[0], setSelectedLanguage = _a[1];
    var _b = react_1.useState(undefined), translatedLanguage = _b[0], setTranslatedLanguage = _b[1];
    var _c = react_1.useState([]), translations = _c[0], setTranslations = _c[1];
    var apiKey = "" + process.env.REACT_APP_CROWDIN_APIKEY;
    var projectId = parseInt("" + process.env.REACT_APP_CROWDIN_PROJECTID);
    var fileId = 6;
    var credentials = {
        token: apiKey
    };
    var stringTranslationsApi = new crowdin_api_client_1.StringTranslations(credentials);
    var getStoredLang = function (storedLangCode) {
        return languageCodes_1.allLanguages.filter(function (language) {
            return language.code === storedLangCode;
        })[0];
    };
    react_1.useEffect(function () {
        var storedLangCode = localStorage.getItem('pancakeSwapLanguage');
        if (storedLangCode) {
            var storedLang = getStoredLang(storedLangCode);
            setSelectedLanguage(storedLang);
        }
        else {
            setSelectedLanguage(languageCodes_1.EN);
        }
    }, []);
    var fetchTranslationsForSelectedLanguage = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            stringTranslationsApi
                .listLanguageTranslations(projectId, selectedLanguage.code, undefined, fileId, 200)
                .then(function (translationApiResponse) {
                if (translationApiResponse.data.length < 1) {
                    setTranslations(['error']);
                }
                else {
                    setTranslations(translationApiResponse.data);
                }
            })
                .then(function () { return setTranslatedLanguage(selectedLanguage); })["catch"](function (error) {
                setTranslations(['error']);
                console.error(error);
            });
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        if (selectedLanguage) {
            fetchTranslationsForSelectedLanguage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedLanguage]);
    return (react_1["default"].createElement(react_1.Suspense, { fallback: null },
        react_1["default"].createElement(react_router_dom_1.HashRouter, null,
            react_1["default"].createElement(AppWrapper, null,
                react_1["default"].createElement(LanguageContext_1.LanguageContext.Provider, { value: { selectedLanguage: selectedLanguage, setSelectedLanguage: setSelectedLanguage, translatedLanguage: translatedLanguage, setTranslatedLanguage: setTranslatedLanguage } },
                    react_1["default"].createElement(TranslationsContext_1.TranslationsContext.Provider, { value: { translations: translations, setTranslations: setTranslations } },
                        react_1["default"].createElement(Layout_1["default"], null,
                            react_1["default"].createElement(ContentWrapper, null,
                                react_1["default"].createElement(Popups_1["default"], null),
                                react_1["default"].createElement(Web3ReactManager_1["default"], null,
                                    react_1["default"].createElement(react_router_dom_1.Switch, null,
                                        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/", component: Donate_1["default"] }),
                                        react_1["default"].createElement(react_router_dom_1.Route, { component: redirects_1.RedirectPathToDonateOnly })))))))))));
}
exports["default"] = App;
var templateObject_1, templateObject_2;
