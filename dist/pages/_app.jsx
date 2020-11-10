"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_intl_1 = require("react-intl");
const prop_types_1 = __importDefault(require("prop-types"));
const app_1 = __importDefault(require("next/app"));
const head_1 = __importDefault(require("next/head"));
const styles_1 = require("@material-ui/core/styles");
const CssBaseline_1 = __importDefault(require("@material-ui/core/CssBaseline"));
const polyfills_1 = require("../polyfills");
const theme_1 = __importDefault(require("../src/theme"));
function MyApp({ Component, locale, messages, pageProps }) {
    react_1.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);
    return (<>
      <head_1.default>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
        <title>Calculators</title>

        <link rel="manifest" href="/manifest.json"/>
        <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16"/>
        <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32"/>
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB"/>
      </head_1.default>

      <react_intl_1.IntlProvider locale={locale} defaultLocale="en" messages={messages}>
        <styles_1.ThemeProvider theme={theme_1.default}>
          
          <CssBaseline_1.default />
          <Component {...pageProps}/>
        </styles_1.ThemeProvider>
      </react_intl_1.IntlProvider>
    </>);
}
/**
 * Get the messages and also do locale negotiation. A multi-lingual user
 * can specify locale prefs like ['ja', 'en-GB', 'en'] which is interpreted as
 * Japanese, then British English, then English
 * @param locales list of requested locales
 * @returns {[string, Promise]} A tuple containing the negotiated locale
 * and the promise of fetching the translated messages
 */
function getMessages(locales = ['en']) {
    if (!Array.isArray(locales)) {
        locales = [locales];
    }
    let langBundle;
    let locale;
    for (let i = 0; i < locales.length && !locale; i++) {
        locale = locales[i];
        switch (locale) {
            case 'fr':
                langBundle = Promise.resolve().then(() => __importStar(require('../compiled-lang/fr.json')));
                break;
            default:
                break;
        }
    }
    if (!langBundle) {
        return ['en', Promise.resolve().then(() => __importStar(require('../compiled-lang/en.json')))];
    }
    return [locale, langBundle];
}
const getInitialProps = async (appContext) => {
    const { ctx: { req }, } = appContext;
    const requestedLocales = req?.locale ||
        (typeof navigator !== 'undefined' && navigator.languages) ||
        // IE11
        (typeof navigator !== 'undefined' && navigator.userLanguage) ||
        (typeof window !== 'undefined' && window.LOCALE) ||
        'en';
    const [supportedLocale, messagePromise] = getMessages(requestedLocales);
    const [, messages, appProps] = await Promise.all([
        polyfills_1.polyfill(supportedLocale),
        messagePromise,
        app_1.default.getInitialProps(appContext),
    ]);
    return {
        ...appProps,
        locale: supportedLocale,
        messages: messages.default,
    };
};
MyApp.getInitialProps = getInitialProps;
MyApp.propTypes = {
    Component: prop_types_1.default.elementType.isRequired,
    pageProps: prop_types_1.default.object.isRequired,
};
exports.default = MyApp;
//# sourceMappingURL=_app.jsx.map