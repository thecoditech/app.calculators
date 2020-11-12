import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React from 'react'

import { WithUnitConverterComponentProps } from './withUnitConverter'

interface Props extends WithUnitConverterComponentProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  }),
)

export const UnitConvertForm: React.FC<Props> = ({ unitFrom, unitTo, setValueFrom, valueFrom, valueTo }) => {
  const classes = useStyles()

  const _handleValueFromChange = (e: React.ChangeEvent<HTMLInputElement>) => setValueFrom(+e.target.value)

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField className={classes.textField} label={`${unitFrom.name} (${unitFrom.abbreviation})`} variant="outlined" value={valueFrom} onChange={_handleValueFromChange} />
          </Grid>

          <Grid item xs={6}>
            <TextField className={classes.textField} label={`${unitTo.name} (${unitFrom.abbreviation})`} variant="outlined" value={valueTo} disabled />
          </Grid>
        </Grid>
      </div>
    </form>
  )
}