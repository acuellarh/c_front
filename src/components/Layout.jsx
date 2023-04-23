
import  { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';
import PropTypes from 'prop-types';
import { Navbar } from './Navbar';

export const Layout = ({redirectPath}) => {

  const {token } = useContext(AuthContext)
  
  if (!token) {
    return <Navigate to={redirectPath} />
  }
  return (
    <>    
      <Navbar />
      <Outlet />
    </>
  )
}

Layout.propTypes = {
  redirectPath: PropTypes.string.isRequired
}