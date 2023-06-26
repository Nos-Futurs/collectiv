import { createSignal, createEffect, type Component } from "solid-js";

import './LoginPage.css'

const LoginPage: Component = () => {
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [showSignupForm, setShowSignupForm] = createSignal(false);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = createSignal(false);

  const handleLoginSubmit = () => {
    // Gérer la soumission du formulaire de connexion ici
  };

  const handleSignupSubmit = () => {
    // Gérer la soumission du formulaire d'inscription ici
  };

  const handleShowSignupForm = () => {
    setShowSignupForm(true);
  };

  const handleHideSignupForm = () => {
    setShowSignupForm(false);
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordForm(true);
  };

  const handleForgotPasswordSubmit = () => {
    // Gérer la soumission du formulaire de réinitialisation du mot de passe ici
  };

  createEffect(() => {
    // Réinitialiser les champs du formulaire lorsqu'il est masqué
    if (!showSignupForm()) {
      setUsername("");
      setPassword("");
      setEmail("");
    }
  });

  return (
    <div class="container">
      <form class={`login-form ${showSignupForm() || showForgotPasswordForm() ? 'hidden' : ''}`} onSubmit={handleLoginSubmit}>
        <h2 class="login-title">Identifiez-vous</h2>
        <div class="form-group">
          <label for="username">Nom d'utilisateur</label>
          <input
            id="username"
            type="text"
            value={username()}
            onInput={(e: Event) => setUsername((e.target as HTMLInputElement).value)}
          />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            value={password()}
            onInput={(e: Event) => setPassword((e.target as HTMLInputElement).value)}
          />
          <div class="forgot-password-link" onClick={handleForgotPassword}>
            Mot de passe oublié ?
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="login-button">S'identifier</button>
          <div class="form-group button-container">
            <button type="button" class="create-account-button" onClick={handleShowSignupForm}>
              Vous n'avez pas de compte ?
            </button>
          </div>
        </div>
      </form>

      {showSignupForm() && (
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
          <div class="form-group">
            <button type="submit" class="signup-button">S'inscrire</button>
            <button type="button" class="cancel-button" onClick={handleHideSignupForm}>
              Annuler
            </button>
          </div>
        </form>
      )}

      {showForgotPasswordForm() && (
        <form class="forgot-password-form" onSubmit={handleForgotPasswordSubmit}>
          <h2 class="forgot-password-title">Mot de passe oublié</h2>
          Entrez votre adresse e-mail ou votre numéro de téléphone, et nous vous enverrons un lien pour récupérer votre compte.
          <div class="form-group">
            <label for="email" class="email_address">Adresse e-mail ou n° de téléphone</label>
            <input
              id="email"
              type="email"
              value={email()}
              onInput={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
            />
          </div>
          <div class="form-group">
            <button type="submit" class="reset-password-button">Envoyer un lien de connexion</button>
            <button type="button" class="cancel-button" onClick={() => setShowForgotPasswordForm(false)}>
              Annuler
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
