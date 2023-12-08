import { createSignal, type Component, Accessor, Setter } from "solid-js";

import "./Input.scss";

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  label: string;
  type?: string;
  id: string;
  largeInput?: boolean;
}

const Input: Component<InputProps> = (props: InputProps) => (
  <div class="form-group">
    <label for={props.id}>{props.label}</label>
    {props.largeInput ? (
      <textarea
        maxlength="1000"
        placeholder="Limiter à 1000 charactères"
        id={props.id}
        value={props.value}
        onInput={(e: Event) =>
          props.setValue((e.target as HTMLInputElement).value)
        }
      />
    ) : (
      <input
        id={props.id}
        type={props.type ? props.type : "text"}
        value={props.value}
        onInput={(e: Event) =>
          props.setValue((e.target as HTMLInputElement).value)
        }
      />
    )}
  </div>
);

export default Input;
