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

  createEffect(() => {
    if (!currentUser.loading && !currentUser()) {
      navigate("/login");
    }
  });

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
      <ProtectedRoute>
        <main id={props.id} class="page">
          <Header page={props.id} />
          <div class="content">{props.children}</div>
          <Footer />
        </main>
      </ProtectedRoute>
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
