import { Link } from 'react-router-dom';

export const FrutaCard = ({ id, name, characters }) => {
  // TODO Crear
  const frutaImageUrl = `/assets/frutas/${id}.png`;
  console.log('FrutaCard LINE 6 =>', frutaImageUrl);
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img
              src={frutaImageUrl}
              className='card-img'
              alt={name}
              onerror="this.src='/assets/frutas/noFound.png'"
            />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{name}</h5>
              <p className='text-muted'>{name}</p>
              <p>{`${characters.substring(0, 60)}...`}</p>
              <Link to={`/fruta/${id}`}>Más..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
