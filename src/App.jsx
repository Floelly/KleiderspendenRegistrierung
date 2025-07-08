import Header from './components/layout/Header'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'
import { ThemeProvider } from 'styled-components'
import { Theme as theme } from './styles/Theme'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  )
}

export default App
