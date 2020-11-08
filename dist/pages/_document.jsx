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
const react_1 = __importDefault(require("react"));
const document_1 = __importStar(require("next/document"));
const styles_1 = require("@material-ui/core/styles");
const theme_1 = __importDefault(require("../src/theme"));
class MyDocument extends document_1.default {
    static async getInitialProps(ctx) {
        const { req } = ctx;
        const locale = req.locale;
        // Render app and page and get the context of the page with collected side effects.
        const sheets = new styles_1.ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props}/>),
        });
        const initialProps = await document_1.default.getInitialProps(ctx);
        return {
            ...initialProps,
            locale,
            lang: locale ? locale.split('-')[0] : undefined,
            nonce: req.nonce,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [...react_1.default.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        };
    }
    render() {
        let scriptEl;
        if (this.props.locale) {
            scriptEl = (<script nonce={this.props.nonce} dangerouslySetInnerHTML={{
                __html: `window.LOCALE="${this.props.locale}"`,
            }}></script>);
        }
        return (<document_1.Html lang={this.props.lang}>
        <document_1.Head>
          
          <meta name="theme-color" content={theme_1.default.palette.primary.main}/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        </document_1.Head>
        <body>
          {scriptEl}
          <document_1.Main />
          <document_1.NextScript />
        </body>
      </document_1.Html>);
    }
}
exports.default = MyDocument;
