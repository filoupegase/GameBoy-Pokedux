import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import { catchPokemonAction, CLICK, showPokemonAction } from "./store/action";
import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import fetchPokemons from "./store/fetchPokemons";
import Spinner from "./components/Loader"

const App = ({click, fetchPokemons, pending, showPokemon, pokemons, catchPokemon}) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  if (pending) {
    return <Spinner />;
  }

  return (
    <>
      <div className="App">
        <button
          onClick={() => click()}
        >
          Click
        </button>
        <GameBoy
          showPokemon={() => showPokemon(pokemons)}
          catchPokemon={() => catchPokemon()}
        />
        <PokeList />
      </div>
    </>
  );
};

const mapStateToProps = ({pending, pokemons}) => {
  return {
    pending,
    pokemons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    click: () => dispatch({type: CLICK}),
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons)),
    catchPokemon: () => dispatch(catchPokemonAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
