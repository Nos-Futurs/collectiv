import { Setter, createSignal, type Component } from "solid-js";

import "./ForgetPassword.scss";

interface ForgetPasswordProps {
  setForgetPassword: Setter<boolean>;
}

const ForgetPassword: Component<ForgetPasswordProps> = (
  props: ForgetPasswordProps
) => {
  const [email, setEmail] = createSignal("");
  const handleForgotPasswordSubmit = () => {
    // Gérer la soumission du formulaire de réinitialisation du mot de passe ici
  };

  return (
    <form class="forgot-password-form" onSubmit={handleForgotPasswordSubmit}>
      <h2 class="forgot-password-title">Mot de passe oublié</h2>
      <p>Entrez votre adresse e-mail ou votre numéro de téléphone, et nous vous
      enverrons un lien pour récupérer votre compte.</p>
      <div class="form-group">
        <label for="email" class="email_address">
          Adresse e-mail ou n° de téléphone
        </label>
        <input
          id="email"
          type="email"
          value={email()}
          onInput={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
        />
      </div>
      <div class="form-group">
        <button type="submit" class="reset-password-button">
          Envoyer un lien de connexion
        </button>
        <button
          type="button"
          class="cancel-button"
          onClick={() => props.setForgetPassword(false)}
        >
          Annuler
        </button>
      </div>
    </form>
  );
};

export default ForgetPassword;
