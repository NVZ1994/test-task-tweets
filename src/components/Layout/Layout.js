import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Home from "pages/HomePage/HomePage";
import Header from "components/AppBar/AppBar";
import Footer from "components/Footer/Footer";

import { Layout } from "components/Layout/Layout.styled";

function SharedLayout() {
  return (
    <Layout>
      <Header />
      <Suspense fallback={<Home />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Layout>
  );
}

export default SharedLayout;
