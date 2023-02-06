import React, { useState } from 'react';
import Burger from "@components/dashboard/admin/components/Burger";
import Menu from "@components/dashboard/admin/components/Menu";


const BurgerMenuAdmin = ({ logout, logo }) => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="adminNavRes">
            <ul>
                <img src={logo} alt="logo" onClick={() => setOpen(!open)} />
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </ul>
        </nav >
    );
};

export default BurgerMenuAdmin;