import { frutas } from '../data/frutas';

export const getFrutasByName = (name = '') => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return frutas.filter((fruta) =>
    fruta.name.toLocaleLowerCase().includes(name)
  );
};
