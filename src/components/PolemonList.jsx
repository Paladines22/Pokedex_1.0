import React, { useState } from 'react';
import { usePagination } from '../hooks/usepagination';
import PokemonCard from './PokemoCard';

const PokemonList = ({ pokemonsData }) => {
  const [quantity, setQuantity] = useState(20);
  const {
    listSlice: pokemonsDataSlice,
    currentPage,
    pages,
    nextPage,
    previousPage,
    changePageTo,
  } = usePagination(pokemonsData, quantity);
  return (
    <div>
      <div className="container-btns flex ">
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
    </div>
  );
};

export default PokemonList;
