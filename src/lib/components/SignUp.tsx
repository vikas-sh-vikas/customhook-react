import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
import { Link  } from 'react-router-dom'
import {   useNavigate } from 'react-router-dom'


function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState<UserModel>( {   name: '',
  email: '',
  password: '',
  isUser: false,
  loggedIn: false,})
    const {setUser} = useContext(UserContext);
  const [error, setError] = useState(false)

    const handleSave = (e:any) =>{
      e.preventDefault();
      if(data.password == data.confirmPassword){
        setUser({
          name:data.name,
          email:data.email,
          password:data.password,
          isUser:true,
          loggedIn:false
        }
      )
      navigate('/signin');
      }else
      setError(true)
      console.log("Passwor Should be match")
    }
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
            onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
          >
          </input>
          </div>
          <label>Confirm Password</label>
          <div className='p-2'>
          <input
          type="password"
          placeholder='Confirm Password'
          onChange={(e) => setData({ ...data, password: e.target.value })}
          >
          </input>

          </div>
        {error ?  <p className='text-danger'>Password and Onfirm Password not match</p> : null}
          <button className="btn btn-primary m-4" onClick={(e)=>handleSave(e)}>Sign Up</button>
        </form>
      </div>
    )
}

export default SignUp
