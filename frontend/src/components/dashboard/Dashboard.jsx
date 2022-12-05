import React, { useState } from 'react';
import DashNavbar from './nav/DashNavbar';

import { FiBell } from 'react-icons/fi';
import DashSettings from './settings/DashSettings';

function Dashboard() {

    const [toggle, setToggle] = useState(0);
    const pageShown = () => {
        if (toggle == 4) {
            return <DashSettings />
        }
    }

    console.log(toggle)

    return (
        <div className='dashboard'>
            <nav>
                <button><FiBell /></button>
                <button>Kévin</button>
            </nav>
            <main>
                <DashNavbar toggle={toggle} setToggle={setToggle} />
                <section className='dashboardSection'>
                    {pageShown()}
                </section>
            </main>
            <footer>
                <p>2022 © Babyplace</p>
                <p>Crée avec <span>♥</span> Wild Code School x Babyplace</p>
            </footer>
        </div>
    )
}

export default Dashboard