import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "components/AppBar/AppBar";
import Footer from "components/Footer/Footer";

import { Layout } from "components/Layout/Layout.styled";

function SharedLayout() {
  return (
    <Layout>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </Layout>
  );
}

export default SharedLayout;
