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
Object.defineProperty(exports, "__esModule", { value: true });
exports.polyfill = void 0;
const should_polyfill_1 = require("@formatjs/intl-getcanonicallocales/should-polyfill");
const should_polyfill_2 = require("@formatjs/intl-pluralrules/should-polyfill");
const should_polyfill_3 = require("@formatjs/intl-numberformat/should-polyfill");
const should_polyfill_4 = require("@formatjs/intl-datetimeformat/should-polyfill");
const should_polyfill_5 = require("@formatjs/intl-relativetimeformat/should-polyfill");
/**
 * Dynamically polyfill Intl API & its locale data
 * @param locale locale to polyfill
 */
async function polyfill(locale = '') {
    const dataPolyfills = [];
    // Polyfill Intl.getCanonicalLocales if necessary
    if (should_polyfill_1.shouldPolyfill()) {
        await Promise.resolve().then(() => __importStar(require(
        /* webpackChunkName: "intl-getcanonicallocales" */ '@formatjs/intl-getcanonicallocales/polyfill')));
    }
    // Polyfill Intl.PluralRules if necessary
    if (should_polyfill_2.shouldPolyfill()) {
        await Promise.resolve().then(() => __importStar(require(
        /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/polyfill')));
    }
    if (Intl.PluralRules.polyfilled) {
        const lang = locale.split('-')[0];
        switch (lang) {
            default:
                dataPolyfills.push(Promise.resolve().then(() => __importStar(require(
                /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/en'))));
                break;
            case 'fr':
                dataPolyfills.push(Promise.resolve().then(() => __importStar(require(
                /* webpackChunkName: "intl-pluralrules" */ '@formatjs/intl-pluralrules/locale-data/fr'))));
                break;
        }
    }
    // Polyfill Intl.NumberFormat if necessary
    if (should_polyfill_3.shouldPolyfill()) {
        await Promise.resolve().then(() => __importStar(require(
        /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/polyfill')));
    }
    if (Intl.NumberFormat.polyfilled) {
        switch (locale) {
            default:
                dataPolyfills.push(Promise.resolve().then(() => __importStar(require(
                /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/en'))));
                break;
            case 'fr':
                dataPolyfills.push(Promise.resolve().then(() => __importStar(require(
                /* webpackChunkName: "intl-numberformat" */ '@formatjs/intl-numberformat/locale-data/fr'))));
                break;
        }
    }
    // Polyfill Intl.DateTimeFormat if necessary
    if (should_polyfill_4.shouldPolyfill()) {
        await Promise.resolve().then(() => __importStar(require(
        /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/polyfill')));
    }
    if (Intl.DateTimeFormat.polyfilled) {
        dataPolyfills.push(Promise.resolve().then(() => __importStar(require('@formatjs/intl-datetimeformat/add-all-tz'))));
        switch (locale) {
            default:
                dataPolyfills.push(Promise.resolve().then(() => __importStar(require(
                /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/en'))));
                break;
            case 'fr':
                dataPolyfills.push(Promise.resolve().then(() => __importStar(require(
                /* webpackChunkName: "intl-datetimeformat" */ '@formatjs/intl-datetimeformat/locale-data/fr'))));
                break;
        }
    }
    // Polyfill Intl.RelativeTimeFormat if necessary
    if (should_polyfill_5.shouldPolyfill()) {
        await Promise.resolve().then(() => __importStar(require(
        /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/polyfill')));
    }
    if (Intl.RelativeTimeFormat.polyfilled) {
        switch (locale) {
            default:
                dataPolyfills.push(Promise.resolve().then(() => __importStar(require(
                /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/en'))));
                break;
            case 'fr':
                dataPolyfills.push(Promise.resolve().then(() => __importStar(require(
                /* webpackChunkName: "intl-relativetimeformat" */ '@formatjs/intl-relativetimeformat/locale-data/fr'))));
                break;
        }
    }
    await Promise.all(dataPolyfills);
}
exports.polyfill = polyfill;
