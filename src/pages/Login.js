import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Valida credenciales (puedes simular una API con un objeto)
    const validUsers = [
      { email: 'admin@empresa.com', password: '123' },
      { email: 'empleado@empresa.com', password: 'empleado123' },
    ];

    const user = validUsers.find((u) => u.email === email && u.password === password);

    if (user) {
      // Almacenar hora de llegada
      const horaLlegada = new Date().toLocaleTimeString();
      localStorage.setItem('horaLlegada', horaLlegada);
      localStorage.setItem('userEmail', email);
      navigate('/dashboard'); // Redirige al dashboard
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <StyledWrapper>
      <div className="login-container">
        <h2>Control de Acceso</h2>
        <form onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .login-container {
    margin: auto;
    padding: 20px;
    max-width: 400px;
    align-items: center;
    align-self: center;
    text-align: center;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-bottom: 20px;
    color: #2d8cf0;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #2d8cf0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .error {
    color: red;
    margin-bottom: 10px;
  }
`;

export default Login;
