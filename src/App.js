import './App.css';
import Navbar from'./components/Navbar';
import Home from'./pages/Home';
import About from'./pages/About';
import Services from'./pages/Services';
import Contact from'./pages/Contact';
import Login from'./pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />
        }></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="contact" element={<Contact/>
        }></Route>
          <Route path="login" element={<Login />
        }></Route>
        </Routes>
      </Navbar>
    
  );
}

export default App;
