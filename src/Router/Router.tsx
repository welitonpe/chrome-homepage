import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../pages/home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />
          <Route element={<div></div>} path="test" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
