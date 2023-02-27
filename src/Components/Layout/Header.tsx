import Avatar from "../Avatar/Avatar";
import SearchBar from "../SearchBar";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="mr-3"></div>
      <div className="header_content">
        <div> </div>
        <SearchBar />
      </div>
      <Avatar imageUrl="https://avatars.githubusercontent.com/u/22142104?v=4" />
    </header>
  );
};
export default Header;
