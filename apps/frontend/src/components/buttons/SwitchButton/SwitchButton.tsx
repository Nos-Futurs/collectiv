import { Setter, type Component, Accessor } from "solid-js";
import "./SwitchButton.scss"

interface SwitchButtonProps {
  setValue: Setter<boolean>;
  value: Accessor<boolean>;
  label: string;
}

const SwitchButton: Component<SwitchButtonProps> = (
  props: SwitchButtonProps
) => {
  return (
    <div id="switch-button">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <p>{props.label}</p>
    </div>
  );
};

export default SwitchButton;
