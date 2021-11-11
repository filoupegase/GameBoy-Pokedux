import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import { CLICK, showPokemeonAction } from "./store/action";
import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import fetchPokemons from "./store/fetchPokemons";
import Spinner from "./components/Loader"

const App = ({click, fetchPokemons, pending, showPokemeon, pokemons}) => {
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
          showPokemeon={() => showPokemeon(pokemons)}
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
    showPokemeon: pokemons => dispatch(showPokemeonAction(pokemons))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
