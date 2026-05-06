import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(`${(import.meta as any).env.VITE_API_URL}/users/login`, data);
      localStorage.setItem('user', JSON.stringify(response.data.user || response.data));
      window.location.href = "/"; 
    } catch (error) {
      alert('Error en las credenciales');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-side-decoration"></div>
      <div className="login-container">
        <div className="login-box">
          <header className="login-header">
            <h2>¡Hola de nuevo!</h2>
            <p>Ingresa a tu cuenta en La Mandinga</p>
          </header>

          <form onSubmit={handleSubmit(onSubmit)} className="modern-form">
            <div className="input-field">
              <label>Email</label>
              <input 
                {...register('correo')} 
                type="email" 
                placeholder="ejemplo@correo.com" 
                required 
              />
            </div>

            <div className="input-field">
              <label>Contraseña</label>
              <input 
                {...register('password')} 
                type="password" 
                placeholder="••••••••" 
                required 
              />
            </div>

            <button type="submit" className="btn-primary-modern">
              Entrar ahora
            </button>
          </form>

          <footer className="login-footer-links">
            <p>¿Olvidaste tu contraseña?</p>
            <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;