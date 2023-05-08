import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "components/SharedLayout/SharedLayout.styled";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

function SharedLayout() {
  return (
    <LayoutWrapper>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </LayoutWrapper>
  );
}

export default SharedLayout;
