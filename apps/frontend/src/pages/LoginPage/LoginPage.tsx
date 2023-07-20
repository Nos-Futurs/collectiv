import {
  createSignal,
  type Component,
  createResource,
  createEffect,
} from "solid-js";

import "./LoginPage.scss";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Login from "./components/Login/Login";
import { useUserContext } from "../../context/authContext";
import { useNavigate } from "@solidjs/router";
import { getMe } from "../../api/userApi";

const LoginPage: Component = () => {
  const navigate = useNavigate();
  const [forgetPassword, setForgetPassword] = createSignal(false);
  const [currentUser, setCurrentUser] = useUserContext();
  const [currentUserGetMe] = createResource(getMe);
  
  createEffect(async () => {
    setCurrentUser(await currentUserGetMe());
    console.log("LoginPage", currentUser());
  });

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
