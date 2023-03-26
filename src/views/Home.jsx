import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newNameValue = e.target.value;

    setNameValue(newNameValue);
    if (newNameValue === '') setNameError('Name is required ');
    else if (!/^[A-Z][a-z]{2,}$/.test(newNameValue))
      setNameError('Only letters and blanks are allowed and least should be 3 letters');
    else setNameError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError) {
      setUser(nameValue);
    }
  };
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center">
        <img src="/poke_img.png" alt="pokedex" />
      </div>
      <div className="text-center">
        <h1 className="text-red-400  text-4xl font-bold">Hi trainer!</h1>
        <p className="">Type your name to start</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-center items-center mt-8 gap-3"
      >
        <input
          className="shadow-md border border-black p-2 rounded"
          type="text"
          value={nameValue}
          onChange={handleChange}
        />
        <button className="bg-red-400 rounded text-white font-bold p-2" type="submit">
          start
        </button>
      </form>
      {nameError && <p className="text-red-400 text-center">{nameError}</p>}

      {user && <Navigate to="/pokedex" />}
    </div>
  );
};

export default Home;
