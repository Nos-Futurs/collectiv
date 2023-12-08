import {
  Accessor,
  Component,
  For,
  JSX,
  Setter,
  createEffect,
  createSignal,
} from "solid-js";
import CalendarRow from "./CalendarRow.jsx";

interface CalendarColumnsProps {
  dates: { day: number; date: number; currentMonth: boolean; fullDate: Date }[];
  dateSelected: Accessor<Date>;
  setDate: Setter<Date>;
}

const CalendarColumns: Component<CalendarColumnsProps> = (
  props: CalendarColumnsProps
) => {
  
  let tempArray: { day: number; date: number; currentMonth: boolean; fullDate: Date }[] = [];

  return (
    <For each={props.dates}>
      {(date) => {
        if (tempArray.length === 7) {
          tempArray = [];
          tempArray.push(date);
        } else if (tempArray.length < 6) {
          tempArray.push(date);
        } else {
          tempArray.push(date);
          return (
            <CalendarRow
              dates={tempArray}
              dateSelected={props.dateSelected}
              setDate={props.setDate}
            />
          );
        }
      }}
    </For>
  );
};

export default CalendarColumns;