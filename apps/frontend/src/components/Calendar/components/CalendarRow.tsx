import { Accessor, Component, For, JSX, Setter } from "solid-js";
import CalendarItem from "./CalendarItem.jsx";

interface CalendarRowProps {
  dates: { day: number; date: number; currentMonth: boolean; fullDate: Date }[];
  dateSelected: Accessor<Date>;
  setDate: Setter<Date>;
}

const CalendarRow: Component<CalendarRowProps> = (props: CalendarRowProps) => {
  return (
    <tr>
      <For each={props.dates}>
        {(date) => (
          <CalendarItem
            date={date}
            dateSelected={props.dateSelected}
            setDate={props.setDate}
          />
        )}
      </For>
    </tr>
  );
};

export default CalendarRow;
