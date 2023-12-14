import { Component, For, Show, createEffect } from "solid-js";

import "./Participants.scss";
import { Tag, User } from "@collectiv/db-entities/frontend";
import { createStore, produce } from "solid-js/store";

interface ParticipantsProps {
  participants: User[] | undefined;
  owner: User | undefined;
}

const Participants: Component<ParticipantsProps> = (
  props: ParticipantsProps
) => {
  console.log(props.owner);
  return (
    <div id="participants">
      <Show when={props.owner} fallback={<></>}>
        <div id="referents">
          <h1>Référent</h1>
          <a class="owner" href={`/users/${props.owner?.id}`}>
            {props.owner?.firstName} {props.owner?.lastName}
          </a>
        </div>
      </Show>
      <Show
        when={props.participants && props.participants.length > 0}
        fallback={<></>}
      >
        <div id="users">
          <h1>Participants</h1>
          <div id="users-list">
            <For
              each={props.participants}
              fallback={<div>Loading tags...</div>}
            >
              {(user) => {
                if (!props.owner || props.owner.id !== user.id) {
                  return (
                    <a class="user" href={`/users/${user.id}`}>
                      {user.firstName} {user.lastName}
                    </a>
                  );
                }
              }}
            </For>
          </div>
        </div>
      </Show>
    </div>
  );
};
export default Participants;
