import { type Component } from "solid-js";
import profil from "../../assets/profil.svg";
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
      <button onClick={()=> {}} id="profil-button">
        <img alt="profil" id="profil" src={profil} />
      </button>
    </section>
  );
};

export default Header;
