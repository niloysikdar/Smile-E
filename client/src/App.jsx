import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import JoinUs from "./pages/JoinUs/JoinUs";
import Partnership from "./pages/Partnership/Partnership";
import Agreement from "./pages/Agreement";
import FAQ from "./pages/FAQ/FAQ";
import { Logout } from "./pages/Logout";

const App = () => {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/joinus">
          <JoinUs />
        </Route>
        <Route path="/partnership">
          <Partnership />
        </Route>
        <Route path="/agreement">
          <Agreement />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </>
  );
};

export default App;
