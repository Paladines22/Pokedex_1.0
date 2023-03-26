import axios from 'axios';

export const getPokemons = async (URL) => {
  try {
    const res = await axios.get(`${URL}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
