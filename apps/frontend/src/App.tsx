import { Route, Router, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import LoginPage from "./pages/LoginPage/LoginPage";
import registryPage from "./pages/RegistryPage/RegistryPage";
import SignUp from "./pages/SignUp/SignUp";
import workingGroupsPage from "./pages/WorkingGroupsPage/WorkingGroupsPage";
import { UserProvider } from "./context/authContext";

const App: Component = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/registry" component={registryPage} />
          <Route path="/working-groups" component={workingGroupsPage} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
