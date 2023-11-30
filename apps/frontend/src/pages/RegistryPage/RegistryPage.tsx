import {
  For,
  type Component,
  createSignal,
  createResource,
  createEffect,
} from "solid-js";
import UserCard from "./components/UserCard/UserCard";
import PageLayout from "../../layout/Layout";
import profil from "../../assets/profil.svg";

import "./RegistryPage.scss";
import { getUsers } from "../../api/userApi";
import SearchRegistry from "./components/SearchRegistry/SearchRegistry";
// Aller chercher les utilisateurs dans le back

const RegistryPage: Component = () => {
  const [users] = createResource(getUsers);
  const [searchQuery, setSearchQuery] = createSignal("");
  const [createGroup, setCreateGroup] = createSignal(false);

  function handleSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    setSearchQuery(value);
  }

  createEffect(() => {
    console.log(createGroup());
  });

  return (
    <PageLayout id="registry" protected={true}>
      <section id="registry-container">
        <SearchRegistry
          createGroup={createGroup}
          setCreateGroup={setCreateGroup}
        />
        <div id="user-cards">
          <For each={users()} fallback={<div>Aucun utilisateur trouvé</div>}>
            {(user) => {
              if (user.validated && user.verified) {
                return (
                  <UserCard
                    selectable={createGroup()}
                    user={user}
                    photo={profil}
                  />
                );
              }
            }}
          </For>
        </div>
        {createGroup() && <button id="create-group">Créer un groupe</button>}
      </section>
    </PageLayout>
  );
};

export default RegistryPage;
