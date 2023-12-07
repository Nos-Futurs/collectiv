import { createSignal } from "solid-js";
import "./calendar.scss";
import Selector from "./components/Selector.jsx";

const Calendar = () => {
  const [year, setYear] = createSignal<number>(new Date().getFullYear());
  const [month, setMonth] = createSignal<number>(new Date().getMonth());

  return (
    <div id="calendar">
      <Selector year={year} setYear={setYear} month={month} setMonth={setMonth} />
      <div id="#date-calendar">
        <table>
          <thead>
            <tr>
              <th>Lundi</th>
              <th>Mardi</th>
              <th>Mercredi</th>
              <th>Jeudi</th>
              <th>Vendredi</th>
              <th>Samedi</th>
              <th>Dimanche</th>
            </tr>
          </thead>
          <tbody>{/* Render calendar days here */}</tbody>
        </table>
      </div>
      <div id="event-container">Event</div>
    </div>
  );
};

export default Calendar;
