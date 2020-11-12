"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Box_1 = __importDefault(require("@material-ui/core/Box"));
const styles_1 = require("@material-ui/core/styles");
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const next_seo_1 = require("next-seo");
const react_1 = __importDefault(require("react"));
const unit_1 = require("../../src/unit");
const withUnitConverter_1 = require("../../src/withUnitConverter");
const UnitConverterForm_1 = require("../../src/UnitConverterForm");
const Layout_1 = __importDefault(require("../../src/Layout"));
const next_seo_config_1 = __importDefault(require("../../next-seo.config"));
// const units: Unit[] = [
//   new Unit('ampere', 'A'),
//   new Unit('coulomb', 'C'),
//   new Unit('watt', 'W'),
//   new Unit('volt', 'V'),
//   new Unit('ohm', 'ohm'),
//   new Unit('farad', 'F'),
//   new Unit('weber', 'Wb'),
//   new Unit('tesla', 'T'),
//   new Unit('henry', 'H'),
//   new Unit('siemens', 'S'),
//   new Unit('electronvolt', 'eV')
// ]
const units = [new unit_1.Unit('bit', 'b'), new unit_1.Unit('byte', 'B')];
const pageTitle = 'Electricity Magnetism Units converter';
const pageDescription = '';
const pageUrl = `${next_seo_config_1.default.siteUrl}/converters/electricity-magnetism`;
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        margin: theme.spacing(4)
    },
    form: {
        padding: theme.spacing(2)
    },
    textField: {}
}));
const ElectricityMagnetismPage = (props) => {
    const classes = useStyles();
    return (<Layout_1.default>
      <next_seo_1.NextSeo title={pageTitle} description={pageDescription} canonical={pageUrl} openGraph={{
        url: pageUrl,
        title: pageTitle,
        description: pageDescription,
    }}/>

      <Box_1.default textAlign="center">
        <Typography_1.default className={classes.title} component="h1" variant="h2">
          {pageTitle}
        </Typography_1.default>

        <UnitConverterForm_1.UnitConvertForm {...props}/>
      </Box_1.default>
    </Layout_1.default>);
};
exports.default = withUnitConverter_1.withUnitConverter(ElectricityMagnetismPage, units);
//# sourceMappingURL=electricity-magnetism.jsx.map