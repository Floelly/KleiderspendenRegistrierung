import { ThemeProvider } from "styled-components";
import { Theme as theme } from "./styles/Theme";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import GlobalStyle from "src/styles/GlobalStyle";
import Layout from "src/layout/PageLayout";
import Home from "src/layout/Home";
import Impressum from "pages/Impressum";
import Datenschutz from "pages/Datenschutz";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes element={<Layout />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
