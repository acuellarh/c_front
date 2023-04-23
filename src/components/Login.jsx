import  { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContextProvider";
import axios  from '../utils/api';

//import "./styles.css";

export default function Login() {

  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [state, setState] = useState({
    user: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(state);

    if (state.user && state.password) {
			const loginForm = state;
			try {				
				const { data, status } = await axios.post('/login', loginForm);	
				if(status === 200){	
          console.log('data que recibo')
          console.log(data)
					setToken(data);
					localStorage.setItem('token', data);				
					navigate('/open6consult');
				}
			} catch (error) {
        console.log('hayyyy')
				//const err = error.response.data.message	
        console.log(error)
				//setHasError(err);	
			}
		}

  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="user"
            value={state.user}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}