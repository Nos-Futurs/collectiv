import {
  For,
  type Component,
  createSignal,
  createResource,
  createEffect,
  Show,
} from "solid-js";
import UserCard from "./components/UserCard/UserCard";
import PageLayout from "../../layout/Layout";
import profil from "../../assets/profil.svg";

import "./RegistryPage.scss";
import { getUsers } from "../../api/userApi";
import SearchRegistry from "./components/SearchRegistry/SearchRegistry";
import CreateGroupModal from "./components/CreateGroupModal/CreateGroupModal.jsx";
import { useUserContext } from "../../context/userContext.jsx";
import { User } from "@collectiv/db-entities/frontend";
import { createStore } from "solid-js/store";
// Aller chercher les utilisateurs dans le back

const RegistryPage: Component = () => {
  const [users] = createResource(getUsers);
  const [currentUser] = useUserContext();
  const [searchQuery, setSearchQuery] = createSignal("");
  const [createGroup, setCreateGroup] = createSignal(false);
  const [openModal, setOpenModal] = createSignal(false);
  const [participants, setParticipants] = createStore<{ users: User[] }>({
    users: [],
  });

  function handleSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    setSearchQuery(value);
  }

  createEffect(() => {
    //deepTrack
    for (const k in participants.users) {
      participants.users[k];
    }
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
                    setParticipants={setParticipants}
                    participants={participants}
                    user={user}
                    photo={profil}
                  />
                );
              }
            }}
          </For>
        </div>
        {createGroup() && (
          <button id="create-group" onClick={setOpenModal}>
            Créer un groupe
          </button>
        )}
        <Show when={openModal()}>
          <CreateGroupModal
            users={participants.users}
            setOpenModal={setOpenModal}
            currentUser={currentUser.user}
          />
        </Show>
      </section>
    </PageLayout>
  );
};

export default RegistryPage;
