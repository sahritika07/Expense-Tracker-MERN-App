
import { createContext, useState } from 'react'

export const userContext = createContext();

const userProvider = ({children}) => {

    const [user, setUser] = useState(null);


    //Function to update user Data
    const updateUser = (userData) => {
        setUser(userData);
    }

    //Function to clear user data (e.g - on logout)
    const clearUser = (userData) => {
        setUser(userData);
    }

    return(
        <userContext.Provider 
        value={{
            user,
            updateUser,
            clearUser
        }}
        >
         {children}
        </userContext.Provider>
    )

}

export default userProvider;
