import { Accessor, Component } from "solid-js";

interface EventContainerProps {
  date: Accessor<Date>;
}

const EventContainer: Component<EventContainerProps> = (
  props: EventContainerProps
) => {
  return (
    <div id="event-container">
      <h1 id="day">
        {formatDate(props.date())}
      </h1>
    </div>
  );
};

export default EventContainer;

const formatDate = (date: Date): string => {
  const stringDate = date.toLocaleDateString("fr-FR", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const stringDateArray = stringDate.split(" ");
  const capitalizeDay =
    stringDateArray[0].charAt(0).toUpperCase() + stringDateArray[0].slice(1);
  const capitalizeMonth =
    stringDateArray[2].charAt(0).toUpperCase() + stringDateArray[2].slice(1);

  const stringDateCapitalize =
    capitalizeDay + " " + stringDateArray[1] + " " + capitalizeMonth;
  return stringDateCapitalize;
};
