import Login from "@components/login/Login";
import Synthesis from "@components/login/Synthesis";
import Register from "@components/register/Register";
import { Route, Routes } from "react-router-dom";

import Appli from "@pages/appli/AppliTuto";
import AppliHome from "@pages/appli/AppliHome";

import AppliMenu from "@pages/appli/AppliMenu";
import AppliSearch from "@pages/appli/AppliSearch";
import AppliSearchFiltres from "@pages/appli/AppliFiltres";
import AppliCardCreche from "@pages/appli/AppliCardCreche";
import AppliUser from "@pages/appli/AppliUser";
import AppliNotif from "@pages/appli/AppliNotif";
import AppliMessage from "@pages/appli/AppliMessage";

import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* APPLI PARENT */}
        <Route path="/appli" element={<Appli />} />
        <Route path="/appli/home" element={<AppliHome />} />

        <Route path="/appli/menu" element={<AppliMenu />} />
        <Route path="/appli/search" element={<AppliSearch />} />
        <Route path="/appli/search/filtres" element={<AppliSearchFiltres />} />
        <Route path="/appli/search/card" element={<AppliCardCreche />} />
        <Route path="/appli/user" element={<AppliUser />} />
        <Route path="/appli/notif" element={<AppliNotif />} />
        <Route path="/appli/message" element={<AppliMessage />} />
      </Routes>
    </div>
  );
}

export default App;
