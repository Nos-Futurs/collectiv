import { For, type Component } from "solid-js";
import UserCard from "./components/UserCard/UserCard";
import PageLayout from "../../layout/Layout";

// Aller chercher les utilisateurs dans le back

const users = [
  { name: "chocolat" },
  { name: "chaud" },
  { name: "thé" },
  { name: "café" },
  { name: "liqueurs" },
];

const LoginPage: Component = () => {
  return (
    <PageLayout id="registry">
      <For each={users} fallback={<div>Loading...</div>}>
        {(item) => <UserCard name={item.name} />}
      </For>
    </PageLayout>
  );
};

export default LoginPage;
