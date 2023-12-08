import { createSignal, type Component, Show } from "solid-js";

import "./MyProfil.scss";
import PageLayout from "../../layout/Layout";
import { useUserContext } from "../../context/userContext.jsx";
import MyProfilItem from "./components/MyProfilItem.jsx";

const MyProfil: Component = () => {
  const [currentUser] = useUserContext();

  return (
    <PageLayout id="my-profil" protected={true}>
      <div id="information-container">
        <h1 id="my-information">Mes informations</h1>
        <Show when={currentUser.user} fallback={<>loading ...</>}>
          <div id="information">
            <MyProfilItem type="Nom" content={currentUser.user?.lastName} />
            <MyProfilItem type="Prénom" content={currentUser.user?.firstName} />
            <MyProfilItem type="Role" content={currentUser.user?.role} disabled={true}/>
            <MyProfilItem type="Région" content={currentUser.user?.region} />
            <MyProfilItem
              type="Description"
              content={currentUser.user?.description}
            />
          </div>
          <button>Enregistrer les modifications</button>
        </Show>
      </div>
    </PageLayout>
  );
};

export default MyProfil;
