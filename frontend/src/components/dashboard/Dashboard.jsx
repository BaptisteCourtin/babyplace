import React, { useState } from 'react';
import DashNavbar from './nav/DashNavbar';

import { FiBell } from 'react-icons/fi';
import { MdOutlineSettings } from 'react-icons/md';
import Synthesis from '@components/login/Synthesis';

function Dashboard() {

    const [toggle, setToggle] = useState(0);

    const pageShown = () => {
        if (toggle === 4) {
            return <Synthesis />
        }
    }

    console.log(toggle)

    return (
        <div className='dashboard'>
            <nav>
                <button><FiBell /></button>
                <button>Kévin</button>
                <button><MdOutlineSettings /></button>
            </nav>
            <main>
                <DashNavbar toggle={toggle} setToggle={setToggle} />
                <div className='dashboardSection'>
                    {pageShown()}
                </div>
            </main>
            <footer>
                <p>2022 © Babyplace</p>
                <p>Crée avec ♥ Wild Code School x Babyplace</p>
            </footer>
        </div>
    )
}

export default Dashboard