import React, { useState } from "react";
import Buttons from "./button";
const Player = ({ name, turn, nextPlayer, setFirst }) => {
    let rand = Math.floor(Math.random() * 99);
    const [numbers, setNumbers] = useState(rand);
    const [steps, setSteps] = useState(0);
    const [stop, setStop] = useState(false);
    let design = {
        transform: 'scale(1.1)',
        transition: 'transform 0.5s ease-in-out',
        display: stop ? 'none' : null,
        boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.9)' // כאן מוסיפים את הצלליה
    };

    const OnButtons = (event) => {
        setNumbers(Math.floor(eval(numbers + event.target.innerText)));
        setSteps(steps + 1);
        if (numbers !== 100) {
            nextPlayer();
        }
    };
    const OnButton = () => {
        setNumbers(Math.floor(Math.random() * 99));
        setFirst(5);
    };
    const OnButtonToStop = () => {
        setStop(true);
    };

    return (
        <div id="player" style={turn ? design : {}}        >
            <h1>hi {name}</h1>
            {numbers === 100 && <h1>{name} wins!</h1>}
            <p>Your guess number is: {numbers}</p>
            <p>Your number of steps: {steps}</p>
            <Buttons OnButtons={OnButtons} turn={turn} />
            {numbers === 100 && <button onClick={OnButton}>If you want to start a new game click here</button>}
            {numbers === 100 && <button onClick={OnButtonToStop}>If you want to stop click here</button>}
        </div>
    );
};

export default Player;