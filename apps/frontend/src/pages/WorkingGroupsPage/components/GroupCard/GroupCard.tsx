import { createSignal, type Component } from "solid-js";
import minus from "../../../../assets/minus.svg";
import plus from "../../../../assets/plus.svg";
import "./GroupCard.scss";

interface GroupCardProps {
  name: string;
}

const GroupCard: Component<GroupCardProps> = (props: GroupCardProps) => {
  const [showDetails, setShowDetails] = createSignal(false);
  return (
    <div id="group-card">
      <div id="group-header">
        <h1>{props.name}</h1>
        <img
          alt={showDetails() ? "minus-dropdown" : "plus-dropdown"}
          id={showDetails() ? "minus-dropdown" : "plus-dropdown"}
          src={showDetails() ? minus : plus}
          onClick={() => setShowDetails(!showDetails())}
        />
      </div>
      {showDetails() && (
        <div id="group-details">
          <h1>REFERENT</h1>
          <p>Mettre le référent</p>
          <h1>DESCRIPTION</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            totam, quas adipisci, natus cum nihil quia odio facere repudiandae
            possimus debitis blanditiis suscipit aut, cupiditate maxime quae
            culpa iure optio!
          </p>
          <h1>PARTICIPANTS</h1>
          <p>Mettre le référent</p>
        </div>
      )}
    </div>
  );
};

export default GroupCard;
