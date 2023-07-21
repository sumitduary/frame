import { createContext } from "react";

export const AuthContext = createContext()

export function AuthGuard({children}){
    const data = {
        name: 'gourav',
        age: 22
    }
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}