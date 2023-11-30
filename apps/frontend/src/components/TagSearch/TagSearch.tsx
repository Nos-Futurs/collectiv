import {
  Component,
  For,
  JSX,
  Show,
  createEffect,
  createSignal,
} from "solid-js";

import "./TagSearch.scss";
import { Tag } from "@collectiv/db-entities/backend";
import { createStore, produce } from "solid-js/store";

interface ActivitySearchProps {
  values: Tag[];
  options: Tag[] | undefined;
  handleDeleteTag: (tag: Tag) => void;
  handleAddTag: (tag: Tag) => void;
}

const TagSearch: Component<ActivitySearchProps> = (
  props: ActivitySearchProps
) => {
  const [remainingTags, setRemainingTags] = createStore<{ tags: Tag[] }>({
    tags: props.options ? props.options : [],
  });

  createEffect(() => {
    for (let k = 0; k < props.values.length; k++) {
      let index = remainingTags.tags.findIndex((item) => {
        return item.id === props.values[k].id;
      });
      setRemainingTags(
        produce((draft) => {
          // Add the item if it doesn't exist
          if (index === -1) {
            draft.tags.push(props.values[k]);
          }
        })
      );
    }
  });

  return (
    <div id="tags-container">
      <Show when={props.values.length > 0} fallback={<></>}>
        <div id="tags-container-selected">
          <For each={props.values} fallback={<div>Loading tags...</div>}>
            {(tag) => (
              <button
                class="tag-selected"
                onClick={() => {
                  props.handleDeleteTag(tag);
                }}
              >
                {tag.name}
              </button>
            )}
          </For>
        </div>
      </Show>
      <Show
        when={remainingTags.tags !== undefined && remainingTags.tags.length > 0}
        fallback={<></>}
      >
        <div id="tags-container-options">
          <For each={props.options} fallback={<div>Loading tags...</div>}>
            {(tag) => {
              if (!props.values.includes(tag)) {
                return (
                  <button
                    class="tag"
                    onClick={() => {
                      props.handleAddTag(tag);
                    }}
                  >
                    {tag.name}
                  </button>
                );
              }
            }}
          </For>
        </div>
      </Show>
    </div>
  );
};
export default TagSearch;
