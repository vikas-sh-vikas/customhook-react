type UserModel = {
    name:string | undefined
    email:string
    password:string
    isUser:boolean
    loggedIn:boolean
    confirmPassword?:string
    matchPassword?:string
    matchEmail?:string
}