import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const [pokemonInfo, setpokemonInfo] = useState(null);

  const { id } = useParams();

  const getPokemonById = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.data;
  };

  useEffect(() => {
    const loadData = async () => {
      const pokemon = await getPokemonById();
      console.log(pokemon);
      setpokemonInfo(pokemon);
    };

    loadData();
  });
  return (
    <div>
      {pokemonInfo ? (
        <div>
          <img
            src={pokemonInfo.sprites.front_default}
            alt={`imagen del pokemon ${pokemonInfo.name}`}
          />
          <p>#{pokemonInfo.id}</p>
          <h2>{pokemonInfo.name}</h2>
          <div>
            <div>
              <p>peso</p>
              <p>{pokemonInfo.weight}</p>
            </div>
            <div>
              <p>altura</p>
              <p>{pokemonInfo.height}</p>
            </div>
          </div>
          <div>
            <h3>Tipo</h3>
            <div>
              <p>{pokemonInfo.types[0].type.name}</p>
            </div>
            <div>
              <p>{pokemonInfo.types[1] && `${pokemonInfo.types[1].type.name}`}</p>
            </div>
          </div>
          <div>
            <h3>Habilidades</h3>
            <div>
              <p>{pokemonInfo.abilities[0].ability.name}</p>
            </div>
            <div>
              <p>
                {pokemonInfo.abilities[1] && `${pokemonInfo.abilities[1].ability.name}`}
              </p>
            </div>
          </div>
          <div>
            <h3>Stats</h3>
            <div>
              <p>
                <span>HP: </span>
                {pokemonInfo.stats[0].base_stat}/255
              </p>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <p>
                <span>Attack: </span>
                {pokemonInfo.stats[1].base_stat}/190
              </p>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <p>
                <span>Defense: </span>
                {pokemonInfo.stats[2].base_stat}/250
              </p>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <p>
                <span>Especial-attack: </span>
                {pokemonInfo.stats[3].base_stat}/210
              </p>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <p>
                <span>Especial-defense: </span>
                {pokemonInfo.stats[4].base_stat}/250
              </p>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <p>
                <span>Speed: </span>
                {pokemonInfo.stats[5].base_stat}/180
              </p>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>la pagina esta cargando ...</p>
      )}
    </div>
  );
};

export default PokemonDetail;
