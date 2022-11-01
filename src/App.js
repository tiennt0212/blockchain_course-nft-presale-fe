import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Interested, ManageYourPresale, OpenPresale } from "./containers";
import { PrimaryLayout } from "./layouts/Layout";
import { ROUTES } from "./utils/constant";
// import "./styles/resetCSS.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <PrimaryLayout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.INTERESTED} element={<Interested />} />
          <Route
            path={ROUTES.MANAGE_YOUR_PRESALE}
            element={<ManageYourPresale />}
          />
          <Route path={ROUTES.OPEN_PRESALE} element={<OpenPresale />} />
        </Routes>
      </PrimaryLayout>
    </BrowserRouter>
  );
}

export default App;
