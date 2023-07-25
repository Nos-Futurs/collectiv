import { Setter, type Component, Accessor, createSignal } from "solid-js";
import "./Search.scss";
import { A } from "@solidjs/router";
import SwitchButton from "../../../../components/buttons/SwitchButton/SwitchButton";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import TagSelector from "../../../../components/TagSelector/TagSelector";
import { Tag } from "@collectiv/shared-types";

interface SearchProps {
  setMyGroups: Setter<boolean>;
  myGroups: Accessor<boolean>;
}

const Search: Component<SearchProps> = (props: SearchProps) => {
  const [selectedTags, setSelectedTags] = createSignal<Array<Tag>>([]);
  return (
    <div id="search">
      <SwitchButton
        setValue={props.setMyGroups}
        value={props.myGroups}
        label={"Mes groupes uniquements"}
      />
      <SearchBar onClick={() => {}} />
      <TagSelector
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
    </div>
  );
};

export default Search;
