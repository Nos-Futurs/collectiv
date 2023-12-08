import { createSignal, type Component, For, createResource } from "solid-js";
import "./WorkingGroupsPage.scss";
import PageLayout from "../../layout/Layout";
import Search from "./components/Search/Search";
import GroupCard from "./components/GroupCard/GroupCard";
import { getGroups } from "../../api/workingGroupsApi";
import { useUserContext } from "../../context/userContext";

const LoginPage: Component = () => {
  const [myGroups, setMyGroups] = createSignal(false);
  const [currentUser] = useUserContext();
  const [groups] = createResource(getGroups);

  return (
    <PageLayout id="working-groups" protected={true}>
      <section id="group-container">
        <Search setMyGroups={setMyGroups} myGroups={myGroups} />
        <div id="groups">
          <For each={groups()} fallback={<div>Loading...</div>}>
            {(item) => <GroupCard group={item} userId={currentUser.user?.id} />}
          </For>
        </div>
      </section>
    </PageLayout>
  );
};

export default LoginPage;
