import { Component, For, Show, createEffect } from "solid-js";

import "./Documents.scss";

interface DocumentsProps {
  documents?: any[] | undefined;
}

const Documents: Component<DocumentsProps> = (
  props: DocumentsProps
) => {
  return (
    <div id="documents">
      <h1>Documents</h1>
      <Show
        when={props.documents && props.documents.length > 0}
        fallback={<p>Aucun documents pour l'instant</p>}
      >
        <div id="documents-list">
          <For each={props.documents} fallback={<div>Loading tags...</div>}>
            {(document) => (
              <p class="document">
                {document.name} {document.startDate.toISOString()}
              </p>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};
export default Documents;
