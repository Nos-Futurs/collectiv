import { For, type Component, createResource, createEffect } from "solid-js";
import UserCard from "./components/UserCard/UserCard";
import PageLayout from "../../layout/Layout";
import { useUserContext } from "../../context/authContext";
import { getMe } from "../../api/userApi";
import { useNavigate } from "@solidjs/router";

// Aller chercher les utilisateurs dans le back

const users = [
  { name: "chocolat" },
  { name: "chaud" },
  { name: "thé" },
  { name: "café" },
  { name: "liqueurs" },
];

const LoginPage: Component = () => {
  const navigate = useNavigate()
  const [currentUser] = useUserContext()
  console.log("RegistryPage", currentUser());

  if(!currentUser()){
    navigate('/login')
  }
  return (
    <PageLayout id="registry">
      <For each={users} fallback={<div>Loading...</div>}>
        {(item) => <UserCard name={item.name} />}
      </For>
    </PageLayout>
  );
};

export default LoginPage;
