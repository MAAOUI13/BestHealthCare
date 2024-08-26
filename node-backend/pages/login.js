import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('docteur');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Connexion réussie');
      // Rediriger en fonction du rôle
      if (data.role === 'docteur') {
        router.push('/dashboard-docteur');
      } else if (data.role === 'secretaire') {
        router.push('/dashboard-secretaire');
      }
    } else {
      alert('Erreur de connexion : ' + data.message);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Rôle :</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="docteur">Docteur</option>
            <option value="secretaire">Secrétaire</option>
          </select>
        </div>
        <button type="submit">Se Connecter</button>
      </form>
    </div>
  );
};

export default LoginPage;
