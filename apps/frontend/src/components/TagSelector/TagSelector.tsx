import {
  createResource,
  type Component,
  Show,
  For,
  Accessor,
  Setter,
  createEffect,
} from "solid-js";
import "./TagSelector.scss";
import { getTags } from "../../api/tagApi";
import { Tag } from "@collectiv/shared-types";

interface TagProp {
  tag: Tag;
  selected: boolean;
  onClick: () => {};
}

const TagComponent: Component<TagProp> = (props: TagProp) => {
  return (
    <button
      id="tag"
      style={{ "background-color": props.selected ? props.tag.color : "" }}
      onClick={() => props.onClick()}
    >
      {props.tag.name}
    </button>
  );
};

interface TagSelectorProp {
  selectedTags: Accessor<Array<Tag>>;
  setSelectedTags: Setter<Array<Tag>>;
}

const addOrRemoveTag = (initialArray: Array<Tag>, tag: Tag): Array<Tag> => {
  if (initialArray.includes(tag)) {
    const index = initialArray.indexOf(tag);
    initialArray.splice(index, 1);
  } else {
    initialArray.push(tag);
  }
  return initialArray;
};


//https://github.com/solidjs/solid/issues/1164
const TagSelector: Component<TagSelectorProp> = (props: TagSelectorProp) => {
  const [tags] = createResource(getTags);
  createEffect(() => {
    console.log(props.selectedTags());
  }, props.selectedTags());

  return (
    <div id="tag-selector">
      <For each={tags()} fallback={<>loading</>}>
        {(item) => (
          <TagComponent
            tag={item}
            selected={props.selectedTags().includes(item)}
            onClick={() => {
              props.setSelectedTags(addOrRemoveTag(props.selectedTags(), item));
              return {};
            }}
          />
        )}
      </For>
    </div>
  );
};

export default TagSelector;
