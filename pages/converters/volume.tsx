import Box from '@material-ui/core/Box'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { NextSeo } from 'next-seo'
import React from 'react'

import { Unit } from '../../src/unit'
import { withUnitConverter, WithUnitConverterComponentProps } from '../../src/withUnitConverter'
import { UnitConvertForm } from '../../src/UnitConverterForm'
import Layout from '../../src/Layout'

import SEO from '../../next-seo.config'

interface Props extends WithUnitConverterComponentProps { }

const units: Unit[] = [
  new Unit('m3', 'm3'),
  new Unit('litre', 'l'),
  new Unit('cc', 'cc'),
  new Unit('cuin', 'cuin'),
  new Unit('cuft', 'cuft'),
  new Unit('cuyd', 'cuyd'),
  new Unit('teaspoon', 'teaspoon'),
  new Unit('tablespoon', 'tablespoon')
]

const pageTitle = 'Volume converter'
const pageDescription = ''
const pageUrl = `${SEO.siteUrl}/converters/volume`

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

const VolumePage: React.FC<Props> = (props) => {
  const classes = useStyles()

  return (
    <Layout>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        openGraph={{
          url: pageUrl,
          title: pageTitle,
          description: pageDescription,
        }}
      />

      <Box textAlign="center">
        <Typography className={classes.title} component="h1" variant="h2">
          {pageTitle}
        </Typography>

        <UnitConvertForm {...props} />
      </Box>
    </Layout>
  )
}

export default withUnitConverter(VolumePage, units)
