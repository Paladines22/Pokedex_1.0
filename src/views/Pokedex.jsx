import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Pokedex = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="">
      <p>
        <span className="text-red-500 font-semibold">Bienvenido {user},</span>aqui
        encontraras tus pokemons fav
      </p>
    </div>
  );
};

export default Pokedex;
