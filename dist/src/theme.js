"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
const colors_1 = require("@material-ui/core/colors");
// Create a theme instance.
const theme = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: colors_1.red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});
exports.default = theme;
