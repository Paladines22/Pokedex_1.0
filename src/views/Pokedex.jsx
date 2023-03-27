import React, { useContext, useEffect, useState } from 'react';
import PokemonCard from '../components/PokemoCard';
import { UserContext } from '../context/UserContext';
import { getPokemons } from '../hooks/getPokemons';
import { usePagination } from '../hooks/usepagination';

const Pokedex = () => {
  const { user } = useContext(UserContext);
  const [pokemonsData, setPokemonsData] = useState([]);
  const [quantity, setQuantity] = useState(20);
  const {
    listSlice: pokemonsDataSlice,
    currentPage,
    pages,
    nextPage,
    previousPage,
    changePageTo,
  } = usePagination(pokemonsData, quantity);

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

  return (
    <div className="">
      <p>
        <span className="text-red-500 font-semibold">Bienvenido {user},</span>aqui
        encontraras tus pokemons favoritos
        <div className="container-btns">
          <button onClick={previousPage}>Previous</button>
          {pages.map((page) => (
            <div
              onClick={() => changePageTo(page)}
              className={`btn-page ${page === currentPage ? 'btn-page-active' : ''}`}
              key={page}
            >
              {page}
            </div>
          ))}
          <button onClick={nextPage}>Next</button>
          <select
            name="pagination"
            value={quantity.toString()}
            onChange={(e) => setQuantity(+e.target.value)}
          >
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>
        {pokemonsDataSlice.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </p>
    </div>
  );
};

export default Pokedex;
