import React from "react";
import { useOutletContext } from "react-router-dom";

const SettingsPage = () => {
    const colors = ["green", "red", "blue", "indigo"];
    const modes = ["light", "dark"];

    const [changeColor, changeMode] = useOutletContext();

    const handleModeChange = (e) => {
        changeMode(modes[e.target.value]);
    };

    const handleColorChange = (e) => {
        changeColor(colors[e.target.value]);
    };
    return (
        <>
            <div className="flex flex-col items-center gap-y-8 mt-8">
                <div className="flex flex-col items-center gap-y-4">
                    <h1 className="heading">Mode:</h1>
                    <div className="flex gap-x-4">
                        {Array.from({ length: modes.length }).map((_, i) => {
                            return (
                                <button
                                    className="btn"
                                    onClick={handleModeChange}
                                    value={i}
                                >
                                    {modes[i].toUpperCase()}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                    <h1 className="heading">Theme:</h1>
                    <div className="flex flex-row gap-x-4">
                        {Array.from({ length: colors.length }).map((_, i) => {
                            return (
                                <button
                                    className="btn"
                                    onClick={handleColorChange}
                                    value={i}
                                >
                                    {colors[i].toUpperCase()}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SettingsPage;
