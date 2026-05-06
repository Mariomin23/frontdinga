import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar/Navbar'; 
import './App.css'; 

function App() {
  return (
    <Router>
      
      <Navbar /> 

      <div className="container">
        <Routes>
          <Route path="/" element={
            <div style={{ padding: '2rem' }}>
              <h1>Bienvenido a La Mandinga</h1>
              <p>Tu marketplace de confianza.</p>
            </div>
          } />

          <Route path="/productos" element={
            <div style={{ padding: '2rem' }}>
              <h1>Nuestros Productos</h1>
              
            </div>
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;