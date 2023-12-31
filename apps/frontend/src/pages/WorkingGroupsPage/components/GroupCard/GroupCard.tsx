import { createSignal, type Component } from "solid-js";
import minus from "../../../../assets/minus.svg";
import plus from "../../../../assets/plus.svg";
import "./GroupCard.scss";
import { A } from "@solidjs/router";
import { WorkingGroup } from "@collectiv/db-entities/frontend";

interface GroupCardProps {
  group: WorkingGroup;
  userId?: number;
}

const GroupCard: Component<GroupCardProps> = (props: GroupCardProps) => {
  const [showDetails, setShowDetails] = createSignal(false);
  const usersId = props.group.users?.map((user) => user.id);
  const isParticipant = props.userId && usersId
    ? usersId.includes(props.userId)
    : undefined;

  return (
    <div id="group-card">
      <div id="group-header">
        <div id="main-infos">
          <h1>{props.group.name}</h1>
          {isParticipant ? (
            <A href={`/groups/${props.group.id}`} id="open-group">
              Ouvrir
            </A>
          ) : (
            <button>Demander à rejoindre</button>
          )}
        </div>
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
