import {
  For,
  type Component,
  createSignal,
  createResource,
  Accessor,
  Setter,
} from "solid-js";
import SwitchButton from "../../../../components/buttons/SwitchButton/SwitchButton";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import "./SearchRegistry.scss";

// Aller chercher les utilisateurs dans le back

interface SearchRegistryProps {
  setCreateGroup: Setter<boolean>;
  createGroup: Accessor<boolean>;
  selectedTags: Accessor<string[]>;
  setSelectedTags: Setter<string[]>;
}

const SearchRegistry: Component<SearchRegistryProps> = (
  props: SearchRegistryProps
) => {
  function toggleTag(tag: string) {
    props.setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  }

  function isTagSelected(tag: string) {
    return props.selectedTags().includes(tag);
  }

  return (
    <div id="search-section">
      <SwitchButton
        setValue={props.setCreateGroup}
        value={props.createGroup}
        label={"Créer un groupe"}
      />
      <SearchBar onClick={() => {}} />
      <div id="tags-container">
        <For
          each={["Travail", "Lieu", "Sport"]}
          fallback={<div>Loading tags...</div>}
        >
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
      <div id="divider" />
    </div>
  );
};

export default SearchRegistry;
