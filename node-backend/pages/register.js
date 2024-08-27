import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'my-app\styles\styles.css'; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'secretary'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', formData);
      alert('Utilisateur enregistré avec succès');
    } catch (error) {
      alert("Erreur lors de l'enregistrement de l'utilisateur");
    }
  };

  return (
    <div className="register-form">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" placeholder="Nom" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="role">Rôle</label>
          <select id="role" name="role" onChange={handleChange}>
            <option value="doctor">Médecin</option>
            <option value="secretary">Secrétaire</option>
          </select>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <p>Vous avez déjà un compte ? <Link to="/login">Connectez-vous ici</Link></p>
    </div>
  );
};

export default Register;
