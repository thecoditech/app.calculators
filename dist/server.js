"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const glob_1 = require("glob");
const http_1 = require("http");
const accepts_1 = __importDefault(require("accepts"));
const next_1 = __importDefault(require("next"));
const polyfills_1 = require("./polyfills");
const crypto_1 = __importDefault(require("crypto"));
// Get the supported languages by looking for translations in the `lang/` dir.
const supportedLanguages = glob_1.sync('./compiled-lang/*.json').map(f => path_1.basename(f, '.json'));
const SUPPORTED_LOCALES = ['en', 'fr'];
const port = parseInt(process.env.PORT || '3000', 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({ dev });
const handle = app.getRequestHandler();
Promise.all([app.prepare(), ...SUPPORTED_LOCALES.map(polyfills_1.polyfill)]).then(() => {
    http_1.createServer((req, res) => {
        const accept = accepts_1.default(req);
        const locale = accept.language(supportedLanguages) || 'en';
        req.locale = locale;
        const nonce = crypto_1.default.randomBytes(20).toString('hex');
        req.nonce = nonce;
        // TODO: This will blow up other next inline JS but next.js should prob fix this
        // res.setHeader('Content-Security-Policy', `script-src 'nonce-${nonce}'`);
        handle(req, res);
    }).listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
