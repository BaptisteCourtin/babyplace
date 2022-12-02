import { Route, Routes } from "react-router-dom";

import Appli from "@pages/AppliTuto";
import AppliHome from "@pages/AppliHome";
import AppliSearch from "@pages/AppliSearch";

import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appli" element={<Appli />} />
        <Route path="/appli/home" element={<AppliHome />} />
        <Route path="/appli/search" element={<AppliSearch />} />
      </Routes>
    </div>
  );
}

export default App;
