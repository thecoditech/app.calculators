"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_seo_1 = require("next-seo");
const react_1 = __importDefault(require("react"));
const Layout_1 = __importDefault(require("../src/Layout"));
const next_seo_config_1 = __importDefault(require("../next-seo.config"));
const pageTitle = 'Home';
const pageDescription = '';
const pageUrl = `${next_seo_config_1.default.siteUrl}/`;
function Index() {
    return (<>
      <next_seo_1.NextSeo title={pageTitle} description={pageDescription} canonical={pageUrl} openGraph={{
        url: pageUrl,
        title: pageTitle,
        description: pageDescription,
    }}/>

      <Layout_1.default>
        Home
      </Layout_1.default>
    </>);
}
exports.default = Index;
//# sourceMappingURL=index.jsx.map