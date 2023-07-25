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
import { SetStoreFunction } from "solid-js/store";

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
  selectedTags: Tag[];
  setSelectedTags: SetStoreFunction<Tag[]>;
}

const checkInclude = (
  initialArray: Array<Tag>,
  tag: Tag
): number | undefined => {
  for (let index = 0; index < initialArray.length; index++) {
    let itemToCompare = JSON.parse(JSON.stringify(initialArray[index]));
    if (itemToCompare.id === tag.id) {
      return index;
    }
  }
  return undefined;
};

//https://github.com/solidjs/solid/issues/1164
const TagSelector: Component<TagSelectorProp> = (props: TagSelectorProp) => {
  const [tags] = createResource(getTags);

  createEffect(() => {
    console.log([...props.selectedTags]);
  });
  return (
    <div id="tag-selector">
      <For each={tags()} fallback={<>loading</>}>
        {(item) => (
          <TagComponent
            tag={item}
            selected={props.selectedTags.includes(item)}
            onClick={() => {
              const initialArray = [...props.selectedTags];
              const index = checkInclude(initialArray, item);
              if (index !== undefined) {
                initialArray.splice(index, 1);
              } else {
                initialArray.push(item);
              }
              props.setSelectedTags(initialArray);
              return {};
            }}
          />
        )}
      </For>
    </div>
  );
};

export default TagSelector;
