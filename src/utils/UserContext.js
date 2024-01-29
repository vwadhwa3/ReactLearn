import { createContext, useReducer } from "react";

const UserContext = createContext({
    loggedInUser:"Default User"
})


export default UserContext;