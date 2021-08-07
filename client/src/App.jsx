import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Hiring from "./pages/Hiring/Hiring";
import Partnership from "./pages/Partnership/Partnership";
import FAQ from "./pages/FAQ/FAQ";

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
        <Route path="/hiring">
          <Hiring />
        </Route>
        <Route path="/partnership">
          <Partnership />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
      </Switch>
    </>
  );
};

export default App;
