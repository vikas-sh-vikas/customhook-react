type UserModel = {
    name:string | undefined
    email:string
    password:string
    isUser:boolean
    loggedIn:boolean
    confirmPassword?:string
    matchPassword?:string
    matchEmail?:string
  };
  
  interface UserState {
    user: UserModel;
    updateUserState: (user: UserModel) => void;
  };
  
  interface userProvideProps {
    children: React.ReactNode;
  }