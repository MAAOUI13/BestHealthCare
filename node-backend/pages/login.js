import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'my-app\styles\styles.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/login', formData);
      alert('Utilisateur connecté avec succès');
    } catch (error) {
      alert("Erreur lors de la connexion de l'utilisateur");
    }
  };

  return (
    <div className="login-form">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p>Vous n'avez pas de compte ? <Link to="/register">Créez-en un ici</Link></p>
    </div>
  );
};

export default Login;
