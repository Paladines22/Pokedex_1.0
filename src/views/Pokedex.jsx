import React, { useContext, useEffect, useState } from 'react';
import PokemonList from '../components/PolemonList';
import { UserContext } from '../context/UserContext';
import { getPokemons } from '../hooks/getPokemons';

const Pokedex = () => {
  const { user } = useContext(UserContext);
  const [pokemonsData, setPokemonsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const Pokemon = async () => {
    let res = await getPokemons('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281');
    console.log(res);
    setPokemonsData(res.results);
  };

  useEffect(() => {
    if (pokemonsData.length === 0) {
      Pokemon();
    }
  }, [pokemonsData]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemons = pokemonsData.filter((pokemon) =>
    pokemon.name.includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="">
      <p>
        <span className="text-red-500 font-semibold">Bienvenido {user},</span>aqui
        encontraras tus pokemons favoritos
      </p>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={handleChange}
      />
      <label for="tipo-pokemon">Filtrar por tipo:</label>
      <select id="tipo-pokemon">
        <option value="todos">Todos los tipos</option>
        <option value="normal">Normal</option>
        <option value="fuego">Fuego</option>
        <option value="agua">Agua</option>
        <option value="planta">Planta</option>
        <option value="eléctrico">Eléctrico</option>
        <option value="hielo">Hielo</option>
        <option value="lucha">Lucha</option>
        <option value="veneno">Veneno</option>
        <option value="tierra">Tierra</option>
        <option value="volador">Volador</option>
        <option value="psíquico">Psíquico</option>
        <option value="bicho">Bicho</option>
        <option value="roca">Roca</option>
        <option value="fantasma">Fantasma</option>
        <option value="dragón">Dragón</option>
        <option value="siniestro">Siniestro</option>
        <option value="acero">Acero</option>
        <option value="hada">Hada</option>
      </select>
      <PokemonList pokemonsData={filteredPokemons} />
    </div>
  );
};

export default Pokedex;
