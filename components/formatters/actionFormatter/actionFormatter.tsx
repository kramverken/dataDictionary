import {
  Button,
  PaletteColorOptions,
  Stack,
  ThemeProvider,
  Tooltip,
  createTheme
} from '@mui/material'
import React, { useState } from 'react'
import { IDictionaryMappings, IGridActions } from '../../../models/dataDictionary.types'

declare module '@mui/material/styles' {
  interface Palette {
    Description: PaletteColorOptions;
    Mandatory: PaletteColorOptions;
    Unique: PaletteColorOptions;
    Primary: PaletteColorOptions;
    PII: PaletteColorOptions;
    Lookup: PaletteColorOptions;
  }
  interface PaletteOptions {
    Description: PaletteColorOptions;
    Mandatory: PaletteColorOptions;
    Unique: PaletteColorOptions;
    Primary: PaletteColorOptions;
    PII: PaletteColorOptions;
    Lookup: PaletteColorOptions;
  }
}

const { palette } = createTheme()
const theme = createTheme({
  palette: {
    Description: palette.augmentColor({
      color: {
        main: '#9DB5B7',
        contrastText: '#fff'
      }
    }),
    Mandatory: palette.augmentColor({
      color: {
        main: '#A0836B'
      }
    }),
    Unique: palette.augmentColor({
      color: {
        main: '#CCC48A',
        contrastText: '#fff'
      }
    }),
    Primary: palette.augmentColor({
      color: {
        main: '#6F8780'
      }
    }),
    PII: palette.augmentColor({
      color: {
        main: '#B69CC8',
        contrastText: '#fff'
      }
    }),
    Lookup: palette.augmentColor({
      color: {
        main: '#9A5E5E'
      }
    })
  }
})

const buttons: IGridActions[] = [
  { label: 'D', color: 'Description' },
  { label: 'M', color: 'Mandatory' },
  { label: 'U', color: 'Unique' },
  { label: 'P', color: 'Primary' },
  { label: 'PII', color: 'PII' },
  { label: 'L', color: 'Lookup' }
]
export function ActionFormatter ({ skipDescription, data }: any) {
  const [buttonStates, setButtonStates] = useState(
    [false, data?.Mandatory, data?.Unique, data?.Primary, data?.PII, data?.Lookup]
  )
  const handleButtonClick = (index: number) => {
    const newButtonStates = [...buttonStates]
    newButtonStates[index] = !newButtonStates[index]
    setButtonStates(newButtonStates)
  }
  return (
    <React.Fragment>
      <Stack direction="row" spacing={1} margin={0}>
        <ThemeProvider theme={theme}>
          {buttons.map((button, index) => {
            if (skipDescription && index === 0) {
              return null
            }
            return (
              <Tooltip title={button.color} key={button.color}>
                <Button
                  onClick={() => {
                    handleButtonClick(index)
                  }}
                  key={button.color}
                  color={button.color}
                  variant={
                    index === 0
                      ? 'outlined'
                      : buttonStates[index]
                        ? 'contained'
                        : 'outlined'
                  }
                  size="small"
                  sx={{
                    fontSize: '12px',
                    height: '18px',
                    minWidth: '0px'
                  }}
                >
                  {button.label}
                </Button>
              </Tooltip>
            )
          })}
        </ThemeProvider>
      </Stack>
    </React.Fragment>
  )
}
