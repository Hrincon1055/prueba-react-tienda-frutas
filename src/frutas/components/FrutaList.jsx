import { useMemo } from 'react';
import { FrutaCard } from '.';
import { getFrutas } from '../helpers';

export const FrutaList = () => {
  const frutas = useMemo(() => getFrutas(), []);

  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
      {frutas.map((fruta) => (
        <FrutaCard key={fruta.id} {...fruta} />
      ))}
    </div>
  );
};
