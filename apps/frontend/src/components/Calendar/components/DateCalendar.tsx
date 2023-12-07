import { Accessor, Component, For, createEffect, createSignal } from "solid-js";

interface DateCalendarProps {
  year: Accessor<number>;
  month: Accessor<number>;
}

const DateCalendar: Component<DateCalendarProps> = (
  props: DateCalendarProps
) => {
  const [dayInMonth, setDayInMonth] = createSignal<
    { day: number; date: number; currentMonth: boolean }[]
  >(getAllDatesInMonth(props.year(), props.month()));

  const [htmlTable, setHtmlTable] = createSignal<string>(
    constructCalendar(dayInMonth())
  );
  createEffect(() => {
    setDayInMonth(getAllDatesInMonth(props.year(), props.month()));
    setHtmlTable(constructCalendar(dayInMonth()));
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
        <tbody innerHTML={htmlTable()} />
      </table>
    </div>
  );
};

export default DateCalendar;

// Private Functions
function getAllDatesInMonth(
  year: number,
  month: number
): { day: number; date: number; currentMonth: boolean }[] {
  // Create a Date object for the first day of the specified month
  console.log(month, year);
  const startDate = new Date(year, month, 1);
  console.log(startDate);
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
    allDates.push({ day, date: currentDate.getDate(), currentMonth: true });
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
    });
    indexNextsMonth += 1;
  }

  return allDates;
}

function constructCalendar(
  dates: { day: number; date: number; currentMonth: boolean }[]
): string {
  let html = "";
  dates.map((date) => {
    if (date.day === 1) {
      html =
        html +
        `<tr><td><button ${date.currentMonth ? "class='current-month'" : ""}>${
          date.date
        }</button></td>`;
    } else if (date.day === 7) {
      html =
        html +
        `<td><button ${date.currentMonth ? "class='current-month'" : ""}>${
          date.date
        }</button></td></tr>`;
    } else {
      html =
        html +
        `<td><button ${date.currentMonth ? "class='current-month'" : ""}>${
          date.date
        }</button></td>`;
    }
  });

  return html;
}
