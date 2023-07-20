import { createSignal, type Component, For, createResource } from "solid-js";
import "./WorkingGroupsPage.scss";
import PageLayout from "../../layout/Layout";
import Search from "./components/Search/Search";
import GroupCard from "./components/GroupCard/GroupCard";
import { useNavigate } from "@solidjs/router";
import { getGroups } from "../../api/workingGroupsApi";

const LoginPage: Component = () => {
  const [myGroups, setMyGroups] = createSignal(false);
  const [groups] = createResource(getGroups)

  return (
    <PageLayout id="working-groups" protected={true}>
      <Search setMyGroups={setMyGroups} myGroups={myGroups} />
      <div id="divider" />
      <div id="groups">
        <For each={groups()} fallback={<div>Loading...</div>}>
          {(item) => <GroupCard name={item.name} />}
        </For>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
