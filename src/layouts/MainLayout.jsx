import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState } from "react";

const MainLayout = () => {
    const [color, setColor] = useState('indigo');
    const [mode, setMode] = useState('light');

    const changeMode = (newMode) => {
        setMode(newMode);
    }

    const changeColor = (newColor) => {
        setColor(newColor);
    }

    return (
        <div className={[
            'font-mono py-4 bg-primaryBg',
            `theme-${color}`,
            `theme-${mode}`,
        ].filter(Boolean).join(' ')}>
            <Navbar />
            <Outlet context={[changeColor, changeMode]} />
        </div>
    )
}

export default MainLayout