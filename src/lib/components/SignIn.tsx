import  { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import {   useNavigate } from 'react-router-dom'


function SignIn() {
  const navigate = useNavigate()
  const [data, setData] = useState<UserModel>(
    {   name: '',
  email: '',
  password: '',
  isUser: false,
  loggedIn: false,}
  )
  const [passwordMatch, setPasswordMatch] = useState("")
  const [error, setError] = useState(false)
  const {user,setUser} = useContext(UserContext) 

  // console.log(user)
  useEffect(()=>{
    setData({...data,matchPassword: user.password})
    setData({...data,matchEmail: user.email})
    // setName(user.name)
  },[])
  console.log("object",data)
  console.log("object",user)
  const handleLog = (e:any) =>{
    e.preventDefault();
    if(user.password == data.password && user.email == data.email){
      setUser({
        name:user.name,
        email:data.email,
        password:data.password,
        isUser:true,
        loggedIn:true
      });
      navigate("/profile")
// return <Link to="/profile"></Link>

    }
    else{
      setError(true)
      console.log("Username or Password is incorrect")
      // console.error("Username or Password is incorrect");
    }

    console.log("Reach")
    // return <Link to="/profile"></Link>;

  }
  return (
    <div>
      <h1 className='m-4'>Sign In</h1>
      <form>
        <label>Email Id *</label>
        <div className='p-2'> 
        <input
        type="text"
        onChange={(e) => {setData({...data,email:e.target.value})}}
        >
        </input>
        </div>
        <label>Password *</label>
        <div className='p-2'>
        <input
        type="password"
          onChange={(e) => {setData({...data,password:e.target.value})}}
        >
        </input>
        </div>
        {error ? <p className='text-danger'>Username or Password is incorrect</p> : null}
        <button className='btn btn-primary m-4' onClick={(e)=>handleLog(e)}>Sign In</button>


      </form>
    </div>
  )
}

export default SignIn
