import React, { useState } from "react";
import userContext from "./UserContext";

const UserContextProvider=({children})=>{
    const[user,setuser]=useState(null);
    return(
        <userContext.provider value={{user,setuser}}>
            {children}
        </userContext.provider>
    )
}
export default UserContextProvider