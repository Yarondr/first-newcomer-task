import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    button: {
      primary: string
      selected: string
    }

  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    button?: {
      primary?: string
      selected?: string
    }
  }
}



export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#19376D',
    },
    secondary: {
      main: '#576CBC',
    },
  },
  typography: {
    fontFamily: `"Nunito", "Arial"`,
    fontWeightRegular: 700,
    fontWeightMedium: 700,
  },
  button: {
    primary: '#b3c2df',
    selected: '#ee8558'
  },
})

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
