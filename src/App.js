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
            <a className="waves-effect waves-light btn right" id="toggleInfo">Toggle details</a>
          </nav>
        </div>
        <div className="container">
          <PokemonList
            pokemonList={pokemon}
          />
        </div>
    </div>
  );
}

export default App;
