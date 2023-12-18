import { createTiptapEditor } from "solid-tiptap";
import StarterKit from "@tiptap/starter-kit";
import { Component, createEffect, createSignal, JSX, Show } from "solid-js";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import "./TipTapEditor.scss";

import ToolbarMenu from "./Components/ToolBarMenu/ToolBarMenu.jsx";

const CONTENT = `
  <h1>Groupe NAME,</h1>
  <h2>Description du groupe pour les participants</h2>
  <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Im Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </p>
  <h2>Evenements</h2>
  <p><em>Aucun évenement prévu pour l'instant</em></p>
  <h2>Canal de comunication</h2>
  <p><strong>Canal de communication whatsapp ?</strong></p>
`;

interface TipTapEditorProps {
  editable: boolean;
  owner: boolean;
  content?: string;
  setter: (value: string) => void;
}

const TipTapEditor: Component<TipTapEditorProps> = (
  props: TipTapEditorProps
) => {
  const [container, setContainer] = createSignal<HTMLDivElement>();
  const [editableEditor, setEditableEditor] = createSignal<boolean>();
  const [editMode, setEditMode] = createSignal<boolean>(false);
  const [menu, setMenu] = createSignal<HTMLDivElement>();

  createEffect(() => {
    /**
     * Updates the editable state of the editor based on the provided props.
     * If `editable` is false, sets `editableEditor` and `editMode` to false.
     * If `editable` is true and `owner` is false, sets `editableEditor` to false and `editMode` to the value of `editable`.
     * If `editable` is true and `owner` is true, sets `editableEditor` to true. Let editMode to false because the default view isn't editable
     */
    if (!props.editable) {
      setEditableEditor(false);
      setEditMode(false);
    } else {
      if (!props.owner) {
        setEditableEditor(false);
        setEditMode(props.editable);
      } else {
        setEditableEditor(true);
      }
    }
  });

  const editor = createTiptapEditor(() => ({
    element: container()!,
    extensions: [
      StarterKit,
      BubbleMenu.configure({
        element: menu()!,
      }),
    ],
    onUpdate({ editor }) {
      props.setter(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: editMode()
          ? "editor-content editable"
          : "editor-content non-editable",
        spellcheck: "false",
      },
    },
    content: props.content ? props.content : CONTENT,
    editable: editMode(),
  }));



  return (
    <div id="editor">
      {editableEditor() && (
        <button
          id="edit-button"
          onClick={() => {
            setEditMode(!editMode());
          }}
        >
          edit
        </button>
      )}
      <div ref={setMenu}>
        <Show when={editor()} keyed>
          {(instance) => <ToolbarMenu editor={instance} />}
        </Show>
      </div>
      <div id="tiptap-editor" ref={setContainer} />
    </div>
  );
};

export default TipTapEditor;
