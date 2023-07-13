import { For, type Component, createSignal } from "solid-js";
import UserCard from "./components/UserCard/UserCard";
import PageLayout from "../../layout/Layout";
import { useNavigate } from "@solidjs/router";

import "./RegistryPage.scss"
// Aller chercher les utilisateurs dans le back



const RegistryPage: Component = () => {
  const users=[{
    firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]
  }]
  const [searchQuery, setSearchQuery] = createSignal("");
  const [selectedTags, setSelectedTags] = createSignal<string[]>([]);


  function handleSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    setSearchQuery(value);
  }

  function toggleTag(tag: string) {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  }

  function isTagSelected(tag: string) {
    return selectedTags().includes(tag);
  }

  function filteredUsers() {
    if (!searchQuery() && selectedTags().length === 0) {
      return users;
    }
    const query = searchQuery().toLowerCase();
    return users.filter((user) => {
      const hasMatchingTag = selectedTags().some((tag) => user.tags.includes(tag));
      return (
        user.firstName.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query) ||
        hasMatchingTag
      );
    });
  }


  return (  
    <PageLayout id="registry-page" protected={true}>
      <header>

      </header>

      
    
      <div id="search-bar">
        <input
        id="search-input"
          type="text"
          value={searchQuery()}
          onInput={handleSearch}
          placeholder="Rechercher"
        />
      </div>
    

      <div id="tags-container">
        <For each={["Travail", "Lieu", "Sport"]} fallback={<div>Loading tags...</div>}>
          {(tag) => (
            <button
              id={isTagSelected(tag) ? "tag-selected" : "tag"}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          )}
        </For>
      </div>


      <div id="UserCards">
        <For each={filteredUsers()} fallback={<div>Aucun utilisateur trouvé</div>}>
          {(user) => (
            <UserCard
              firstName={user.firstName}
              lastName={user.lastName}
              photo={user.photo}
            />
          )}
        </For>
      </div>
      

      
      <footer>

      </footer>
    </PageLayout>
  );
};

export default RegistryPage;
