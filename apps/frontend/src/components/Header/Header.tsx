import { type Component } from "solid-js";
import profil from "../../assets/profil.svg";
import logo from "../../assets/logo.svg";
import "./Header.scss";
import { A } from "@solidjs/router";

interface HeaderProps {
  page: string;
}

const Header: Component<HeaderProps> = (props: HeaderProps) => {
  return (
    <section id="header">
      <img alt="logo" id="logo" src={logo} />
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
      <A
        href="/events"
        class={props.page == "events" ? "selected" : "unselected"}
      >
        Evénements
      </A>
      <A href="/my-profil" id="profil-button">
        <img alt="profil" id="profil" src={profil} />
      </A>
    </section>
  );
};

export default Header;
