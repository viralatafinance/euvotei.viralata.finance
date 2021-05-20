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
exports.__esModule = true;
var sdk_1 = require("@pancakeswap-libs/sdk");
var react_1 = require("react");
var react_icons_1 = require("@geist-ui/react-icons");
var uikit_1 = require("@pancakeswap-libs/uikit");
var react_2 = require("@geist-ui/react");
var react_feather_1 = require("react-feather");
var styled_components_1 = require("styled-components");
var AddressInputPanel_1 = require("components/AddressInputPanel");
var Card_1 = require("components/Card");
var Column_1 = require("components/Column");
var ConfirmSwapModal_1 = require("components/swap/ConfirmSwapModal");
var CurrencyInputPanel_1 = require("components/CurrencyInputPanel");
var Row_1 = require("components/Row");
var AdvancedSwapDetailsDropdown_1 = require("components/swap/AdvancedSwapDetailsDropdown");
var confirmPriceImpactWithoutFee_1 = require("components/swap/confirmPriceImpactWithoutFee");
var styleds_1 = require("components/swap/styleds");
var TradePrice_1 = require("components/swap/TradePrice");
var TokenWarningModal_1 = require("components/TokenWarningModal");
var ProgressSteps_1 = require("components/ProgressSteps");
var ButtonCTA_1 = require("components/ButtonCTA");
var index_1 = require("constants/index");
var hooks_1 = require("hooks");
var Tokens_1 = require("hooks/Tokens");
var useApproveCallback_1 = require("hooks/useApproveCallback");
var useSwapCallback_1 = require("hooks/useSwapCallback");
var useWrapCallback_1 = require("hooks/useWrapCallback");
var actions_1 = require("state/swap/actions");
var hooks_2 = require("state/swap/hooks");
var hooks_3 = require("state/user/hooks");
var Shared_1 = require("components/Shared");
var maxAmountSpend_1 = require("utils/maxAmountSpend");
var prices_1 = require("utils/prices");
var Loader_1 = require("components/Loader");
var useI18n_1 = require("hooks/useI18n");
var PageHeader_1 = require("components/PageHeader");
var ConnectWalletButton_1 = require("components/ConnectWalletButton");
var AppBody_1 = require("../AppBody");
var StyledLink = styled_components_1["default"](react_2.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 15px;\n  font-weight: 600;\n  color: #333 !important;\n  margin-top: 5px;\n\n  &:hover {\n    color: #4bf2cd !important;\n  }\n"], ["\n  font-size: 15px;\n  font-weight: 600;\n  color: #333 !important;\n  margin-top: 5px;\n\n  &:hover {\n    color: #4bf2cd !important;\n  }\n"])));
var Swap = function () {
    var _a, _b, _c;
    var _d, _e, _f, _g, _h, _j, _k;
    var loadedUrlParams = hooks_2.useDefaultsFromURLSearch();
    var TranslateString = useI18n_1["default"]();
    // token warning stuff
    var _l = [Tokens_1.useCurrency(loadedUrlParams === null || loadedUrlParams === void 0 ? void 0 : loadedUrlParams.inputCurrencyId), Tokens_1.useCurrency(loadedUrlParams === null || loadedUrlParams === void 0 ? void 0 : loadedUrlParams.outputCurrencyId)], loadedInputCurrency = _l[0], loadedOutputCurrency = _l[1];
    var _m = react_1.useState(false), dismissTokenWarning = _m[0], setDismissTokenWarning = _m[1];
    var urlLoadedTokens = react_1.useMemo(function () { var _a, _b; return (_b = (_a = [loadedInputCurrency, loadedOutputCurrency]) === null || _a === void 0 ? void 0 : _a.filter(function (c) { return c instanceof sdk_1.Token; })) !== null && _b !== void 0 ? _b : []; }, [
        loadedInputCurrency,
        loadedOutputCurrency,
    ]);
    var handleConfirmTokenWarning = react_1.useCallback(function () {
        setDismissTokenWarning(true);
    }, []);
    var account = hooks_1.useActiveWeb3React().account;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var isExpertMode = hooks_3.useExpertModeManager()[0];
    // get custom setting values for user
    var deadline = hooks_3.useUserDeadline()[0];
    var allowedSlippage = hooks_3.useUserSlippageTolerance()[0];
    // swap state
    var _o = hooks_2.useSwapState(), independentField = _o.independentField, typedValue = _o.typedValue, recipient = _o.recipient;
    var _p = hooks_2.useDerivedSwapInfo(), v2Trade = _p.v2Trade, currencyBalances = _p.currencyBalances, parsedAmount = _p.parsedAmount, currencies = _p.currencies, swapInputError = _p.inputError;
    var _q = useWrapCallback_1["default"](currencies[actions_1.Field.INPUT], currencies[actions_1.Field.OUTPUT], typedValue), wrapType = _q.wrapType, onWrap = _q.execute, wrapInputError = _q.inputError;
    var showWrap = wrapType !== useWrapCallback_1.WrapType.NOT_APPLICABLE;
    var trade = showWrap ? undefined : v2Trade;
    var parsedAmounts = showWrap
        ? (_a = {},
            _a[actions_1.Field.INPUT] = parsedAmount,
            _a[actions_1.Field.OUTPUT] = parsedAmount,
            _a) : (_b = {},
        _b[actions_1.Field.INPUT] = independentField === actions_1.Field.INPUT ? parsedAmount : trade === null || trade === void 0 ? void 0 : trade.inputAmount,
        _b[actions_1.Field.OUTPUT] = independentField === actions_1.Field.OUTPUT ? parsedAmount : trade === null || trade === void 0 ? void 0 : trade.outputAmount,
        _b);
    var _r = hooks_2.useSwapActionHandlers(), onSwitchTokens = _r.onSwitchTokens, onCurrencySelection = _r.onCurrencySelection, onUserInput = _r.onUserInput, onChangeRecipient = _r.onChangeRecipient;
    var isValid = !swapInputError;
    var dependentField = independentField === actions_1.Field.INPUT ? actions_1.Field.OUTPUT : actions_1.Field.INPUT;
    var handleTypeInput = react_1.useCallback(function (value) {
        onUserInput(actions_1.Field.INPUT, value);
    }, [onUserInput]);
    var handleTypeOutput = react_1.useCallback(function (value) {
        onUserInput(actions_1.Field.OUTPUT, value);
    }, [onUserInput]);
    // modal and loading
    var _s = react_1.useState({
        showConfirm: false,
        tradeToConfirm: undefined,
        attemptingTxn: false,
        swapErrorMessage: undefined,
        txHash: undefined
    }), _t = _s[0], showConfirm = _t.showConfirm, tradeToConfirm = _t.tradeToConfirm, swapErrorMessage = _t.swapErrorMessage, attemptingTxn = _t.attemptingTxn, txHash = _t.txHash, setSwapState = _s[1];
    var formattedAmounts = (_c = {},
        _c[independentField] = typedValue,
        _c[dependentField] = showWrap ? (_e = (_d = parsedAmounts[independentField]) === null || _d === void 0 ? void 0 : _d.toExact()) !== null && _e !== void 0 ? _e : '' : (_g = (_f = parsedAmounts[dependentField]) === null || _f === void 0 ? void 0 : _f.toSignificant(6)) !== null && _g !== void 0 ? _g : '',
        _c);
    var route = trade === null || trade === void 0 ? void 0 : trade.route;
    var userHasSpecifiedInputOutput = Boolean(currencies[actions_1.Field.INPUT] && currencies[actions_1.Field.OUTPUT] && ((_h = parsedAmounts[independentField]) === null || _h === void 0 ? void 0 : _h.greaterThan(sdk_1.JSBI.BigInt(0))));
    var noRoute = !route;
    // check whether the user has approved the router on the input token
    var _u = useApproveCallback_1.useApproveCallbackFromTrade(trade, allowedSlippage), approval = _u[0], approveCallback = _u[1];
    // check if user has gone through approval process, used to show two step buttons, reset on token change
    var _v = react_1.useState(false), approvalSubmitted = _v[0], setApprovalSubmitted = _v[1];
    // mark when a user has submitted an approval, reset onTokenSelection for input field
    react_1.useEffect(function () {
        if (approval === useApproveCallback_1.ApprovalState.PENDING) {
            setApprovalSubmitted(true);
        }
    }, [approval, approvalSubmitted]);
    var maxAmountInput = maxAmountSpend_1.maxAmountSpend(currencyBalances[actions_1.Field.INPUT]);
    var atMaxAmountInput = Boolean(maxAmountInput && ((_j = parsedAmounts[actions_1.Field.INPUT]) === null || _j === void 0 ? void 0 : _j.equalTo(maxAmountInput)));
    // the callback to execute the swap
    var _w = useSwapCallback_1.useSwapCallback(trade, allowedSlippage, deadline, recipient), swapCallback = _w.callback, swapCallbackError = _w.error;
    var priceImpactWithoutFee = prices_1.computeTradePriceBreakdown(trade).priceImpactWithoutFee;
    var handleSwap = react_1.useCallback(function () {
        if (priceImpactWithoutFee && !confirmPriceImpactWithoutFee_1["default"](priceImpactWithoutFee)) {
            return;
        }
        if (!swapCallback) {
            return;
        }
        setSwapState(function (prevState) { return (__assign(__assign({}, prevState), { attemptingTxn: true, swapErrorMessage: undefined, txHash: undefined })); });
        swapCallback()
            .then(function (hash) {
            setSwapState(function (prevState) { return (__assign(__assign({}, prevState), { attemptingTxn: false, swapErrorMessage: undefined, txHash: hash })); });
        })["catch"](function (error) {
            setSwapState(function (prevState) { return (__assign(__assign({}, prevState), { attemptingTxn: false, swapErrorMessage: error.message, txHash: undefined })); });
        });
    }, [priceImpactWithoutFee, swapCallback, setSwapState]);
    // errors
    var _x = react_1.useState(false), showInverted = _x[0], setShowInverted = _x[1];
    // warnings on slippage
    var priceImpactSeverity = prices_1.warningSeverity(priceImpactWithoutFee);
    // show approve flow when: no error on inputs, not approved or pending, or approved in current session
    // never show if price impact is above threshold in non expert mode
    var showApproveFlow = !swapInputError &&
        (approval === useApproveCallback_1.ApprovalState.NOT_APPROVED || approval === useApproveCallback_1.ApprovalState.PENDING || (approvalSubmitted && approval === useApproveCallback_1.ApprovalState.APPROVED)) &&
        !(priceImpactSeverity > 3 && !isExpertMode);
    var handleConfirmDismiss = react_1.useCallback(function () {
        setSwapState(function (prevState) { return (__assign(__assign({}, prevState), { showConfirm: false })); });
        // if there was a tx hash, we want to clear the input
        if (txHash) {
            onUserInput(actions_1.Field.INPUT, '');
        }
    }, [onUserInput, txHash, setSwapState]);
    var handleAcceptChanges = react_1.useCallback(function () {
        setSwapState(function (prevState) { return (__assign(__assign({}, prevState), { tradeToConfirm: trade })); });
    }, [trade]);
    var handleInputSelect = react_1.useCallback(function (inputCurrency) {
        setApprovalSubmitted(false);
        onCurrencySelection(actions_1.Field.INPUT, inputCurrency);
    }, [onCurrencySelection, setApprovalSubmitted]);
    var handleMaxInput = react_1.useCallback(function () {
        if (maxAmountInput) {
            onUserInput(actions_1.Field.INPUT, maxAmountInput.toExact());
        }
    }, [maxAmountInput, onUserInput]);
    var handleOutputSelect = react_1.useCallback(function (outputCurrency) {
        onCurrencySelection(actions_1.Field.OUTPUT, outputCurrency);
    }, [onCurrencySelection]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TokenWarningModal_1["default"], { isOpen: urlLoadedTokens.length > 0 && !dismissTokenWarning, tokens: urlLoadedTokens, onConfirm: handleConfirmTokenWarning }),
        react_1["default"].createElement(AppBody_1["default"], null,
            react_1["default"].createElement(styleds_1.Wrapper, { id: "swap-page" },
                react_1["default"].createElement(ConfirmSwapModal_1["default"], { isOpen: showConfirm, trade: trade, originalTrade: tradeToConfirm, onAcceptChanges: handleAcceptChanges, attemptingTxn: attemptingTxn, txHash: txHash, recipient: recipient, allowedSlippage: allowedSlippage, onConfirm: handleSwap, swapErrorMessage: swapErrorMessage, onDismiss: handleConfirmDismiss }),
                react_1["default"].createElement(PageHeader_1["default"], { title: TranslateString(8, 'Swap') }),
                react_1["default"].createElement(uikit_1.CardBody, { style: { padding: 0, marginTop: 20, marginBottom: 10 } },
                    react_1["default"].createElement(Column_1.AutoColumn, { gap: "md" },
                        react_1["default"].createElement(CurrencyInputPanel_1["default"], { label: independentField === actions_1.Field.OUTPUT && !showWrap && trade ? TranslateString(194, 'From (estimated)') : TranslateString(76, 'From'), value: formattedAmounts[actions_1.Field.INPUT], showMaxButton: !atMaxAmountInput, currency: currencies[actions_1.Field.INPUT], onUserInput: handleTypeInput, onMax: handleMaxInput, onCurrencySelect: handleInputSelect, otherCurrency: currencies[actions_1.Field.OUTPUT], id: "swap-currency-input" }),
                        react_1["default"].createElement(Column_1.AutoColumn, { justify: "space-between" },
                            react_1["default"].createElement(Row_1.AutoRow, { justify: isExpertMode ? 'space-between' : 'center', style: { padding: '0 1rem' } },
                                react_1["default"].createElement(styleds_1.ArrowWrapper, { clickable: true },
                                    react_1["default"].createElement(StyledLink, { href: undefined, onClick: function (e) {
                                            e.preventDefault();
                                            setApprovalSubmitted(false); // reset 2 step UI for approvals
                                            onSwitchTokens();
                                        } },
                                        react_1["default"].createElement(react_icons_1.ArrowDown, { style: { width: 24 } }))),
                                recipient === null && !showWrap && isExpertMode ? (react_1["default"].createElement(Shared_1.LinkStyledButton, { id: "add-recipient-button", onClick: function () { return onChangeRecipient(''); } }, "+ Add a send (optional)")) : null)),
                        react_1["default"].createElement(CurrencyInputPanel_1["default"], { value: formattedAmounts[actions_1.Field.OUTPUT], onUserInput: handleTypeOutput, label: independentField === actions_1.Field.INPUT && !showWrap && trade ? TranslateString(196, 'To (estimated)') : TranslateString(80, 'To'), showMaxButton: false, currency: currencies[actions_1.Field.OUTPUT], onCurrencySelect: handleOutputSelect, otherCurrency: currencies[actions_1.Field.INPUT], id: "swap-currency-output" }),
                        recipient !== null && !showWrap ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(Row_1.AutoRow, { justify: "space-between", style: { padding: '0 1rem' } },
                                react_1["default"].createElement(styleds_1.ArrowWrapper, { clickable: false },
                                    react_1["default"].createElement(react_icons_1.ArrowDown, { size: "16", color: theme.colors.textSubtle })),
                                react_1["default"].createElement(Shared_1.LinkStyledButton, { id: "remove-recipient-button", onClick: function () { return onChangeRecipient(null); } }, "- Remove send")),
                            react_1["default"].createElement(AddressInputPanel_1["default"], { id: "recipient", value: recipient, onChange: onChangeRecipient }))) : null,
                        showWrap ? null : (react_1["default"].createElement(Card_1["default"], { padding: ".25rem .75rem 0 .75rem", borderRadius: "20px" },
                            react_1["default"].createElement(Column_1.AutoColumn, { gap: "4px" },
                                Boolean(trade) && (react_1["default"].createElement(Row_1.RowBetween, { align: "center" },
                                    react_1["default"].createElement(react_2.Text, { style: { margin: 0, fontSize: '14px' } }, TranslateString(1182, 'Price')),
                                    react_1["default"].createElement(TradePrice_1["default"], { price: trade === null || trade === void 0 ? void 0 : trade.executionPrice, showInverted: showInverted, setShowInverted: setShowInverted }))),
                                allowedSlippage !== index_1.INITIAL_ALLOWED_SLIPPAGE && (react_1["default"].createElement(Row_1.RowBetween, { align: "center" },
                                    react_1["default"].createElement(react_2.Text, { style: { margin: 0, fontSize: '14px' } }, TranslateString(88, 'Slippage Tolerance')),
                                    react_1["default"].createElement(react_2.Text, { style: { margin: 0, fontSize: '14px' } },
                                        allowedSlippage / 100,
                                        "%"))))))),
                    react_1["default"].createElement(styleds_1.BottomGrouping, null,
                        !account ? (react_1["default"].createElement(ConnectWalletButton_1["default"], { width: "100%" })) : showWrap ? (react_1["default"].createElement(ButtonCTA_1["default"], { disabled: Boolean(wrapInputError), onClick: onWrap }, wrapInputError !== null && wrapInputError !== void 0 ? wrapInputError : (wrapType === useWrapCallback_1.WrapType.WRAP ? 'Wrap' : wrapType === useWrapCallback_1.WrapType.UNWRAP ? 'Unwrap' : null))) : noRoute && userHasSpecifiedInputOutput ? (react_1["default"].createElement(Card_1.GreyCard, { style: { textAlign: 'center' } },
                            react_1["default"].createElement(react_2.Text, { style: { margin: 0, fontSize: '14px' } }, TranslateString(1194, 'Insufficient liquidity for this trade.')))) : showApproveFlow ? (react_1["default"].createElement(Row_1.RowBetween, null,
                            react_1["default"].createElement(ButtonCTA_1["default"], { onClick: approveCallback, disabled: approval !== useApproveCallback_1.ApprovalState.NOT_APPROVED || approvalSubmitted }, approval === useApproveCallback_1.ApprovalState.PENDING ? (react_1["default"].createElement(Row_1.AutoRow, { gap: "6px", justify: "center" },
                                "Approving ",
                                react_1["default"].createElement(Loader_1["default"], { stroke: "white" }))) : approvalSubmitted && approval === useApproveCallback_1.ApprovalState.APPROVED ? ('Approved') : ("Approve " + ((_k = currencies[actions_1.Field.INPUT]) === null || _k === void 0 ? void 0 : _k.symbol))),
                            react_1["default"].createElement("div", { style: { width: 40 } }),
                            react_1["default"].createElement(ButtonCTA_1["default"], { onClick: function () {
                                    if (isExpertMode) {
                                        handleSwap();
                                    }
                                    else {
                                        setSwapState({
                                            tradeToConfirm: trade,
                                            attemptingTxn: false,
                                            swapErrorMessage: undefined,
                                            showConfirm: true,
                                            txHash: undefined
                                        });
                                    }
                                }, style: { width: '48%' }, id: "swap-button", disabled: !isValid || approval !== useApproveCallback_1.ApprovalState.APPROVED || (priceImpactSeverity > 3 && !isExpertMode), iconRight: isValid && priceImpactSeverity > 2 ? react_1["default"].createElement(react_feather_1.AlertTriangle, { style: { color: '#fff' }, size: 24 }) : null }, priceImpactSeverity > 3 && !isExpertMode ? "Price Impact High" : "Swap" + (priceImpactSeverity > 2 ? ' Anyway' : '')))) : (react_1["default"].createElement(ButtonCTA_1["default"], { onClick: function () {
                                if (isExpertMode) {
                                    handleSwap();
                                }
                                else {
                                    setSwapState({
                                        tradeToConfirm: trade,
                                        attemptingTxn: false,
                                        swapErrorMessage: undefined,
                                        showConfirm: true,
                                        txHash: undefined
                                    });
                                }
                            }, id: "swap-button", disabled: !isValid || (priceImpactSeverity > 3 && !isExpertMode) || !!swapCallbackError, iconRight: isValid && priceImpactSeverity > 2 ? react_1["default"].createElement(react_feather_1.AlertTriangle, { style: { color: '#fff' }, size: 24 }) : null }, swapInputError || (priceImpactSeverity > 3 && !isExpertMode ? "Price Impact Too High" : "Swap" + (priceImpactSeverity > 2 ? ' Anyway' : '')))),
                        showApproveFlow && react_1["default"].createElement(ProgressSteps_1["default"], { steps: [approval === useApproveCallback_1.ApprovalState.APPROVED] }),
                        isExpertMode && swapErrorMessage ? react_1["default"].createElement(styleds_1.SwapCallbackError, { error: swapErrorMessage }) : null)))),
        react_1["default"].createElement(AdvancedSwapDetailsDropdown_1["default"], { trade: trade })));
};
exports["default"] = Swap;
var templateObject_1;
