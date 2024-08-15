import { useContext } from 'react';
import { PokeInfoContext } from './PokeInfo';

export default function PokeCard() {
    const { moves, setMoves } = useContext(PokeInfoContext);

    return (
        <div>
            <h1>PokeCard</h1>
            <ul>
                {moves.map((el) => {
                    return <li key={el}>{el}</li>;
                })}
            </ul>
            <button
                onClick={() =>
                    setMoves(['Something', 'fireThing', 'FireAttack'])
                }
            >
                Change the moves
            </button>
        </div>
    );
}
