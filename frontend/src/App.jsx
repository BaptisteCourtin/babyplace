import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import UserEmailContext from "@components/context/UserEmailContext";
import FamilleContext from "@components/context/FamilleContext";

// page de base
import Home from "@pages/Home";
import Features from "@pages/Features";
import Contact from "@pages/Contact";
import Faq from "@pages/Faq";

// log-in formulaire - dashboard - admin
import Login from "@components/login/Login";
import Register from "@components/register/Register";

// dashboard
import Dashboard from "@components/dashboard/Dashboard";
import Synthesis from "@components/login/Synthesis";

// appli
import Appli from "@components/appli/pagesTutoAppli/AppliTuto";
import AppliMenu from "@components/appli/menu/AppliMenu";
import AppliSearch from "@components/appli/recherche/AppliSearch";
import AppliCardCreche from "@components/appli/recherche/cardStructure/AppliCardCreche";
import AppliReservation from "@components/appli/reservation/AppliReservation";
import AppliUser from "@components/appli/user/AppliUser";
import AppliUserCompletion from "@components/appli/user/formulaires/AppliUserCompletion";
import AppliNotif from "@components/appli/notif/AppliNotif";
import AppliMessage from "@components/appli/messagerie/AppliMessage";
import AppliChat from "@components/appli/messagerie/AppliChat";

// formulaire
import FormStructure from "@pages/FormStructure";

// admin
import Admin from "@pages/Admin";
import WaitAdmin from "@pages/WaitAdmin";
import MessageAdmin from "@components/dashboard/admin/MessageAdmin";
import Signalement from "@components/dashboard/admin/Signalement";

function App() {
  // formulaire
  const [userEmail, setUserEmail] = useState("test@test.com");
  const [structureId, setStructureId] = useState(666);

  // appli
  const [familleId, setFamilleId] = useState("0");

  useEffect(() => {
    setFamilleId(sessionStorage.getItem("BabyPlacefamilleId"));
    setUserEmail(sessionStorage.getItem("structureEmail"));
    setStructureId(sessionStorage.getItem("structureId"));
  }, []);

  return (
    <div className="app">
      <UserEmailContext.Provider
        value={{ userEmail, setUserEmail, structureId, setStructureId }}
      >
        <FamilleContext.Provider value={{ familleId, setFamilleId }}>
          <Routes>
            {/* page de base */}
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />

            {/* log-in formulaire - dashboard - admin */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* dashboard */}
            <Route path="/login-params" element={<Synthesis />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* appli */}
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

            {/* formulaire */}
            <Route
              path="/structure/inscription-form"
              element={<FormStructure />}
            />

            {/* admin */}
            <Route path="/admin/profils" element={<Admin />} />
            <Route path="/pending" element={<WaitAdmin />} />
            <Route path="/admin/signalements" element={<Signalement />} />
            <Route path="/admin/messages" element={<MessageAdmin />} />
          </Routes>
        </FamilleContext.Provider>
      </UserEmailContext.Provider>
    </div>
  );
}

export default App;
