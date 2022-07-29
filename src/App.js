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
        <div className="navbar-fixed">
            <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo left">Pokedex</a>
            </div>
          </nav>
        </div>
        <a className="waves-effect waves-light btn" id="toggleInfo">Toggle details</a>
        <PokemonList
          pokemonList={pokemon}
        />
    </div>
  );
}

export default App;
