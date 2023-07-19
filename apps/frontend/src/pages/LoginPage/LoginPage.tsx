import { createSignal, type Component } from "solid-js";


import "./LoginPage.scss";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Login from "./components/Login/Login";
//import { useUserContext } from "../../context/authContext";

const LoginPage: Component = () => {
  const [forgetPassword, setForgetPassword] = createSignal(false);
  // const currentUser = useUserContext()
  // console.log(currentUser)

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
