import Login from "@components/login/Login";
import Synthesis from "@components/login/Synthesis";
import Register from "@components/register/Register";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import UserEmailContext from "@components/context/UserEmailContext";
import FamilleContext from "@components/context/FamilleContext";

import Appli from "@pages/appli/AppliTuto";
import AppliMenu from "@pages/appli/AppliMenu";
import AppliSearch from "@pages/appli/AppliSearch";
import AppliCardCreche from "@pages/appli/AppliCardCreche";
import AppliReservation from "@pages/appli/AppliReservation";
import AppliUser from "@pages/appli/AppliUser";
import AppliUserCompletion from "@pages/appli/AppliUserCompletion";
import AppliNotif from "@pages/appli/AppliNotif";
import AppliMessage from "@pages/appli/AppliMessage";

import FormStructure from "@pages/FormStructure";

import Dashboard from "@components/dashboard/Dashboard";
import Features from "@components/features/Features";
import Contact from "@components/features/Contact";
import Faq from "@components/features/Faq";
import Admin from "@pages/Admin";
import Stats from "@pages/Stats";
import Home from "@pages/Home";
import AppliChat from "@pages/appli/AppliChat";

function App() {
  const [userEmail, setUserEmail] = useState("paulette07@laposte.net");

  const [familleId, setFamilleId] = useState(0);
  useEffect(() => {
    setFamilleId(sessionStorage.getItem("BabyPlacefamilleId"));
  }, []);

  return (
    <div className="app">
      <UserEmailContext.Provider value={{ userEmail, setUserEmail }}>
        <FamilleContext.Provider value={{ familleId, setFamilleId }}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="/stats" element={<Stats />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login-params" element={<Synthesis />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />

            <Route path="/appli" element={<Appli />} />
            <Route path="/appli/menu" element={<AppliMenu />} />
            <Route path="/appli/search" element={<AppliSearch />} />
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
            <Route path="/appli/message/room" element={<AppliChat />} />

            <Route
              path="/structure/inscription-form"
              element={<FormStructure />}
            />
          </Routes>
        </FamilleContext.Provider>
      </UserEmailContext.Provider>
    </div>
  );
}

export default App;
