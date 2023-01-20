import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import DashNavbar from "./nav/DashNavbar";
import DashMain from "./main/DashMain";
import DashFooter from "./main/DashFooter";
import DashNotif from "./main/DashNotif";
import DashTopbar from "./main/DashTopbar";
import { usePageToggle } from "./main/Hooks/usePageToggle";
import { useDeleteData } from "./main/Hooks/useDeleteData";
import { useGetAllData } from "./main/Hooks/useGetData";

function Dashboard() {
  const { state } = useLocation();
  const { token } = state;

  const [openNav, setOpenNav] = useState(true);
  const [toggleNotif, setToggleNotif] = useState(false);

  const { getData, data, userType, notif, getNotifications } = useGetAllData(token)
  const { pageShown, toggle, setToggle } = usePageToggle(data, userType, getData)
  const { deleteNotification, deleteDates } = useDeleteData(getNotifications)

  useEffect(() => {
    getData();
    deleteDates();
    getNotifications();
  }, []);

  return (
    <div className={openNav ? "dashboard" : "dashboardClosed"}>
      <DashNavbar {...data} toggle={toggle} setToggle={setToggle} />
      <DashTopbar
        openNav={openNav}
        setOpenNav={setOpenNav}
        toggleNotif={toggleNotif}
        setToggleNotif={setToggleNotif}
        setToggle={setToggle}
        data={data}
      />
      <DashMain
        pageShown={pageShown}
        data={data}
        toggle={toggle}
        userType={userType}
      />
      <DashFooter />
      <DashNotif
        notif={notif}
        toggleNotif={toggleNotif}
        setToggleNotif={setToggleNotif}
        deleteNotification={deleteNotification}
      />
    </div >
  );
}

export default Dashboard;
