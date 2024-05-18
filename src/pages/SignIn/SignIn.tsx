import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from "../../lib/context/UserContext";

function SignIn() {
  const navigate = useNavigate();
  const [data, setData] = useState<UserModel>({
    name: '',
    email: '',
    password: '',
    isUser: false,
    loggedIn: false,
  });
  const [error, setError] = useState<{message: string | null}>({
    message:null
  });
  const { user, updateUserState } = useContext(UserContext);
  useEffect(() => {
    setData({ ...data, matchPassword: user.password });
    setData({ ...data, matchEmail: user.email });
  }, []);
  const handleLog = (e: any) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setError({ message: 'All fields are required' });
      return;
    }
    else if(user.password != data.password || user.email != data.email) {
      setError({ message: 'Email & Password is invalid' });
      return;
    }
    else{
      navigate("/profile");
    }
  };
  return (
    <div>
      <h1 className="m-4">Sign In</h1>
      <form>
        <label>Email Id *</label>
        <div className="p-2">
          <input
          placeholder="Email"
            type="text"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          ></input>
        </div>
        <label>Password *</label>
        <div className="p-2">
          <input
          placeholder="password"
            type="password"
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          ></input>
        </div>
        {error.message && <p className='text-danger'>{error.message}</p>}
        <div>

<Link to="/">Create account</Link>
</div>
        <button className="btn btn-primary m-4" onClick={(e) => handleLog(e)}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
