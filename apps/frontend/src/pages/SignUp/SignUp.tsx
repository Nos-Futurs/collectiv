import { createSignal, type Component } from "solid-js";

import "./SignUp.scss";
import { useNavigate } from "@solidjs/router";
import Input from "../../components/Input/Input";
import { createStore } from "solid-js/store";
import { createPendingUser } from "../../api/userApi";

const SignUp: Component = () => {
  const [form, setForm] = createStore({
    lastName: "",
    firstName: "",
    structure: "",
    email: "",
    region: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleSignupSubmit = () => {
    createPendingUser(form).then(() => {
      navigate("/login");
    });
    return false;
  };

  return (
    <section id="section-signup">
      <div id="signup-form">
        <h2 id="login-title">Créez votre compte</h2>
        <Input
          label="Nom"
          id="lastName"
          value={form.lastName}
          setValue={(value: string) => {
            setForm("lastName", value);
          }}
        />
        <Input
          label="Prénom"
          id="firstName"
          value={form.firstName}
          setValue={(value: string) => {
            setForm("firstName", value);
          }}
        />
        <Input
          label="Email"
          id="email"
          value={form.email}
          setValue={(value: string) => {
            setForm("email", value);
          }}
          type="email"
        />
        <Input
          label="Votre Structure"
          id="structure"
          value={form.structure}
          setValue={(value: string) => {
            setForm("structure", value);
          }}
        />
        <Input
          label="Région"
          id="area"
          value={form.region}
          setValue={(value: string) => {
            setForm("region", value);
          }}
        />
        <Input
          label="Description"
          id="description"
          value={form.description}
          setValue={(value: string) => {
            setForm("description", value);
          }}
          largeInput={true}
        />
        <div id="button-container">
          <button type="submit" id="signup-button" onClick={handleSignupSubmit}>
            S'inscrire
          </button>
          <a id="cancel-button" href="/login">
            Annuler
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
