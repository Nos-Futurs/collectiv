import { Setter, type Component, createSignal } from "solid-js";

import "./Login.scss";
import Input from "../../../../components/Input/Input";
import { login } from "../../../../api/authApi";
import { useNavigate } from "@solidjs/router";
import { createStore } from "solid-js/store";

interface LoginProps {
  setForgetPassword: Setter<boolean>;
}

const Login: Component<LoginProps> = (props: LoginProps) => {
  const [creadential, setCredential] = createStore({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    login(creadential).then(() => {
      navigate("/registry");
    });
    // Gérer la soumission du formulaire de connexion ici
  };

  return (
    <div id="login-form">
      <h2 id="login-title">Identifiez-vous</h2>
      <Input
        id="username"
        type="email"
        label="Email"
        value={creadential.username}
        setValue={(value: string) => {
          setCredential("username", value);
        }}
      />
      <Input
        id="password"
        type="password"
        label="Mot de passe"
        value={creadential.password}
        setValue={(value: string) => {
          setCredential("password", value);
        }}
      />
      <div class="forgot-password-link" onClick={props.setForgetPassword}>
        Mot de passe oublié ?
      </div>
      <div id="button-container-login">
        <button type="submit" class="login-button" onClick={handleLoginSubmit}>
          S'identifier
        </button>
        <a type="button" class="create-account-button" href="/signup">
          Vous n'avez pas de compte ?
        </a>
      </div>
    </div>
  );
};

export default Login;
