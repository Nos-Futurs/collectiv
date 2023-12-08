import { createEffect, createSignal } from "solid-js";
import "./calendar.scss";
import Selector from "./components/Selector.jsx";
import DateCalendar from "./components/DateCalendar.jsx";

const Calendar = () => {
  const [year, setYear] = createSignal<number>(new Date().getFullYear());
  const [month, setMonth] = createSignal<number>(new Date().getMonth());
  const [date, setDate] = createSignal<Date>(new Date());

  return (
    <div id="calendar">
      <Selector year={year} setYear={setYear} month={month} setMonth={setMonth} />
      <DateCalendar year={year} month={month}  date={date} setDate={setDate} />
      <div id="event-container">Event</div>
    </div>
  );
};

export default Calendar;
