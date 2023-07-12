import { type Component } from "solid-js";
import searchIcon from "../../assets/search.svg"
import "./SearchBar.scss";

interface SearchBarProps {
  onClick: () => void;
}

const SearchBar: Component<SearchBarProps> = (props: SearchBarProps) => {
  return (
    <div id="search-bar">
      <input id="search-input" placeholder="Recherchez..." />
      <img id="search-button" onClick={props.onClick} src={searchIcon}/>
    </div>
  );
};

export default SearchBar;
