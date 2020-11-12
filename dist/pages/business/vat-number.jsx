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
const vat_calculator_1 = require("@infinitetoolbox/vat-calculator");
const Box_1 = __importDefault(require("@material-ui/core/Box"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const Card_1 = __importDefault(require("@material-ui/core/Card"));
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const styles_1 = require("@material-ui/core/styles");
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const next_seo_1 = require("next-seo");
const react_1 = __importStar(require("react"));
const Layout_1 = __importDefault(require("../../src/Layout"));
const next_seo_config_1 = __importDefault(require("../../next-seo.config"));
const computeVatNumber = (siretOrSiren) => vat_calculator_1.frenchVatCalculator(siretOrSiren);
const pageTitle = 'French VAT Number Calculator';
const pageDescription = '';
const pageUrl = `${next_seo_config_1.default.siteUrl}/business/vat-number`;
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
function VATNumberPage() {
    const classes = useStyles();
    const [siretOrSiren, setSiretOrSiren] = react_1.useState('');
    const [vatNumber, setVATNumber] = react_1.useState(null);
    const _handleSiretOrSirenChange = (e) => {
        setSiretOrSiren(e.target.value.trim().replace(/\s/g, ''));
    };
    const _handleComputeClick = () => {
        setVATNumber(computeVatNumber(+siretOrSiren));
    };
    return (<Layout_1.default>
      <next_seo_1.NextSeo title={pageTitle} description={pageDescription} canonical={pageUrl} openGraph={{
        url: pageUrl,
        title: pageTitle,
        description: pageDescription,
    }}/>

      <Box_1.default textAlign="center">
        <Typography_1.default className={classes.title} component="h1" variant="h2">
          French VAT Number Calculator
        </Typography_1.default>

        <form className={classes.form} noValidate autoComplete="off">
          <div className={classes.root}>
            <Grid_1.default container spacing={3}>
              <Grid_1.default item xs={12}>
                {vatNumber && (<Card_1.default>
                    <Typography_1.default variant="h4">
                      VAT
                  </Typography_1.default>

                    <Typography_1.default variant="subtitle1">
                      {vatNumber}
                    </Typography_1.default>
                  </Card_1.default>)}
              </Grid_1.default>

              <Grid_1.default item xs={12}>
                <TextField_1.default className={classes.textField} label="French SIRET or SIREN" variant="outlined" value={siretOrSiren} onChange={_handleSiretOrSirenChange}/>
              </Grid_1.default>

              <Grid_1.default item xs={12}>
                <Button_1.default variant="contained" color="primary" size="large" fullWidth={true} onClick={_handleComputeClick}>Compute</Button_1.default>
              </Grid_1.default>
            </Grid_1.default>
          </div>
        </form>
      </Box_1.default>
    </Layout_1.default>);
}
exports.default = VATNumberPage;
//# sourceMappingURL=vat-number.jsx.map