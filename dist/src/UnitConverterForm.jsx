"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitConvertForm = void 0;
const Grid_1 = __importDefault(require("@material-ui/core/Grid"));
const styles_1 = require("@material-ui/core/styles");
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const react_1 = __importDefault(require("react"));
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
exports.UnitConvertForm = ({ unitFrom, unitTo, setValueFrom, valueFrom, valueTo }) => {
    const classes = useStyles();
    const _handleValueFromChange = (e) => setValueFrom(+e.target.value);
    return (<form className={classes.form} noValidate autoComplete="off">
      <div className={classes.root}>
        <Grid_1.default container spacing={3}>
          <Grid_1.default item xs={6}>
            <TextField_1.default className={classes.textField} label={`${unitFrom.name} (${unitFrom.abbreviation})`} variant="outlined" value={valueFrom} onChange={_handleValueFromChange}/>
          </Grid_1.default>

          <Grid_1.default item xs={6}>
            <TextField_1.default className={classes.textField} label={`${unitTo.name} (${unitFrom.abbreviation})`} variant="outlined" value={valueTo} disabled/>
          </Grid_1.default>
        </Grid_1.default>
      </div>
    </form>);
};
//# sourceMappingURL=UnitConverterForm.jsx.map