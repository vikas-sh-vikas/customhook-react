import { createContext, Dispatch,SetStateAction} from "react";

export interface UserContextInterface {
    user: UserModel,
    setUser: Dispatch<SetStateAction<UserModel>>
}

const defaultState = {
    user: {
        name: '',
        email:'',
        password: '',
        isUser:false,
        loggedIn:false
    },
    setUser: (user:UserModel) => []
} as UserContextInterface

const UserContext = createContext(defaultState)

export default UserContext;