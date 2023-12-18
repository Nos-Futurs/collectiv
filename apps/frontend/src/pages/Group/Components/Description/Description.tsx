import { Component, For, Show, createEffect } from "solid-js";

import "./Description.scss";
import { WorkingGroup } from "@collectiv/db-entities/frontend";
import TipTapEditor from "../../../../components/TipTapEditor/TipTapEditor.jsx";

interface DescriptionProps {
  group: WorkingGroup | undefined;
}

const Description: Component<DescriptionProps> = (props: DescriptionProps) => {
  return (
    <div id="description">
      <Show when={props.group !== undefined}>
        <TipTapEditor
          editable={true}
          owner={true}
          content={props.group?.name}
        />
      </Show>
    </div>
  );
};
export default Description;
