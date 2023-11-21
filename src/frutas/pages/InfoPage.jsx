import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getFrutasById } from '../helpers';

export const InfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fruta = useMemo(() => getFrutasById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };
  if (!fruta) {
    return <Navigate to='/fruta' />;
  }
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={`/assets/frutas/${fruta.id}.png`}
          alt={fruta.name}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-8'>
        <h3>{fruta.name}</h3>
        <h5 className='mt-3'> Descripción </h5>
        <p>{fruta.characters}</p>
        <button
          className='btn btn-outline-primary'
          onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
