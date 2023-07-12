import { type Component } from "solid-js";
import "./GroupCard.scss";

interface GroupCardProps {
  name: string;
}

const GroupCard: Component<GroupCardProps> = (props: GroupCardProps) => {
  return (
    <div id="group-card">
        {props.name}
    </div>
  );
};

export default GroupCard;
