import { type Component, createResource, Show, For } from "solid-js";

import "./Admin.scss";
import PageLayout from "../../layout/Layout";
import { User } from "@collectiv/db-entities/frontend";
import { getUsers, updateUser } from "../../api/userApi.js";

interface PendingUserCardProps {
  user: User;
  refetchUsers: (
    info?: unknown
  ) => User[] | Promise<User[] | undefined> | null | undefined;
}

const PendingUserCard: Component<PendingUserCardProps> = (
  props: PendingUserCardProps
) => {
  if (!props.user.validated || !props.user.verified) {
    return (
      <div id="pending-card">
        <p>{`${props.user.firstName} ${props.user.lastName}`}</p>
        <p>{`Email : ${props.user.email}`}</p>
        <p>{`Region : ${props.user.region}`}</p>
        <p>{`Description :  ${props.user.description}`}</p>
        <button
          onClick={() => {
            updateUser({
              filter: { id: props.user.id },
              data: { validated: true, verified: true }, //TODO: Email process to verify
            }).then(() => props.refetchUsers());
          }}
        >
          Validate
        </button>
      </div>
    );
  }
};
const Admin: Component = () => {
  const [users, { refetch: refetchUsers }] = createResource(getUsers);
  return (
    <PageLayout id="admin" protected={true}>
      <h1 id="pending-users-title">Utilisateurs en attente</h1>
      <div id="pending-users">
        <Show when={!users.loading} fallback={<>loading ...</>}>
          <For each={users()} fallback={<div>Loading...</div>}>
            {(item) => (
              <PendingUserCard user={item} refetchUsers={refetchUsers} />
            )}
          </For>
        </Show>
      </div>
    </PageLayout>
  );
};

export default Admin;
