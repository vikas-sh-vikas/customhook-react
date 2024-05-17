import { useContext } from 'react'
import UserContext from '../context/UserContext'
import {   useNavigate } from 'react-router-dom'
import SignIn from './SignIn';


function Profile() {
  const navigate = useNavigate()
  const {user,setUser} = useContext(UserContext);
  console.log("ProfileData",user)
const logout = (e:any) => 
  {e.preventDefault();
    setUser({
      name:user.name,
      email:user.email,
      password:user.password,
      isUser:true,
      loggedIn:false
    })
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
