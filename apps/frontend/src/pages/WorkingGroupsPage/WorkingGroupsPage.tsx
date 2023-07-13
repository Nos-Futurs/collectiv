import { createSignal, type Component, For } from "solid-js";
import "./WorkingGroupsPage.scss";
import PageLayout from "../../layout/Layout";
import SwitchButton from "../../components/buttons/SwitchButton/SwitchButton";
import Search from "./components/Search/Search";
import GroupCard from "./components/GroupCard/GroupCard";

const LoginPage: Component = () => {
  const [myGroups, setMyGroups] = createSignal(false);

  const mockGroups = [
    {
      name: "chocolat",
    },
    {
      name: "the",
    },
    {
      name: "cafe",
    },
    {
      name: "mar",
    },
    {
      name: "sirop",
    },
  ];
  return (
    <PageLayout id="working-groups">
      <Search setMyGroups={setMyGroups} myGroups={myGroups} />
      <div id="divider" />
      <div id="groups">
        <For each={mockGroups} fallback={<div>Loading...</div>}>
          {(item) => <GroupCard name={item.name} />}
        </For>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
