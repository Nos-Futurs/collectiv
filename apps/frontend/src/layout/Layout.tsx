import {
  Component,
  JSXElement,
} from "solid-js";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Layout.scss";
import ProtectedRoute from "./ProtectedRoute.jsx";

interface ProtectedProps {
  children: JSXElement;
}

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
