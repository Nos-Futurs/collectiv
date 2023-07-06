import { createSignal, type Component } from "solid-js";

import './SignUp.scss';
import { signup } from "../../api/authApi";
import { useNavigate } from "@solidjs/router";

const SignUp: Component = () => {
  const [lastName, setLastName] = createSignal("");
  const [firstName, setFirstName] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [email, setEmail] = createSignal("");
  const navigate = useNavigate();

  const handleSignupSubmit = () => {
      // navigate(AppRoutes.home.path);
      signup(email(), firstName(), lastName(), password());
      return false;
    
  };

  return (
    <div class="container">
        <div id="signup-form">
          <h2 class="login-title">Créez votre compte</h2>
          <div class="form-group">
            <label for="name">Nom</label>
            <input
              id="name"
              type="text"
              value={lastName()}
              onInput={(e: Event) => setLastName((e.target as HTMLInputElement).value)}
            />
          </div>
          <div class="form-group">
            <label for="first-name">Prénom</label>
            <input
              id="first-name"
              type="text"
              value={firstName()}
              onInput={(e: Event) => setFirstName((e.target as HTMLInputElement).value)}
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              value={email()}
              onInput={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
            />
          </div>
          <div class="form-group">
            <label for="new-password">Mot de passe</label>
            <input
              id="new-password"
              type="password"
              value={password()}
              onInput={(e: Event) => setPassword((e.target as HTMLInputElement).value)}
            />
          </div>
          <div class="button-container">
            <button type="submit" id="signup-button" onClick={handleSignupSubmit}>S'inscrire</button>
            <a id="cancel-button" href="/login">
              Annuler
            </a>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
