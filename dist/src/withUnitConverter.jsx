"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withUnitConverter = void 0;
const mathjs_1 = require("mathjs");
const react_1 = __importDefault(require("react"));
exports.withUnitConverter = (Component, units = []) => 
/**
 * Converter service class.
 */
class UnitConvert extends react_1.default.Component {
    constructor(props) {
        super(props);
        /**
         * Changed unit from event handler.
         *
         * @param {Unit} unit to convert
         */
        this.handleUnitFromChange = (unit) => {
            this.setState({
                unitFrom: unit
            }, () => this.handleChange());
        };
        /**
         * Changed value from event handler.
         *
         * @param {number} value to convert
         */
        this.handleValueFromChange = (value) => {
            this.setState({
                valueFrom: value
            }, () => this.handleChange());
        };
        /**
         * Changed unit to event handler.
         *
         * @param {Unit} unit target
         */
        this.handleUnitToChange = (unit) => {
            this.setState({
                unitTo: unit
            }, () => this.handleChange());
        };
        /**
         * Invert units from and units to.
         */
        this.invert = () => {
            const { unitFrom, unitTo, valueFrom, valueTo } = this.state;
            this.setState({
                unitFrom: unitTo,
                unitTo: unitFrom,
                valueFrom: valueTo,
                valueTo: valueFrom
            }, () => this.handleChange());
        };
        /**
         * Unit or value change handler.
         */
        this.handleChange = () => {
            const { unitFrom, unitTo, valueFrom } = this.state;
            const from = mathjs_1.unit(valueFrom, unitFrom.abbreviation);
            const to = from.toNumber(unitTo.abbreviation);
            this.setState({
                valueTo: to
            });
        };
        const unitFrom = units[0];
        const unitTo = units[1];
        const valueFrom = 0;
        const valueTo = this._convert(unitFrom, unitTo, valueFrom);
        this.state = {
            unitFrom,
            unitTo,
            valueFrom,
            valueTo
        };
    }
    /**
     * Convert with units and number attributes.
     *
     * @param {Unit} unitFrom
     * @param {Unit} unitTo
     * @param {number} valueFrom
     * @return {number}
     */
    _convert(unitFrom, unitTo, valueFrom) {
        const from = mathjs_1.unit(valueFrom, unitFrom.abbreviation);
        const to = from.toNumber(unitTo.abbreviation);
        return to;
    }
    render() {
        const { unitFrom, unitTo, valueFrom, valueTo } = this.state;
        return (<Component units={units} invert={this.invert} setUnitFrom={this.handleUnitFromChange} unitFrom={unitFrom} setUnitTo={this.handleUnitToChange} unitTo={unitTo} setValueFrom={this.handleValueFromChange} valueFrom={valueFrom} valueTo={valueTo}/>);
    }
};
//# sourceMappingURL=withUnitConverter.jsx.map