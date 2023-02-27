import { Outlet, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="d-flex app">
      <Sidebar />
      <div className="d-flex flex-column w-100">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
