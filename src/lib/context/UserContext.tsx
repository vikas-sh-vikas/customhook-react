import  { createContext } from "react";
import useUser from "../hook/useUser";

// Define the default state
const defaultState: UserState = {
    user: {
        name: undefined,
        email: '',
        password: '',
        isUser: false,
        loggedIn: false,
        confirmPassword: undefined,
        matchPassword: undefined,
        matchEmail: undefined
    },
    updateUserState: (user: UserModel) => {}
};

const UserContext = createContext<UserState>(defaultState);

const UserContextProvider = ({ children}: userProvideProps) => {
    return (
        <UserContext.Provider value={useUser()}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContextProvider, UserContext };