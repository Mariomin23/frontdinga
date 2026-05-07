/*import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
     const response = await axios.post(`${(import.meta as any).env.VITE_API_URL}/users/login`, data);
      console.log('Login exitoso:', response.data);
      alert('Sesión iniciada');
    } catch (error) {
      console.error('Error al loguear:', error);
      alert('Error en las credenciales');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('correo')} type="email" placeholder="Correo electrónico" required />
        <br /><br />
        <input {...register('password')} type="password" placeholder="Contraseña" required />
        <br /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;


NOTA: este codigo de arriba se conserva porque ha habido que sustituirlo por el codigo que viene debajo. Se sustituye para hacer upgrade al codigo para cookies, pero este codigo (basico) de aqui encima FUNCIONA. Se conserva como codigo de rescate por prevencion de una posible urgencia (sin cookies)*/

import { useForm } from 'react-hook-form';
import { loginUser } from '../service/authService'; // Importamos el servicio del Código B
import './Login.css'; // Mantenemos los estilos del Código A

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // 1. Usamos la función del servicio (Código B)
      const responseData = await loginUser(data); 
      
      console.log('Login exitoso:', responseData);

      // 2. Guardamos en localStorage y redireccionamos (Código A)
      // Usamos responseData.user o el objeto completo según lo que devuelva tu service
      localStorage.setItem('user', JSON.stringify(responseData.user || responseData));
      
      alert('¡Sesión iniciada con éxito!');
      window.location.href = "/"; 

    } catch (error) {
      console.error('Error al loguear:', error);
      alert('Error en las credenciales');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Correo electrónico</label>
            {/* Usamos 'correo' para que coincida con el backend */}
            <input 
              {...register('correo')} 
              type="email" 
              placeholder="email@ejemplo.com" 
              required 
            />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input 
              {...register('password')} 
              type="password" 
              placeholder="••••••••" 
              required 
            />
          </div>
          <button type="submit" className="btn-login">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;