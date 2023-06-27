import {
  Setter,
  type Component
} from "solid-js";

import { createStore } from 'solid-js/store';

import "./Login.scss";

interface LoginProps {
  setForgetPassword: Setter<boolean>
}

const Login: Component<LoginProps> = (props: LoginProps) => {
  const [loginForm, setLoginForm] = createStore({ username: "", password: "" });
  const handleLoginSubmit = () => {
    // Gérer la soumission du formulaire de connexion ici
  };

  return (
    <div class="container">
      <form
        id="login-form"
        onSubmit={handleLoginSubmit}
      >
        <h2 class="login-title">Identifiez-vous</h2>
        <div class="form-group">
          <label for="username">Nom d'utilisateur</label>
          <input
            id="username"
            type="text"
            value={loginForm.username}
            onInput={(e: Event) =>
              setLoginForm({username: (e.target as HTMLInputElement).value})
            }
          />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            value={loginForm.password}
            onInput={(e: Event) =>
              setLoginForm({password: (e.target as HTMLInputElement).value})
            }
          />
          <div class="forgot-password-link" onClick={props.setForgetPassword}>
            Mot de passe oublié ?
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="login-button">
            S'identifier
          </button>
          <div class="form-group button-container">
            <a type="button" class="create-account-button" href="/signup">
              Vous n'avez pas de compte ?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
