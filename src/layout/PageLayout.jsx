import { Outlet } from "react-router-dom";

import Header from "src/layout/Header";
import Footer from "src/layout/Footer";

function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageLayout;
