import React from 'react';
import logoWhite from "@assets/logo5white.svg";

import { MdOutlineSettings, MdOutlineFormatListBulleted, MdOutlineCalendarToday, MdOutlinePlace } from 'react-icons/md';

function DashNavbar({ toggle, setToggle }) {
    return (
        <section className='dashNav'>
            <div className='dashNavLogo'>
                <img src={logoWhite} alt="" />
                <h2>Babyplace <span>PRO</span></h2>
            </div>
            <ul className='dashNavList'>
                <li>
                    <MdOutlineFormatListBulleted /><button onClick={() => setToggle(1)}>Demandes</button>
                </li>
                <li>
                    <MdOutlineCalendarToday /><button onClick={() => setToggle(2)}>Agenda</button>
                </li>
                <li>
                    <MdOutlinePlace /><button onClick={() => setToggle(3)}>Ajouter un lieu</button>
                </li>
            </ul>
            <button className='dashNavParams' onClick={() => setToggle(4)}><MdOutlineSettings />Paramètres</button>
        </section>
    )
}

export default DashNavbar