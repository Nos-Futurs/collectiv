import { createSignal, type Component, createEffect } from "solid-js";
import "./Header.scss";
import { A } from "@solidjs/router";


interface HeaderProps {
  page: string;
}

const Header: Component<HeaderProps> = (props: HeaderProps) => {
  return (
    <section id="header">
      <A
        href="/registry"
        class={props.page == "registry" ? "selected" : "unselected"}
      >
        Annuaire
      </A>
      <A
        href="/working-groups"
        class={props.page == "working-groups" ? "selected" : "unselected"}
      >
        Groupes de travail
      </A>
    </section>
  );
};

export default Header;
