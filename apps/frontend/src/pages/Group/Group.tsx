import { createSignal, type Component } from "solid-js";

import "./Group.scss";
import PageLayout from "../../layout/Layout";
import { useParams } from "@solidjs/router";

const Group: Component = () => {
  const params = useParams<{ id: string }>();
  return (
    <PageLayout id="group-page" protected={true}>
      <div id="group">
        <div id="description">Description</div>
        <div id="chat">Chat</div>
        <div id="participants">Participants</div>
        <div id="documents">Documents partagés</div>
        <div id="events">Evénement</div>
      </div>
    </PageLayout>
  );
};

export default Group;
