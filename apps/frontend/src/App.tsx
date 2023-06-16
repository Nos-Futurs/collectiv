import { Route, Router, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import LoginPage from "./pages/LoginPage/LoginPage";
import registryPage from "./pages/RegistryPage/RegistryPage";
import workingGroupsPage from "./pages/WorkingGroupsPage/WorkingGroupsPage";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={LoginPage} /> 
        <Route path="/registry" component={registryPage} /> 
        <Route path="/working-groups" component={workingGroupsPage} /> 
      </Routes>
    </Router>
  );
};

export default App;
