import { createSignal, type Component } from "solid-js";
import "./MyProfilItem.scss";

interface MyProfilItem {
  type: string;
  content: string | undefined;
  disabled?: boolean;
}

const MyProfilItem: Component<MyProfilItem> = (props: MyProfilItem) => {
  return (
    <div class="profil-item">
      <p class="type">{`${props.type} :`}</p>
      <input
        class="content-value"
        value={props.content}
        disabled={props.disabled ? props.disabled : false}
      />
    </div>
  );
};

export default MyProfilItem;
