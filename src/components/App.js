import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "components/Layout/Layout";

import { GlobalStyle } from "components/GlobalStyle";

const Home = lazy(() => import("pages/HomePage/HomePage"));
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
