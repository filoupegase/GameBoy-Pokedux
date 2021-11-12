import React from "react";
import { connect } from "react-redux";

const Screen = ({onScreen, pokemons}) => {
  if (onScreen.id) {
    if (pokemons[onScreen.id - 1].isCatch) {
      return <img alt={onScreen.name}
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                  style={{height: 105}}
      />
    }
    return (
      <>
        <img alt={onScreen.name} src={onScreen.img}/>
        <h3 className="screen-name">{onScreen.name}</h3>
      </>
    );
  }
  return (
    <>
      <div className="screen-logo">GAME BOY</div>
      <div className="screen-logo-shadow">GAME BOY</div>
      <div className="nintendo-logo-screen">Nintendo&reg;</div>
    </>
  );
};

const mapStateToProps = ({onScreen, pokemons}) => {
  return {
    onScreen,
    pokemons
  };
};

export default connect(mapStateToProps)(Screen);
