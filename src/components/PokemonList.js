import Pokemon from "./Pokemon.js";

const PokemonList = (props) => {
  const pokeComponents = props.pokemonList.map((pokemon) => {
    return (
      <Pokemon
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        img={pokemon.img}
        type={pokemon.type}
        height={pokemon.height}
        weight={pokemon.weight}
      />
    );
  });
  return (
    <div>
       <ul className="collection row">
        {pokeComponents}
      </ul>
    </div>
  );
};


export default PokemonList;
