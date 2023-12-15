import { Component, JSXElement } from "solid-js";
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
  return (
    <main id={props.id} class="page">
      <Header page={props.id} />
      {props.protected ? (
        <ProtectedRoute>
          <div class="content">{props.children}</div>
        </ProtectedRoute>
      ) : (
        <div class="content">{props.children}</div>
      )}
    </main>
  );
};

export default PageLayout;
