import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      axios
        .post(`http://localhost:8080/log/`, {
          email,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          localStorage.setItem('TOKEN', data.token);
          localStorage.setItem('USERID', data.user.id);
          alert('Logged successfully');
        })
        .then(() => history.push('/profile'))
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    } else {
      alert('Please specify both email and password');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="test@blabla.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            id="password"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Me connecter" />
      </form>
      <Link to="/inscription">
        <button type="button">inscription</button>
      </Link>
    </div>
  );
};

export default Login;
