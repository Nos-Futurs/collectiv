import { createSignal, type Component } from "solid-js";

import "./Events.scss";
import PageLayout from "../../layout/Layout";
import Calendar from "../../components/Calendar/Calendar.jsx";

const Events: Component = () => {
  return (
    <PageLayout id="events" protected={true}>
      <Calendar/>
    </PageLayout>
  );
};

export default Events;
