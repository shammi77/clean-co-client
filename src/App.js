import './App.css';
import Navbar from'./components/Navbar';
import {publicRoute} from './routes/publicRoute';
import { Route, Routes } from 'react-router-dom';




function App() {

  return (
      <Navbar>
        <Routes>
         
        {
          publicRoute.map(({path, Component},index) =>(
            <Route key={path} path={path} element={<Component />} />
          ))
        }
        </Routes>
      </Navbar>
    
  );
}

export default App;
