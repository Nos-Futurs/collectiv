import { For, type Component, createSignal } from "solid-js";
import UserCard from "./components/UserCard/UserCard";
import PageLayout from "../../layout/Layout";

import SearchBar from "../../components/SearchBar/SearchBar"
import "./RegistryPage.scss"
// Aller chercher les utilisateurs dans le back



const RegistryPage: Component = () => {
  const users=[{
    firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"]},
    {firstName: "John", lastName: "Kane", photo:"", tags: ["Travail", "Lieu"],
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
      <div id="search-bar">
        <SearchBar 
        onClick={() => {}} />
      </div>
      {/* <input
          value={searchQuery()} 
          onInput={handleSearch}
          /> */}
      
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
    </PageLayout>
  );
};

export default RegistryPage;
