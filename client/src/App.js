import React, { useState } from "react";
import "./App.css";
import useJwt from "./Jwt/useJwt";

function App() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const result = await useJwt.login(state);
    } catch (error) {
      console.error(error.message);
    }
  };

  const { name, email, password } = state;
  return (
    <div className="App">
      <header className="App-header">
        <h2> Authentication</h2>

        <input
          className="bg-black text-white my-2"
          onChange={onInputChange}
          value={name}
          type="name"
          name="name"
        />
        <input
          className="bg-black text-white my-2"
          onChange={onInputChange}
          value={email}
          type="email"
          name="email"
        />
        <input
          className="bg-black text-white my-2"
          onChange={onInputChange}
          value={password}
          name="password"
          type="password"
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => {}}>Test</button>
      </header>
    </div>
  );
}

export default App;
