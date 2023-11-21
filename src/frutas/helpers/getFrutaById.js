import { frutas } from '../data/frutas';

export const getFrutasById = (id) => {
  return frutas.find((fruta) => fruta.id === id);
};
