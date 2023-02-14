import { useState } from "react";
import DashAgenda from "@components/dashboard/agenda/DashAgenda";
import DashHours from "@components/dashboard/hours/DashHours";
import DashParams from "@components/dashboard/parameters/DashParams";
import DashReservations from "@components/dashboard/reservations/DashReservations";
import Messages from "@components/messages/Messages";

const usePageToggle = (data, userType, getData) => {
  const [toggle, setToggle] = useState(0);

  const pageShown = () => {
    if (toggle === 1) {
      return <DashReservations {...data} />;
    } else if (toggle === 2) {
      return (
        <DashAgenda structureId={data.structureId} maxPlaces={data.maxPlaces} />
      );
    } else if (toggle === 3) {
      return <DashHours userType={userType} structureId={data.structureId} />;
    } else if (toggle === 4) {
      return <Messages {...data} />;
    } else if (toggle === 5) {
      return <DashParams {...data} userType={userType} getData={getData} />;
    }
  };

  return { pageShown, toggle, setToggle };
};

export default usePageToggle;
