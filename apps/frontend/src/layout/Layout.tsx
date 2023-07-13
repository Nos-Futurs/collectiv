import { Component, JSXElement } from 'solid-js';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import "./Layout.scss"

interface HomeProps {
  id: string;
  children: JSXElement;
}

const PageLayout: Component<HomeProps> = (props: HomeProps) => (
  <main id={props.id} class="page">
    <Header page={props.id}/>
    <div class="content">{props.children}</div>
    <Footer />
  </main>
);

export default PageLayout;
