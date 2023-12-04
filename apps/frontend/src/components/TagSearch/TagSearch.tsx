import { Component, For, Show, createEffect } from "solid-js";

import "./TagSearch.scss";
import { Tag } from "@collectiv/db-entities/backend";
import { createStore, produce } from "solid-js/store";

interface ActivitySearchProps {
  values: Tag[];
  options: Tag[];
  handleDeleteTag: (tag: Tag) => void;
  handleAddTag: (tag: Tag) => void;
}

const TagSearch: Component<ActivitySearchProps> = (
  props: ActivitySearchProps
) => {
  const [remainingTags, setRemainingTags] = createStore<{ tags: Tag[] }>({
    tags: props.options ? props.options : [],
  });

  return (
    <div id="tags-container">
      <Show when={props.values.length > 0} fallback={<></>}>
        <div id="tags-container-selected">
          <h1>Tags sélectionnés</h1>
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
        when={props.options.length > 0}
        fallback={<></>}
      >
        <div id="tags-container-options">
          <h1>Tags disponibles</h1>
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
