import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/navbar.scss';
import { AuthContext } from '../context/AuthContextProvider';

export const Navbar = () => {

  const {  token, logout} = useContext(AuthContext);

  return(    
    <header className='header'>  
      <section className='navbar'>
        <div>
        <a className='navbar__title'>Consultas</a>
        </div>
     
        <nav className='navbar__menu'>
          {token ? 
          <>    
            <Link className='navbar__link navbar__button' to='/login' onClick={()=> logout()}>Logout</Link>
          </> 
          :
          <>            
            <Link className='navbar__link navbar__button' to='/login'>Log In</Link>          
            <Link className='navbar__link navbar__button navbar__button--dark' to='/signup'>Sign Up</Link>
          </>
          }
        </nav>
      </section>  
    </header>
  )
}