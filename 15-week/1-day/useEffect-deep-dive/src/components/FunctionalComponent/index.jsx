import { useState, useEffect } from 'react';

export default function FunctionalComponent() {
    console.log('I just rendered, maybe even re-rendered!');

    const [seconds, setSeconds] = useState(0);
    const [ten, setTen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSec) => prevSec + 1);
        }, 1000);

        console.log('useEffect just ran :)');

        return () => {
            console.log('UseEffect goes bye bye');
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        if (seconds >= 10) {
            setTen(true);
        }
    }, [seconds]);

    return (
        <div>
            <h2>{seconds} seconds have passed</h2>
            <button onClick={() => setSeconds((prevSec) => prevSec + 1)}>
                +1 second
            </button>
            {ten && <h2>{"You've"} been here longer than 10 seconds!</h2>}
        </div>
    );
}
