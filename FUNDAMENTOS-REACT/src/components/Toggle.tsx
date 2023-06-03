import { useState } from "react";

export function Toggle() {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <>
            <h2>On or Off: </h2>   
            <button onClick={handleClick}>
            {isOn ? 'On' : 'Off'}
            </button>
        </>
    );
}