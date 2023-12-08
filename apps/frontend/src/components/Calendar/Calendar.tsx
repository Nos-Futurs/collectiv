import { createSignal } from "solid-js";
import "./calendar.scss";
import Selector from "./components/Selector.jsx";
import DateCalendar from "./components/DateCalendar.jsx";
import EventContainer from "./components/EventCalendar.jsx";

const Calendar = () => {
  const [year, setYear] = createSignal<number>(new Date().getFullYear());
  const [month, setMonth] = createSignal<number>(new Date().getMonth());
  const [date, setDate] = createSignal<Date>(new Date());

  return (
    <div id="calendar">
      <Selector year={year} setYear={setYear} month={month} setMonth={setMonth} />
      <DateCalendar year={year} month={month}  date={date} setDate={setDate} />
      <EventContainer date={date}/>
    </div>
  );
};

export default Calendar;
