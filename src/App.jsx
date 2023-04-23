import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Login from './components/Login';
import { Open6Consult } from './components/Open6Consult';
import { AuthContextProvider } from './context/AuthContextProvider';
import { NotFound } from './pages/NotFound';


function App() {

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path='login' element={<Login />}/>	
          <Route element={<Layout redirectPath ='/login'/>}>
            <Route path='open6consult' element={<Open6Consult/>} />      
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
