import { type Component, createResource, Show } from "solid-js";

import "./Group.scss";
import PageLayout from "../../layout/Layout";
import { useParams } from "@solidjs/router";
import Participants from "./Components/Participants/Participants.jsx";
import { getGroup } from "../../api/workingGroupsApi.js";
import GroupEvent from "./Components/GroupEvent/GroupEvent.jsx";
import Documents from "./Components/Documents/Documents.jsx";

const Group: Component = () => {
  const params = useParams<{ id: string }>();
  const [group] = createResource(parseInt(params.id), getGroup);
  return (
    <PageLayout id="group-page" protected={true}>
      <Show when={!group.loading} fallback={<div>Loading group...</div>}>
        <div id="group">
          <div id="participants-container">
            <Participants
              participants={group()?.users}
              owner={group()?.owner}
            />
          </div>
          <div id="description">Description</div>
          <div id="events-container">
            <GroupEvent events={group()?.Event} />
          </div>
          <div id="documents-container">
            <Documents />
          </div>
        </div>
      </Show>
    </PageLayout>
  );
};

export default Group;
