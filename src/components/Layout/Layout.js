import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "components/Layout/Layout.styled";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

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
