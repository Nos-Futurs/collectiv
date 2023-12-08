import {
  createSignal,
  type Component,
} from "solid-js";

import "./UserProfil.scss";
import PageLayout from "../../layout/Layout";
import { useParams } from "@solidjs/router";

const UserProfil: Component = () => {
  const params = useParams<{ id: string }>();
  
  return (
    <PageLayout id="events" protected={true}>
      <h1 id="callendar">
        {`PROFIL ${params.id}`}
      </h1>
    </PageLayout>
  );
};

export default UserProfil;
