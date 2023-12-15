import { Component, For, Show, createEffect } from "solid-js";

import "./GroupEvent.scss";
import { Event } from "@collectiv/db-entities/frontend";

interface ParticipantsProps {
  events: Event[] | undefined;
}

const Participants: Component<ParticipantsProps> = (
  props: ParticipantsProps
) => {
  return (
    <div id="group-events">
      <h1>Events</h1>
      <Show
        when={props.events && props.events.length > 0}
        fallback={<p>Aucun évenement pour l'instant</p>}
      >
        <div id="events-list">
          <For each={props.events} fallback={<div>Loading tags...</div>}>
            {(event) => (
              <p class="event">
                {event.name} {event.startDate.toISOString()}
              </p>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};
export default Participants;
