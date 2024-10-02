import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // Método para hacer login
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setEmail(email);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        setEmail(email);
      }
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, fetchUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);