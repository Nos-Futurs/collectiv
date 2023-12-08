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
import CalendarColumns from "./CalendarColumn.jsx";

interface DateCalendarProps {
  year: Accessor<number>;
  month: Accessor<number>;
  date: Accessor<Date>;
  setDate: Setter<Date>;
}

const DateCalendar: Component<DateCalendarProps> = (
  props: DateCalendarProps
) => {
  const [dayInMonth, setDayInMonth] = createSignal<
    { day: number; date: number; currentMonth: boolean; fullDate: Date }[]
  >(getAllDatesInMonth(props.year(), props.month()));

  createEffect(() => {
    setDayInMonth(getAllDatesInMonth(props.year(), props.month()));
  });

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
    <div id="date-calendar">
      <h1 id="month">{months[props.month()]}</h1>
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
        <tbody>
          <CalendarColumns
            dates={dayInMonth()}
            dateSelected={props.date}
            setDate={props.setDate}
          />
        </tbody>
      </table>
    </div>
  );
};

export default DateCalendar;

// Private Functions
function getAllDatesInMonth(
  year: number,
  month: number
): { day: number; date: number; currentMonth: boolean; fullDate: Date }[] {
  // Create a Date object for the first day of the specified month
  const startDate = new Date(year, month, 1);
  // Create a Date object for the last day of the specified month
  const endDate = new Date(year, month + 1, 0);

  var allDates = [];

  // Iterate through the dates from the start date to the end date
  for (
    var currentDate = startDate;
    currentDate <= endDate;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    // Push the current date into the array
    // Get day : 0 is sunday
    const day = currentDate.getDay() === 0 ? 7 : currentDate.getDay();

    allDates.push({
      day,
      date: currentDate.getDate(),
      currentMonth: true,
      fullDate: new Date(currentDate),
    });
  }

  // complet before
  let indexPreviousMonth = 0;
  const endDatePreviousMonth = new Date(year, month, 0);
  while (allDates[0].day !== 1) {
    currentDate = new Date(
      endDatePreviousMonth.getFullYear(),
      endDatePreviousMonth.getMonth(),
      endDatePreviousMonth.getDate() - indexPreviousMonth
    );
    const day = currentDate.getDay() === 0 ? 7 : currentDate.getDay();
    allDates.unshift({
      day,
      date: currentDate.getDate(),
      currentMonth: false,
      fullDate: new Date(currentDate),
    });
    indexPreviousMonth += 1;
  }

  let indexNextsMonth = 0;
  const startDateNextMonth = new Date(year, month + 1, 1);
  while (allDates[allDates.length - 1].day !== 7) {
    currentDate = new Date(
      startDateNextMonth.getFullYear(),
      startDateNextMonth.getMonth(),
      startDateNextMonth.getDate() + indexNextsMonth
    );
    const day = currentDate.getDay() === 0 ? 7 : currentDate.getDay();
    allDates.push({
      day,
      date: currentDate.getDate(),
      currentMonth: false,
      fullDate: new Date(currentDate),
    });
    indexNextsMonth += 1;
  }

  return allDates;
}
