import React, { createContext, useContext, useState, useEffect} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("")

  const storeTokenInLS = (serverToken, serverUserId) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };


  let isLoggedIn = !!token;


  
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    alert("You have been logged out!");
  };

    // JWT AUTHENTICATION - to get the currently loggedIn user data.


    const userAuthentication = async () =>{
        try{
          const response = await fetch("http://localhost:5000/api/auth/user", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
    
          if(response.ok){
            const data = await response.json();
            // console.log('user data', data.userData);
            
            setUser(data.userData);
          }
        }catch{
          console.error("error fetching data")
        }
      }

      
useEffect(() =>{
    userAuthentication();
  }, [])
  
  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
  