import React, { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';

const Burger = ({ open, setOpen }) => {
    const [color, setColor] = useState("#f2f2f2");

    return (
        <div id="btnBurger">
            <Hamburger color={color} onToggle={toggled => {
                if (toggled) {
                    setOpen(!open);
                    setColor("#7e72f2");
                } else {
                    setColor("#f2f2f2");
                    setOpen(!open);
                }
            }} />
        </div>
    )
}

export default Burger;
