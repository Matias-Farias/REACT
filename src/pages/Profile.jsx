import React from 'react';
import { useUser } from '../assets/Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { email, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p>Email: {email}</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;