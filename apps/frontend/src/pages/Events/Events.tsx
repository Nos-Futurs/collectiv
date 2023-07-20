import {
  createSignal,
  type Component,
} from "solid-js";

import "./Events.scss";
import PageLayout from "../../layout/Layout";

const Events: Component = () => {
  const [forgetPassword, setForgetPassword] = createSignal(false);
  
  return (
    <PageLayout id="events" protected={true}>
      <h1 id="callendar">
        CALENDRIER
      </h1>
    </PageLayout>
  );
};

export default Events;
