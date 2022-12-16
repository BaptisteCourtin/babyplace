import React, { useState } from 'react';
import { useEffect } from 'react';
import Calendar from "react-calendar";


const Structure11 = () => {
    const [closedDays, setClosedDays] = useState([]);
    const isOpenDay = (e) => {
        let clickedDayFormated = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + e.getDate();
        if (closedDays.length > 0) {
            let indexOfDay = closedDays.indexOf(clickedDayFormated)
            if (indexOfDay === -1) {
                setClosedDays([...closedDays, clickedDayFormated]);
            } else {
                let tempArray = closedDays;
                tempArray.splice(indexOfDay, 1)
                setClosedDays(tempArray)
            }
        }
        else setClosedDays([...closedDays, clickedDayFormated]);
    };


    return (
        <div className="structure11 page-left">
            <div className="agendaSection">
                <Calendar
                    showNeighboringMonth={false}
                    minDetail="month"
                    maxDetail="month"
                    onClickDay={(e) => isOpenDay(e)}
                />
            </div>
        </div >
    );
};

export default Structure11;