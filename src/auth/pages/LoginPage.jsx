import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Henry Rincon');
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    // <div classNameName='container mt-5'>
    //   <h1>Login</h1>
    //   <hr />
    //   <button classNameName='btn btn-primary' onClick={onLogin}>
    //     Login
    //   </button>
    // </div>
    <div className='d-flex align-items-center justify-content-center pt-5'>
      <main className='form-signin w-25'>
        <form>
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
            />
            <label for='floatingInput'>Email address</label>
          </div>
          <div className='form-floating mb-5'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
            />
            <label for='floatingPassword'>Password</label>
          </div>
          <button
            className='w-100 btn btn-lg btn-primary'
            onClick={onLogin}>
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};
