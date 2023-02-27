import { ClayInput } from "@clayui/form";
import * as Icon from "react-bootstrap-icons";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <span>
        <input type="text" />
      </span>
      <span className="search-bar-icon">
        <Icon.Search />
      </span>
    </div>
  );
};
export default SearchBar;
