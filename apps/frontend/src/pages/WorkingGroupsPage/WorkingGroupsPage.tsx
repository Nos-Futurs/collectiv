import { createSignal, type Component, For, createResource } from "solid-js";
import "./WorkingGroupsPage.scss";
import PageLayout from "../../layout/Layout";
import SwitchButton from "../../components/buttons/SwitchButton/SwitchButton";
import Search from "./components/Search/Search";
import GroupCard from "./components/GroupCard/GroupCard";
import { useUserContext } from "../../context/authContext";
import { useNavigate } from "@solidjs/router";

const LoginPage: Component = () => {
  const [myGroups, setMyGroups] = createSignal(false);
  const navigate = useNavigate()
  const [currentUser] = useUserContext()
  console.log("workingGroupPage", currentUser());

  if(!currentUser()){
    navigate('/login')
  }

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
