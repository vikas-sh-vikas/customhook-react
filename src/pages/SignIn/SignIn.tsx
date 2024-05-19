import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../lib/context/UserContext";

function SignIn() {
  const navigate = useNavigate();
  const [data, setData] = useState<UserModel>({
    name: "",
    email: "",
    password: "",
    isUser: false,
    loggedIn: false,
  });
  const [error, setError] = useState<{ message: string | null }>({
    message: null,
  });
  const { user, updateUserState } = useContext(UserContext);
  useEffect(() => {
    setData({ ...data, matchPassword: user.password });
    setData({ ...data, matchEmail: user.email });
  }, []);
  const handleLog = (e: any) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setError({ message: "All fields are required" });
      return;
    } else if (user.password != data.password || user.email != data.email) {
      setError({ message: "Email & Password is invalid" });
      return;
    } else {
      navigate("/profile");
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="bg-light bg-gradient p-5 border border-info m-4">
        <h1 className="text-center mb-4">Sign In</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Email Id *</label>
            <input
              placeholder="Email"
              className="form-control"
              type="text"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password *</label>
            <input
              placeholder="password"
              className="form-control"
              type="password"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            ></input>
          </div>
          {error.message && <p className="text-danger">{error.message}</p>}
          <div className="mb-3">
            <Link to="/">Create account</Link>
          </div>
          <button className="btn btn-primary" onClick={(e) => handleLog(e)}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
