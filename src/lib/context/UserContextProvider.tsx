import { useState, ReactNode } from 'react';
import UserContext from './UserContext'
// interface UserContextProviderProps {
//     children: ReactNode;
// }

type userProvideProps = {
    children: ReactNode
}
const UserContextProvider= ({children}:userProvideProps)=>{
    const [user, setUser] = useState<UserModel>(
        {
            name:'',
            email:'',
            password:'',
            isUser:false,
            loggedIn:false
        }
    );
    return (
        <UserContext.Provider
        value={{user,setUser}}>
            {children}  
        </UserContext.Provider>
    )

}

export default UserContextProvider