import {
  type Component,
  createResource,
  Accessor,
  Setter,
  Show,
  For,
  createSignal,
} from "solid-js";
import SwitchButton from "../../../../components/buttons/SwitchButton/SwitchButton";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import "./SearchRegistry.scss";
import TagSearch from "../../../../components/TagSearch/TagSearch.jsx";
import { getTags } from "../../../../api/tagApi.js";
import { Tag } from "@collectiv/db-entities/frontend";
import { createStore, produce } from "solid-js/store";

// Aller chercher les utilisateurs dans le back

interface SearchRegistryProps {
  setCreateGroup: Setter<boolean>;
  createGroup: Accessor<boolean>;
}

const SearchRegistry: Component<SearchRegistryProps> = (
  props: SearchRegistryProps
) => {
  const [selectedTags, setSelectedTags] = createStore<{ tags: Tag[] }>({
    tags: [],
  });
  const [tags] = createResource(getTags);

  const handleAddTag = (tag: Tag): void => {
    let index: number;
    index = selectedTags.tags.findIndex((item) => {
      return item.id === tag.id;
    });
    setSelectedTags(
      produce((draft) => {
        // Add the item if it doesn't exist
        if (index === -1) {
          draft.tags.push(tag);
        }
      })
    );
  };

  const handleDeleteTag = (tag: Tag): void => {
    let index: number;
    index = selectedTags.tags.findIndex((item) => {
      return item.id === tag.id;
    });
    setSelectedTags(
      produce((draft) => {
        if (index > -1) {
          // Remove the item if it exists
          draft.tags.splice(index, 1);
        }
      })
    );
  };

  return (
    <div id="search-section">
      <div id="group-creation-container">
        <h1>Créer un groupe</h1>
        <SwitchButton
          setValue={props.setCreateGroup}
          value={props.createGroup}
          label={"Créer un groupe"}
        />
      </div>
      <div id="search-container">
        <h1>Chercher un membre</h1>
        <SearchBar onClick={() => {}} />
      </div>
      <div id="tag-container">
        <Show when={!tags.loading} fallback={<>Loading tags...</>}>
          <p></p>
          <TagSearch
            values={selectedTags.tags}
            options={tags()}
            handleDeleteTag={handleDeleteTag}
            handleAddTag={handleAddTag}
          />
        </Show>
      </div>
    </div>
  );
};

export default SearchRegistry;
