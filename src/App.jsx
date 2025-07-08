import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
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
