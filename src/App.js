import './App.css';
import Navbar from'./components/Navbar';
import {publicRoute} from './routes/publicRoute';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './Authentication/PrivateRoute';
import Services from './pages/Services';




function App() {

  return (
      <Navbar>
        <Routes>
         
        {
          publicRoute.map(({path, Component},index) =>(
            <Route key={path} path={path} element={<Component />} />
          ))
        }
        {/* privateRoute */}
        <Route element={<PrivateRoute/>} >
        <Route path='/services' element={<Services />} />

          </Route>
        </Routes>
      </Navbar>
    
  );
}

export default App;
