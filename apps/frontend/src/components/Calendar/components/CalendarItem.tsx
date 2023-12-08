import {
  Accessor,
  Component,
  For,
  JSX,
  Setter,
  createEffect,
  createSignal,
} from "solid-js";

interface CalendarItemProps {
  date: { day: number; date: number; currentMonth: boolean; fullDate: Date };
  dateSelected: Accessor<Date>;
  setDate: Setter<Date>;
}

const CalendarItem: Component<CalendarItemProps> = (
  props: CalendarItemProps
) => {
  const [isDate, setIsDate] = createSignal(false);

  createEffect(() => {
    setIsDate(
      areDatesEqualWithoutTime(props.dateSelected(), props.date.fullDate)
    );
  });
  return (
    <td>
      <button
        class={
          props.date.currentMonth
            ? isDate()
              ? "current-month selected"
              : "current-month"
            : ""
        }
        onClick={() => props.setDate(props.date.fullDate)}
      >
        {props.date.date}
      </button>
    </td>
  );
};

function areDatesEqualWithoutTime(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export default CalendarItem;
