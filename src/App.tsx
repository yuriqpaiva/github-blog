import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Routes } from './Routes'
import { ScreenSizeHandler } from './components/ScreenSizeHandler'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ScreenSizeHandler />
      <Routes />
    </ThemeProvider>
  )
}
