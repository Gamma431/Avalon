import {createContext, useState} from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const [user, setUser] = useState(localStorage.getItem("currentUserEmail") ? {email:localStorage.getItem("currentUserEmail")}: null);

    function signUp(email,password){
        const users = JSON.parse(localStorage.getItem("users")|| "[]")

        if(users.find((u) => u.email === email)){
            return {success: false, error: "email exists"}
        }
        const newUsers = {email,password}
        users.push(newUsers)
        localStorage.setItem("user",JSON.stringify(users))
        localStorage.setItem("currentUserEmail", email)
        setUser({email})

        return {success: true}
    }

    function logIn(email,password){
        const users = JSON.parse(localStorage.getItem("users") || "[]")
        const user = users.find((u) => u.email === email && u.password === password)
        if(!user){
            return {success: false, error: "invalid email or password"};
        }

        localStorage.setItem("currentUserEmail",email)
        setUser({email})

        return {success: true}
    }

    function logOut(){
        localStorage.removeItem("currentUserEmail")
        setUser(null)
    }
    return <AuthContext.Provider value={{signUp,logIn, user,logOut}}>{children}</AuthContext.Provider>
}

