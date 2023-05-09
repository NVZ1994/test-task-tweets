import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Home from "pages/HomePage/HomePage";

import { GlobalStyle } from "components/GlobalStyle";

const TweetsPage = lazy(() => import("pages/TweetsPage/TweetsPage"));

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/tweets-page" element={<TweetsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
