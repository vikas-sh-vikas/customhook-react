import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {UserContext} from '../../lib/context/UserContext';

function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState<UserModel>({
    name: '',
    email: '',
    password: '',
    isUser: false,
    loggedIn: false,
  });
  const { user, updateUserState } = useContext(UserContext);
  const [error, setError] = useState<  { message: string | null }>(
    { message: null }
  );
  const handleSave = (e:any) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      setError({ message: 'All fields are required' });
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError({ message: 'Password and Confirm Password do not match' });
      return;
    }

    updateUserState({
      name: data.name,
      email: data.email,
      password: data.password,
      isUser: true,
      loggedIn: false
    });
    navigate('/signin');
  };

  return (
    <div>
      <h1 className='m-4'>Sign Up</h1>
      <form>
        <label>Name *</label>
        <div className='p-2'>
          <input
            type="text"
            placeholder='Name'
            onChange={(e) => setData({ ...data, name: e.target.value })}
          >
          </input>
        </div>
        <label>Email Id *</label>
        <div className='p-2'>
          <input
            type="text"
            placeholder='Email Id'
            onChange={(e) => setData({ ...data, email: e.target.value })}
          >
          </input>
        </div>
        <label>Password *</label>
        <div className='p-2'>
          <input
            type="password"
            placeholder='Password'
            onChange={(e) => setData({ ...data, password: e.target.value })}
          >
          </input>
        </div>
        <label>Confirm Password *</label>
        <div className='p-2'> 
          <input
            type="password"
            placeholder='Confirm Password'
            onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
          >
          </input>
        </div>
        {error.message && <p className='text-danger'>{error.message}</p>}
        <div>
          <Link to="/signIn">Already have an account? Sign in</Link>
        </div>
        <button className="btn btn-primary m-4" onClick={handleSave}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
