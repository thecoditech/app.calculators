import { unit as mathUnit } from 'mathjs'
import React from 'react'

import { Unit } from './unit'

interface Props { }
interface State {
  unitFrom: Unit,
  unitTo: Unit,
  valueFrom: number,
  valueTo: number
}

export interface WithUnitConverterComponentProps {
  units: Unit[],
  invert: Function,
  setUnitFrom: UnitSetter,
  unitFrom: Unit,
  setUnitTo: UnitSetter,
  unitTo: Unit,
  setValueFrom: ValueSetter,
  valueFrom: number,
  valueTo: number
}

export type ValueSetter = (value: number) => void
export type UnitSetter = (unit: Unit) => void

export const withUnitConverter = <P extends object>(Component: React.ComponentType<WithUnitConverterComponentProps>, units: Unit[] = []) =>
  /**
   * Converter service class.
   */
  class UnitConvert extends React.Component<P & Props, State> {
    constructor(props: P & Props) {
      super(props)

      const unitFrom = units[0]
      const unitTo = units[1]
      const valueFrom = 0
      const valueTo = this._convert(unitFrom, unitTo, valueFrom)

      this.state = {
        unitFrom,
        unitTo,
        valueFrom,
        valueTo
      }
    }

    /**
     * Convert with units and number attributes.
     *
     * @param {Unit} unitFrom
     * @param {Unit} unitTo
     * @param {number} valueFrom
     * @return {number}
     */
    private _convert(unitFrom: Unit, unitTo: Unit, valueFrom: number): number {
      const from = mathUnit(valueFrom, unitFrom.abbreviation)
      const to = from.toNumber(unitTo.abbreviation)

      return to
    }

    /**
     * Changed unit from event handler.
     *
     * @param {Unit} unit to convert
     */
    protected handleUnitFromChange = (unit: Unit) => {
      this.setState({
        unitFrom: unit
      }, () => this.handleChange())
    }

    /**
     * Changed value from event handler.
     *
     * @param {number} value to convert
     */
    protected handleValueFromChange = (value: number) => {
      this.setState({
        valueFrom: value
      }, () => this.handleChange())
    }

    /**
     * Changed unit to event handler.
     *
     * @param {Unit} unit target
     */
    protected handleUnitToChange = (unit: Unit) => {
      this.setState({
        unitTo: unit
      }, () => this.handleChange())
    }

    /**
     * Invert units from and units to.
     */
    protected invert = () => {
      const { unitFrom, unitTo, valueFrom, valueTo } = this.state
      this.setState({
        unitFrom: unitTo,
        unitTo: unitFrom,
        valueFrom: valueTo,
        valueTo: valueFrom
      }, () => this.handleChange())
    }

    /**
     * Unit or value change handler.
     */
    protected handleChange = () => {
      const { unitFrom, unitTo, valueFrom } = this.state
      const from = mathUnit(valueFrom, unitFrom.abbreviation)
      const to = from.toNumber(unitTo.abbreviation)

      this.setState({
        valueTo: to
      })
    }

    render() {
      const { unitFrom, unitTo, valueFrom, valueTo } = this.state

      return (
        <Component
          units={units}
          invert={this.invert}
          setUnitFrom={this.handleUnitFromChange}
          unitFrom={unitFrom}
          setUnitTo={this.handleUnitToChange}
          unitTo={unitTo}
          setValueFrom={this.handleValueFromChange}
          valueFrom={valueFrom}
          valueTo={valueTo}
        />
      )
    }
  }
