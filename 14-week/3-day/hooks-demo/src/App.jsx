import { useState, useEffect } from 'react';
import './App.css';

function App() {
    console.log('----------------------------------------------------------');
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Momo');
    let myNum = 10;

    useEffect(() => {
        console.log('Count updated');

        if (count > 50) {
            setName('Tenten');
        }
    }, [count]);

    useEffect(() => {
        setCount(0);
    }, [name]);

    console.log('I just rerendered');

    return (
        <>
            {/* <button
                onClick={() => {
                    console.log(count); // 0

                    // count += 1; //! BAD BAD DON'T DO IT

                    setCount(count + 1); // count WILL BE 1
                    console.log(count); // 0

                    setCount(count + 1); // count WILL BE 1
                    console.log(count); // 0

                    setCount(count + 1);
                    console.log(count); // 4

                    setCount(count + 1);
                    console.log(count); // 5
                }}
            >
                count is {count}
            </button> */}
            {/* <button
                onClick={() => {
                    console.log(count); // 0

                    setCount((currentCount) => currentCount + 1);
                    console.log(count);

                    setCount((currentCount) => currentCount + 1);
                    console.log(count);

                    setCount((currentCount) => currentCount + 1);
                    console.log(count);

                    setCount((currentCount) => {
                        currentCount + 1;
                        // wiejfoaweifj
                        // do whatever

                        return currentCount + 100;
                    });
                    console.log(count);
                }}
            >
                count is {count}
            </button> */}
            <button
                onClick={() => {
                    setCount((currentCount) => currentCount + 1);
                }}
            >
                count is {count}
            </button>

            <button
                onClick={() => {
                    myNum++;
                    console.log(myNum);
                }}
            >
                myNum is {myNum}
            </button>

            <h1>{name}</h1>
        </>
    );
}

export default App;
