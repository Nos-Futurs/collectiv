import { createSignal, type Component } from "solid-js";

import "./SignUp.scss";
import { signup } from "../../api/authApi";
import { useNavigate } from "@solidjs/router";
import Input from "../../components/Input/Input";
import { useUserContext } from "../../context/authContext";

const SignUp: Component = () => {
  const [lastName, setLastName] = createSignal("");
  const [firstName, setFirstName] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [region, setRegion] = createSignal("");
  const [description, setDescription] = createSignal("");
  const navigate = useNavigate();

  const currentUser = useUserContext()
  console.log(currentUser)

  const handleSignupSubmit = () => {
    signup(
      email(),
      firstName(),
      lastName(),
      password(),
      region(),
      description()
    ).then(() => {
      navigate("/login");
    });
    return false;
  };

  return (
    <div class="container">
      <div id="signup-form">
        <h2 class="login-title">Créez votre compte</h2>
        <Input
          label="Nom"
          id="lastName"
          value={lastName}
          setValue={setLastName}
        />
        <Input
          label="Prénom"
          id="firstName"
          value={firstName}
          setValue={setFirstName}
        />
        <Input
          label="Email"
          id="email"
          value={email}
          setValue={setEmail}
          type="email"
        />
        <Input
          label="Mot de passe"
          id="password"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <Input label="Région" id="area" value={region} setValue={setRegion} />
        <Input
          label="Description"
          id="description"
          value={description}
          setValue={setDescription}
          largeInput={true}
        />
        <div class="button-container">
          <button type="submit" id="signup-button" onClick={handleSignupSubmit}>
            S'inscrire
          </button>
          <a id="cancel-button" href="/login">
            Annuler
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
