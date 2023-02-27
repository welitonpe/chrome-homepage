import * as Icon from "react-bootstrap-icons";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar_content">
        <div className="sidebar_content-icon">
          <Icon.LayoutTextWindow />
        </div>
        <div className="sidebar_content-icon">
          <Icon.Stack fill="#fff" />
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
