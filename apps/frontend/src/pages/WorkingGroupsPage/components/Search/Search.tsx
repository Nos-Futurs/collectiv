import { Setter, type Component, Accessor } from "solid-js";
import "./Search.scss";
import { A } from "@solidjs/router";
import SwitchButton from "../../../../components/buttons/SwitchButton/SwitchButton";
import SearchBar from "../../../../components/SearchBar/SearchBar";

interface SearchProps {
  setMyGroups: Setter<boolean>;
  myGroups: Accessor<boolean>;
}

const Search: Component<SearchProps> = (props: SearchProps) => {
  return (
    <div id="search">
      <SwitchButton
        setValue={props.setMyGroups}
        value={props.myGroups}
        label={"Mes groupes"}
      />
      <SearchBar onClick={() => {}} />
    </div>
  );
};

export default Search;
