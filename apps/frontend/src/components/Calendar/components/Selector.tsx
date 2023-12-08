import { Accessor, Component, For, Setter, createSignal } from "solid-js";

interface SelectorProps {
  year: Accessor<number>;
  setYear: Setter<number>;
  month: Accessor<number>;
  setMonth: Setter<number>;
}

const Selector: Component<SelectorProps> = (props: SelectorProps) => {
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  return (
    <div id="date-selector">
      <div id="year-selector">
        {" "}
        <button
          onClick={() => {
            props.setYear(props.year() - 1);
          }}
        >
          &lt;
        </button>
        <span>{props.year().toString()}</span>
        <button
          onClick={() => {
            props.setYear(props.year() + 1);
          }}
        >
          &gt;
        </button>
      </div>
      <div id="month-selector">
        <For each={months}>
          {(month: string, index) => (
            <button
              onClick={() => {
                props.setMonth(index());
              }}
              class={index() === props.month() ? "selected" : ""}
            >
              {month}
            </button>
          )}
        </For>
      </div>
    </div>
  );
};

export default Selector;
