import {
  type Component,
  createResource,
  Show,
  createEffect,
} from "solid-js";

import "./UserProfil.scss";
import PageLayout from "../../layout/Layout";
import { useParams } from "@solidjs/router";
import { getUser } from "../../api/userApi.js";
import MyProfilItem from "../MyProfil/components/MyProfilItem.jsx";

const UserProfil: Component = () => {
  const params = useParams<{ id: string }>();
  if (!parseInt(params.id)) {
    <div>User not found</div>
  }
  const [user] = createResource(parseInt(params.id), getUser)

  return (
    <PageLayout id="user-profil" protected={true}>
      <div id="information-container">
        <h1 id="my-information">Mes informations</h1>
        <Show when={!user.loading} fallback={<>loading ...</>}>
          <div id="information">
            <MyProfilItem type="Nom" content={user()?.lastName} disabled={true}/>
            <MyProfilItem type="Prénom" content={user()?.firstName} disabled={true}/>
            <MyProfilItem type="Role" content={user()?.role} disabled={true}/>
            <MyProfilItem type="Région" content={user()?.region} disabled={true}/>
            <MyProfilItem
              type="Description"
              content={user()?.description}
              disabled={true}
            />
          </div>
        </Show>
      </div>
    </PageLayout>
  );
};

export default UserProfil;
