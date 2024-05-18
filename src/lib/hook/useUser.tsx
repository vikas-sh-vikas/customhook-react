import { useState } from "react";

const useUser = (): UserState => {
  const [user, setUser] = useState<UserModel>(
    {
      name:'',
      email:'',
      password:'',
      isUser:false,
      loggedIn:false
    }
  );
  const updateUserState = (newUser: UserModel) => {
    setUser(newUser);
  };
  return { user, updateUserState };
};

export default useUser;