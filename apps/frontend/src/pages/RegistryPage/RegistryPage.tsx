import { For, type Component, createSignal, createResource, createEffect } from "solid-js";
import UserCard from "./components/UserCard/UserCard";
import PageLayout from "../../layout/Layout";
import profil from "../../assets/profil.svg";

import SearchBar from "../../components/SearchBar/SearchBar";
import "./RegistryPage.scss";
import { getUsers } from "../../api/userApi";
import SwitchButton from "../../components/buttons/SwitchButton/SwitchButton";
import SearchRegistry from "./components/SearchRegistry/SearchRegistry";
// Aller chercher les utilisateurs dans le back

const RegistryPage: Component = () => {
  const [users] = createResource(getUsers);
  const [searchQuery, setSearchQuery] = createSignal("");
  const [createGroup, setCreateGroup] = createSignal(false);
  const [selectedTags, setSelectedTags] = createSignal<string[]>([]);

  function handleSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    setSearchQuery(value);
  }

  createEffect(()=>{
    console.log(createGroup())
  })
  
  return (
    <PageLayout id="registry" protected={true}>
      <SearchRegistry createGroup={createGroup} setCreateGroup={setCreateGroup} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <div id="user-cards">
        <For each={users()} fallback={<div>Aucun utilisateur trouvé</div>}>
          {(user) => (
            <UserCard
              selectable={createGroup()}
              user={user}
              photo={profil}
            />
          )}
        </For>
      </div>
      {createGroup() && (
        <button id="create-group">Créer un groupe</button>
      )}
    </PageLayout>
  );
};

export default RegistryPage;
