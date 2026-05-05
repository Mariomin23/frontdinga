
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Inicio</Link>
        <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
        <Link to="/register">Registro</Link>
      </nav>

      <Routes>
        
        <Route path="/" element={
          <div style={{ padding: '2rem' }}>
            <h1>Bienvenido a La Mandinga </h1>
            <p>Elige una opción en el menú para empezar.</p>
          </div>
        } />

        
        <Route path="/login" element={<Login />} />

        
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;