import { Setter, type Component, createSignal } from "solid-js";

import "./Login.scss";
import Input from "../../../../components/Input/Input";
import { login } from "../../../../api/authApi";
import { useNavigate } from "@solidjs/router";


interface LoginProps {
  setForgetPassword: Setter<boolean>;
}

const Login: Component<LoginProps> = (props: LoginProps) => {
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    login(username(), password()).then(() => {
      navigate("/registry");
    });
    // Gérer la soumission du formulaire de connexion ici
  };

  return (
    <div class="container">
      <div id="login-form">
        <h2 class="login-title">Identifiez-vous</h2>
        <Input
          id="username"
          type="email"
          label="Email"
          value={username}
          setValue={setUsername}
        />
        <Input
          id="password"
          type="password"
          label="Mot de passe"
          value={password}
          setValue={setPassword}
        />
        <div class="forgot-password-link" onClick={props.setForgetPassword}>
          Mot de passe oublié ?
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="login-button"
            onClick={handleLoginSubmit}
          >
            S'identifier
          </button>
          <div class="form-group button-container">
            <a type="button" class="create-account-button" href="/signup">
              Vous n'avez pas de compte ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
