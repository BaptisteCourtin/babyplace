import { useState } from "react";

export const useFormatDay = () => {
  let curDate = new Date();
  curDate = `${curDate.getFullYear()}-${
    curDate.getMonth() + 1
  }-${curDate.getDate()}`;

  const [clickedDay, setClickedDay] = useState(new Date());
  const date = `${clickedDay.getFullYear()}-${
    clickedDay.getMonth() + 1
  }-${clickedDay.getDate()}`;

  const day = clickedDay.toLocaleDateString("fr-FR", { weekday: "long" });

  return { curDate, clickedDay, setClickedDay, date, day };
};
