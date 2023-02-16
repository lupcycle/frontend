import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './router/MainRouter'
import { ThemeProvider } from '@emotion/react'
import theme from './style/theme'

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainRouter/>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
