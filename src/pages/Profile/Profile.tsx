import {   useNavigate } from 'react-router-dom'
import './profile.css'
import {UserContext} from '../../lib/context/UserContext';
import { useContext } from 'react';


function Profile() {
  const navigate = useNavigate()
  const { user, updateUserState } = useContext(UserContext);
  console.log("ProfileData",user)
const logout = (e:any) => 
  {e.preventDefault();
    navigate("/signin")
};
  return (
    <div>
      <div className='displayLogout'>
          <button className="btn btn-primary"onClick={(e)=>logout(e)}>Log Out</button>
      </div>
      <div className='p-4'>
        <h1>Profile {user.name}</h1>
      </div>
    </div>
  )
}

export default Profile
