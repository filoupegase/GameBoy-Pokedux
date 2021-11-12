import React from "react";
import { connect } from "react-redux";
import PokemonItem from "./PokemonItem";

const PokeList = ({click, pokemons}) => {
  return (
    <div className="list-container">
      <h2>Try Redux with click : {click}</h2>
      <h2>{pokemons.filter(pokemon => pokemon.isCatch).length} / {pokemons.length}</h2>
      <ul>
        {
          pokemons.map(pokemon => (
            <PokemonItem key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = ({click, pokemons}) => {
  return {
    click,
    pokemons,
  };
};

export default connect(mapStateToProps)(PokeList);
