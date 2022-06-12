import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Listing from "../../pages/Listing";
import Creation from "../../pages/Creation";
import Edition from "../../pages/Edition";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Listing />} />
      <Route path="/listagem" element={<Listing />} />
      <Route path="/criacao" element={<Creation />} />
      <Route path="/edicao" element={<Edition />} />
    </Routes>
  );
}

export default MainRoutes;