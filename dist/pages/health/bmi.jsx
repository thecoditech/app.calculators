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
const bmi_calculator_1 = __importDefault(require("@infinitetoolbox/bmi-calculator"));
const Box_1 = __importDefault(require("@material-ui/core/Box"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const Card_1 = __importDefault(require("@material-ui/core/Card"));
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const styles_1 = require("@material-ui/core/styles");
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const react_1 = __importStar(require("react"));
const head_1 = __importDefault(require("next/head"));
const Layout_1 = __importDefault(require("../../src/Layout"));
const computeBmi = (mass, height) => bmi_calculator_1.default(mass, height / 100);
const defaultMass = 60;
const defaultHeight = 180;
const defaultBmi = computeBmi(defaultMass, defaultHeight);
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
function BmiPage() {
    const classes = useStyles();
    const [mass, setMass] = react_1.useState(defaultMass);
    const [height, setHeight] = react_1.useState(defaultHeight);
    const [bmi, setBMI] = react_1.useState(defaultBmi);
    const _handleComputeClick = () => {
        setBMI(computeBmi(mass, height));
    };
    return (<Layout_1.default>
      <head_1.default>
        <title>BMI Calculator</title>
      </head_1.default>

      <Box_1.default textAlign="center">
        <Typography_1.default className={classes.title} component="h1" variant="h2">
          BMI Calculator
        </Typography_1.default>

        <form className={classes.form} noValidate autoComplete="off">
          <div className={classes.root}>
            <Grid_1.default container spacing={3}>
              <Grid_1.default item xs={12}>
                <Card_1.default>
                  <Typography_1.default variant="h4">
                    BMI
                  </Typography_1.default>

                  <Typography_1.default variant="subtitle1">
                    {bmi.toPrecision(4)}
                  </Typography_1.default>
                  <Typography_1.default color="textSecondary">
                    kg/m2
                  </Typography_1.default>
                </Card_1.default>
              </Grid_1.default>

              <Grid_1.default item xs={6}>
                <TextField_1.default className={classes.textField} label="Mass (in kg)" variant="outlined" value={mass} onChange={e => setMass(+e.target.value)}/>
              </Grid_1.default>
              <Grid_1.default item xs={6}>
                <TextField_1.default className={classes.textField} label="Height (in cm)" variant="outlined" value={height} onChange={e => setHeight(+e.target.value)}/>
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
exports.default = BmiPage;
//# sourceMappingURL=bmi.jsx.map