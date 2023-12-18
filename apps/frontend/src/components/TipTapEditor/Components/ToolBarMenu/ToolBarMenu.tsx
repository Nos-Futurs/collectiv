import { Editor } from "@tiptap/core";
import { JSX } from "solid-js";
import './ToolBarMenu.scss';
import {
  BulletListIcon,
  OrderedListIcon,
  ParagraphIcon,
} from "../TipTapIcons/TipTapIcons.jsx";


interface ToolbarMenuProps {
  editor: Editor;
}

const ToolbarMenu = (props: ToolbarMenuProps): JSX.Element => {
  return (
    <div id="tool-bar-menu">
      <div class="submenu">
        <div
          class="menu-item"
          onClick={() => props.editor.chain().focus().setParagraph().run()}
          id="paragraph-div"
        >
          <ParagraphIcon />
        </div>
        <div
          class="menu-item"
          onClick={() =>
            props.editor.chain().focus().setHeading({ level: 1 }).run()
          }
          id="heading-1-button"
        >
          H1
        </div>
        <div
          class="menu-item"
          onClick={() =>
            props.editor.chain().focus().setHeading({ level: 2 }).run()
          }
          id="heading-2-button"

        >
          H2
        </div>
      </div>
      <div class="separator" />
      <div class="submenu">
        <div
          class="menu-item"
          onClick={() => props.editor.chain().focus().toggleBold().run()}
          id="font-bold-button"
        >
          B
        </div>
        <div
          class="menu-item"
          onClick={() => props.editor.chain().focus().toggleItalic().run()}
          id="italic-button"
        >
          I
        </div>
        <div
          class="menu-item"
          onClick={() => props.editor.chain().focus().toggleStrike().run()}
          id="strike-through-button"
        >
          S
        </div>
      </div>
      <div class="separator" />
      <div class="submenu">
        <div
          class="menu-item"
          onClick={() => props.editor.chain().focus().toggleBulletList().run()}
          id="bullet-list-button"
        >
          <BulletListIcon />
        </div>
        <div
          class="menu-item"
          onClick={() =>
            props.editor.chain().focus().toggleOrderedList().run()
          }
          id="ordered-list-button"
        >
          <OrderedListIcon />
        </div>
      </div>
    </div>
  );
}

export default ToolbarMenu;