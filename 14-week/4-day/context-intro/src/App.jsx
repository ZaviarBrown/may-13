import { useState } from 'react';
import './App.css';
import PokeInfo from './components/PokeInfo';
import PokeCard from './components/PokeCard';

const apiBaseUrl = 'https://pokeapi.co/api/v2/pokemon/';

function App() {

    return (
        <>
            {/* <PokeInfo url={apiBaseUrl} /> */}
            <PokeCard />
        </>
    );
}

export default App;
