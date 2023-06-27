import { createSignal, type Component } from "solid-js";


import "./LoginPage.scss";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Login from "./components/Login/Login";

const LoginPage: Component = () => {
  const [forgetPassword, setForgetPassword] = createSignal(false);

  return (
    <div class="container">
      {forgetPassword() ? (
        <ForgetPassword setForgetPassword={setForgetPassword} />
      ) : (
        <Login setForgetPassword={setForgetPassword} />
      )}
    </div>
  );
};

export default LoginPage;
