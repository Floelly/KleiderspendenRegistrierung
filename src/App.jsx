import Home from './components/layout/Home'
import { ThemeProvider } from 'styled-components'
import { Theme as theme } from './styles/Theme'
import GlobalStyle from './styles/GlobalStyle'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Impressum from './components/layout/Impressum'
import Datenschutz from './components/layout/Datenschutz'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <BrowserRouter>
          <Routes element={<Layout/>}>
            <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/impressum' element={<Impressum/>}/>
              <Route path='/datenschutz' element={<Datenschutz/>}/>
              <Route path='*' element={<Home/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
