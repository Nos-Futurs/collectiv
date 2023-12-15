import { createTiptapEditor } from "solid-tiptap";
import StarterKit from "@tiptap/starter-kit";
import { createSignal, JSX, Show } from "solid-js";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import "./TipTapEditor.scss";

import ToolbarMenu from "./Components/ToolBarMenu/ToolBarMenu.jsx";

const CONTENT = `
  <h1>Groupe TEST,</h1>
  <h2>Objet du groupe</h2>
  <p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Im Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </p>
  <h2>Evenements</h2>
  <p><em>Aucun évenement prévu pour l'instant</em></p>
  <h2>Canal de comunication</h2>
  <p><strong>Canal de communication whatsapp ?</strong></p>
`;

export default function TipTapEditor(): JSX.Element {
  const [container, setContainer] = createSignal<HTMLDivElement>();
  const [menu, setMenu] = createSignal<HTMLDivElement>();

  const editor = createTiptapEditor(() => ({
    element: container()!,
    extensions: [
      StarterKit,
      BubbleMenu.configure({
        element: menu()!,
      }),
    ],
    editorProps: {
      attributes: {
        class: "editor-content",
      },
    },
    content: CONTENT,
  }));

  return (
    <div id="editor">
      <div ref={setMenu}>
        <Show when={editor()} keyed>
          {(instance) => <ToolbarMenu editor={instance} />}
        </Show>
      </div>
      <div id="tiptap-editor" ref={setContainer} />
    </div>
  );
}
