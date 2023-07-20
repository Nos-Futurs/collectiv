import {
  createSignal,
  type Component,
} from "solid-js";

import "./MyProfil.scss";
import PageLayout from "../../layout/Layout";

const MyProfil: Component = () => {
  return (
    <PageLayout id="events" protected={true}>
      <h1 id="callendar">
        MON PROFIL
      </h1>
    </PageLayout>
  );
};

export default MyProfil;
