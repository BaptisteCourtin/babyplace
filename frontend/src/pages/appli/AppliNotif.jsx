import React, { useState } from "react";

import NotifBase from "@components/appli/notif/NotifBase";
import NotifNote from "@components/appli/notif/NotifNote";
import NotifRejetee from "@components/appli/notif/NotifRejetee";
import NotifAcceptee from "@components/appli/notif/NotifAcceptee";
import NotifPaye from "@components/appli/notif/NotifPaye";

function AppliNotif() {
  const [compo, setCompo] = useState(0);

  const choixComposant = () => {
    if (compo === 1) {
      return <NotifNote setCompo={setCompo} />;
    }
    if (compo === 2) {
      return <NotifRejetee setCompo={setCompo} />;
    }
    if (compo === 3) {
      return <NotifAcceptee setCompo={setCompo} />;
    }
    if (compo === 4) {
      return <NotifPaye setCompo={setCompo} />;
    }
    return <NotifBase setCompo={setCompo} />;
  };

  return <div className="appli-notif">{choixComposant()}</div>;
}

export default AppliNotif;
