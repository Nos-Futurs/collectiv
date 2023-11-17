import {
  createSignal,
  type Component,
  createResource,
  Show,
  For,
} from "solid-js";

import "./Admin.scss";
import PageLayout from "../../layout/Layout";
import { getPendingUsers } from "../../api/pendingUserApi";
import { PendingUser } from "@collectiv/shared-types";

interface PendingUserCardProps {
  pendingUser: PendingUser;
}

const PendingUserCard: Component<PendingUserCardProps> = (
  props: PendingUserCardProps
) => {
  return (
    <div id="pending-card">
      <p>{`${props.pendingUser.firstName} ${props.pendingUser.lastName}`}</p>
      <p>{`Email : ${props.pendingUser.email}`}</p>
      <p>{`Region : ${props.pendingUser.region}`}</p>
      <p>{`Structure :  ${props.pendingUser.structure}`}</p>
      <p>{`Description :  ${props.pendingUser.description}`}</p>
      <button>Validate</button>
    </div>
  );
};
const Admin: Component = () => {
  const [pendingUsers] = createResource(getPendingUsers);
  return (
    <PageLayout id="admin" protected={true}>
      <h1 id="pending-users-title">Utilisateurs en attente</h1>
      <div id="pending-users">
        <Show when={!pendingUsers.loading} fallback={<>loading ...</>}>
          <For each={pendingUsers()} fallback={<div>Loading...</div>}>
            {(item, index) => <PendingUserCard pendingUser={item} />}
          </For>
        </Show>
      </div>
    </PageLayout>
  );
};

export default Admin;
