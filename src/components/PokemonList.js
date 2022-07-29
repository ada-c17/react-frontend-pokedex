import Pokemon from "./Pokemon.js";

const PokemonList = (props) => {
  const pokeComponents = props.pokemonList.map((pokemon) => {
    return (
      <Pokemon
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
      />
    );
  });
  return (
    <div>
      {pokeComponents}
    </div>
  );
};


export default PokemonList;
