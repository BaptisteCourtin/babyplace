import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import DashNavbar from "./nav/DashNavbar";
import DashMain from "./main/DashMain";
import DashFooter from "./main/DashFooter";
import DashNotif from "./main/DashNotif";
import DashTopbar from "./main/DashTopbar";
import { usePageToggle } from "./main/Hooks/usePageToggle";
import { useDeleteData } from "./main/Hooks/useDeleteData";
import { useGetAllData } from "./main/Hooks/useGetData";
import { useGetHours } from "./hours/Hooks/useGetHours";
import { useGetReservations } from "./reservations/Hooks/useGetReservations";
import { useGetFavorites } from "./main/Hooks/useGetFavorites";

function Dashboard() {
  const { state } = useLocation();
  const { token } = state;
  let id = window.localStorage.getItem("id")

  const [openNav, setOpenNav] = useState(true);
  const [toggleNotif, setToggleNotif] = useState(false);

  const { getData, data, userType, notif, getNotifications } =
    useGetAllData(token);
  const { fav, getFavorites } = useGetFavorites(id)
  const { horaires, getHoraires } = useGetHours(id, userType);
  const { reser, getReser, approvedReser, getApprovedReser } = useGetReservations(id)
  const { pageShown, toggle, setToggle } = usePageToggle(
    data,
    userType,
    getData
  );
  const { deleteNotification, deleteDates } = useDeleteData(getNotifications);

  useEffect(() => {
    getData()
    getReser()
    getApprovedReser()
    getHoraires()
    getFavorites()
    getNotifications()
    deleteDates()
  }, [toggle])

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
      {pageShown()}
      {toggle === 0 && (
        <DashMain
          data={data}
          fav={fav}
          horaires={horaires}
          reser={reser}
          approvedReser={approvedReser}
        />
      )}
      <DashFooter />
      <DashNotif
        notif={notif}
        toggleNotif={toggleNotif}
        setToggleNotif={setToggleNotif}
        deleteNotification={deleteNotification}
      />
    </div>
  );
}

export default Dashboard;
