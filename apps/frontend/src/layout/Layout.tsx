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

interface ProtectedProps {
  children: JSXElement;
}

const ProtectedRoute: Component<ProtectedProps> = (props: ProtectedProps) => {
  const [currentUser] = createResource(getMe);
  const navigate = useNavigate();

  //TODO: This is not working when the children component calls createRessource - it seems to override de getMe Ressource
  createEffect(() => {
    if (!currentUser.loading) {
      const user = currentUser();
      if (!user) {
        navigate("/login");
      }
    }
  }, currentUser.loading);

  return (
    <Show when={!currentUser.loading} fallback={<div>loading...</div>}>
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
