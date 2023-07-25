import {
  Component,
  JSXElement,
  Show,
  createEffect,
  createResource,
} from "solid-js";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
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
  createEffect(() => {
    if (!getCurrentUser.loading) {
      const user = getCurrentUser();
      setCurrentUser(user);
      if (!user) {
        navigate("/login");
      }
    }
  }, getCurrentUser.loading);

  return (
    <Show when={!getCurrentUser.loading} fallback={<div>loading...</div>}>
      {props.children}
    </Show>
  );
};

interface HomeProps {
  id: string;
  protected: boolean;
  children: JSXElement;
}

const PageLayout: Component<HomeProps> = (props: HomeProps) => {
  if (props.protected) {
    return (
      <main id={props.id} class="page">
        <Header page={props.id} />
        <ProtectedRoute>
          <div class="content">{props.children}</div>
        </ProtectedRoute>
      </main>
    );
  }
  return (
    <main id={props.id} class="page">
      <Header page={props.id} />
      <div class="content">{props.children}</div>
      <Footer />
    </main>
  );
};

export default PageLayout;
