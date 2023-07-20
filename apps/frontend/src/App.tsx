import { Route, Router, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import LoginPage from "./pages/LoginPage/LoginPage";
import registryPage from "./pages/RegistryPage/RegistryPage";
import SignUp from "./pages/SignUp/SignUp";
import workingGroupsPage from "./pages/WorkingGroupsPage/WorkingGroupsPage";
import Events from "./pages/Events/Events";
import MyProfil from "./pages/MyProfil/MyProfil";
import UserProfil from "./pages/UserProfil/UserProfil";
import Group from "./pages/Group/Group";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/registry" component={registryPage} />
        <Route path="/working-groups" component={workingGroupsPage} />
        <Route path="/my-profil" component={MyProfil} />
        <Route path="/users/:id" component={UserProfil}/>
        <Route path="/groups/:id" component={Group}/>
        <Route path="/events" component={Events} />
      </Routes>
    </Router>
  );
};

export default App;
