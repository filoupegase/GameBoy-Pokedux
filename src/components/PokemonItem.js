import React from "react";

const PokemonItem = ({pokemon}) => {
  return (
    <li className="pokemon-item">
      <img
        alt={pokemon.name}
        src={
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
        }
      />
      {pokemon.name}
    </li>
  );
};

export default PokemonItem;
