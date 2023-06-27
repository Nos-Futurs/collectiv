import { createSignal, type Component } from "solid-js";

import './SignUp.scss';

const SignUp: Component = () => {
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [email, setEmail] = createSignal("");

  const handleSignupSubmit = () => {
    // Gérer la soumission du formulaire d'inscription ici
  };

  return (
    <div class="container">
        <form class="signup-form" onSubmit={handleSignupSubmit}>
          <h2 class="login-title">Créez votre compte</h2>
          <div class="form-group">
            <label for="new-username">Nom d'utilisateur</label>
            <input
              id="new-username"
              type="text"
              value={username()}
              onInput={(e: Event) => setUsername((e.target as HTMLInputElement).value)}
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
            <button type="submit" id="signup-button">S'inscrire</button>
            <a id="cancel-button" href="/login">
              Annuler
            </a>
          </div>
        </form>
    </div>
  );
};

export default SignUp;
