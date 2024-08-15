import { useEffect, useState, createContext } from 'react';

export const PokeInfoContext = createContext();
const apiBaseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const PokeInfoContextProvider = (props) => {
    const [data, setData] = useState({});
    const [moves, setMoves] = useState([]);

    useEffect(() => {
        const getPokeData = async () => {
            const res = await fetch(apiBaseUrl + 'cyndaquil');

            const pokeData = await res.json();

            setData(pokeData);
        };

        getPokeData();
    }, []);

    useEffect(() => {
        if (data.id) {
            const newMoves = data.moves
                .map((el, i) => {
                    if (i > 3) return;
                    return el.move.name;
                })
                .filter((el) => el);

            setMoves(newMoves);
        }
    }, [data]);

    if (!data.id || !moves.length) return <h1>Loading...</h1>;

    return (
        <PokeInfoContext.Provider
            value={{ moves, hey: 'Look at me', setMoves }}
        >
            <h1>Hey</h1>
            {props.children}
        </PokeInfoContext.Provider>
    );
};

export default PokeInfoContextProvider;

// export default function PokeInfo({ url }) {
//     const [data, setData] = useState({});
//     const [moves, setMoves] = useState([]);

//     useEffect(() => {
//         const getPokeData = async () => {
//             const res = await fetch(url + 'cyndaquil');

//             const pokeData = await res.json();

//             setData(pokeData);
//         };

//         getPokeData();
//     }, [url]);

//     useEffect(() => {
//         if (data.id) {
//             const newMoves = data.moves
//                 .map((el, i) => {
//                     if (i > 3) return;
//                     return el.move.name;
//                 })
//                 .filter((el) => el);

//             setMoves(newMoves);
//         }
//     }, [data]);

//     if (!data.id || !moves.length) return <h1>Loading...</h1>;

//     console.log(moves);

//     return (
//         <div>
// <ul>
//     {moves.map((el) => {
//         return <li key={el}>{el}</li>;
//     })}
// </ul>
//         </div>
//     );
// }
