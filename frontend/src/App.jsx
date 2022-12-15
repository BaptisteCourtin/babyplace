import Login from "@components/login/Login";
import Synthesis from "@components/login/Synthesis";
import Register from "@components/register/Register";
import { Route, Routes } from "react-router-dom";

import Appli from "@pages/appli/AppliTuto";
import AppliMenu from "@pages/appli/AppliMenu";
import AppliSearch from "@pages/appli/AppliSearch";
import AppliSearchFiltres from "@pages/appli/AppliFiltres";
import AppliCardCreche from "@pages/appli/AppliCardCreche";
import AppliReservation from "@pages/appli/AppliReservation";
import AppliUser from "@pages/appli/AppliUser";
import AppliUserCompletion from "@pages/appli/AppliUserCompletion";
import AppliNotif from "@pages/appli/AppliNotif";
import AppliMessage from "@pages/appli/AppliMessage";

import FormStructure from "@pages/FormStructure";

import Dashboard from "@components/dashboard/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-params" element={<Synthesis />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/appli" element={<Appli />} />
        <Route path="/appli/menu" element={<AppliMenu />} />
        <Route path="/appli/search" element={<AppliSearch />} />
        <Route path="/appli/search/filtres" element={<AppliSearchFiltres />} />
        <Route path="/appli/search/card" element={<AppliCardCreche />} />
        <Route
          path="/appli/search/reservation"
          element={<AppliReservation />}
        />
        <Route path="/appli/user" element={<AppliUser />} />
        <Route
          path="/appli/user/completion"
          element={<AppliUserCompletion />}
        />
        <Route path="/appli/notif" element={<AppliNotif />} />
        <Route path="/appli/message" element={<AppliMessage />} />

        <Route path="/structure/inscription-form" element={<FormStructure />} />
      </Routes>
    </div>
  );
}

export default App;
