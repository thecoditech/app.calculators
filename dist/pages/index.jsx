"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = __importDefault(require("next/head"));
const react_1 = __importDefault(require("react"));
const Layout_1 = __importDefault(require("../src/Layout"));
function Index() {
    return (<>
      <head_1.default>
        <title>Home</title>
      </head_1.default>

      <Layout_1.default>
        Home
      </Layout_1.default>
    </>);
}
exports.default = Index;
//# sourceMappingURL=index.jsx.map