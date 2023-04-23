import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

  const tokenStorage = localStorage.getItem('token') 

  const [token, setToken] = useState(tokenStorage); 
  
  const logout = ()=>{
    localStorage.removeItem('token')
    setToken('')
  }

  useEffect(() => {
    if(token)
    setToken(tokenStorage)   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    token,
    setToken,
    logout
  }  

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
}