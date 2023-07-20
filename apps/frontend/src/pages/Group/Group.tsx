import {
  createSignal,
  type Component,
} from "solid-js";

import "./Group.scss";
import PageLayout from "../../layout/Layout";
import { useParams } from "@solidjs/router";

const Group: Component = () => {
  const params = useParams<{ id: string }>();
  return (
    <PageLayout id="events" protected={true}>
      <h1 id="callendar">
        {`Group ${params.id}`}
      </h1>
    </PageLayout>
  );
};

export default Group;
