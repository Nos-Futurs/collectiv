import { createSignal, type Component } from "solid-js";

const LoginPage: Component = () => {
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleSubmit = () => {};


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label id="username">Username</label>
        <input
          id="username"
          type="text"
          value={username()}
          onInput={() => {}}
        />
      </div>
      <div>
        <label id="password">Password</label>
        <input
          id="password"
          type="password"
          value={password()}
          onInput={() => {}}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginPage;
