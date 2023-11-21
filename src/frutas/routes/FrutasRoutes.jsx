import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { InfoPage, FrutaPage } from '../pages';

export const FrutasRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='fruta' element={<FrutaPage />} />
          <Route path='fruta/:id' element={<InfoPage />} />
          <Route path='/' element={<Navigate to='/fruta' />} />
        </Routes>
      </div>
    </>
  );
};
