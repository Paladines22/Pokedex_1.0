import React, { useEffect, useState } from 'react';
import { getData } from '../services/getData';

const PokemonCard = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const fetchPokemon = async () => {
    const res = await getData(pokemon.url);
    setPokemonInfo(res);
  };

  useEffect(() => {
    fetchPokemon();
  });

  if (!pokemonInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div className="border">
      <h2>{pokemonInfo.name}</h2>
      <p>
        <span>Tipo: </span>
        {pokemonInfo.types[0].type.name}
        {pokemonInfo.types[1] && `, ${pokemonInfo.types[1].type.name}`}
      </p>
      <p>
        <span>HP: </span>
        {pokemonInfo.stats[0].base_stat}
      </p>
      <p>
        <span>Attack: </span>
        {pokemonInfo.stats[1].base_stat}
      </p>
      <p>
        <span>Defense: </span>
        {pokemonInfo.stats[2].base_stat}
      </p>
      <p>
        <span>Especial-attack: </span>
        {pokemonInfo.stats[3].base_stat}
      </p>
      <p>
        <span>Especial-defense: </span>
        {pokemonInfo.stats[4].base_stat}
      </p>
      <p>
        <span>Speed: </span>
        {pokemonInfo.stats[5].base_stat}
      </p>
      <img
        src={pokemonInfo.sprites.front_default}
        alt={`imagen del pokemon ${pokemonInfo.name}`}
      />
    </div>
  );
};

export default PokemonCard;
