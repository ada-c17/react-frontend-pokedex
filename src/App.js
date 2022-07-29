import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import pokeData from './pokedata.json';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    setPokemon(pokeData["pokemon"]);
  }, []);

  
  return (
    <div>
      <PokemonList
        pokemonList={pokemon}
      />
    </div>
  );
}

export default App;
