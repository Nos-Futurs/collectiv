import {
  Component,
  JSXElement,
  Show,
  createEffect,
  createResource,
} from "solid-js";
import "./Layout.scss";
import { getMe } from "../api/userApi";
import { useNavigate } from "@solidjs/router";
import { useUserContext } from "../context/userContext";

interface ProtectedProps {
  children: JSXElement;
}

const ProtectedRoute: Component<ProtectedProps> = (props: ProtectedProps) => {
  const [currentUser, setCurrentUser] = useUserContext();
  const [getCurrentUser] = createResource(getMe);
  const navigate = useNavigate();

  //TODO: This is not working when the children component calls createRessource - it seems to override de getMe Ressource
  //https://github.com/solidjs/solid/issues/188
  createEffect(() => {
    if (!getCurrentUser.loading) {
      const user = getCurrentUser();
      setCurrentUser({user})
      if (!user) {
        navigate("/login");
      }
      ;
    }
  });

  return (
    <Show when={!getCurrentUser.loading} fallback={<div>loading...</div>}>
      {props.children}
    </Show>
  );
};

export default ProtectedRoute;