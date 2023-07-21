import type { Component } from "solid-js";
import "./UserCard.scss";

interface userCardProps {
  firstName: string;
  lastName: string;
  photo: string;
}

const UserCard: Component<userCardProps> = (props: userCardProps) => {
  return (
    <div id="card">
      <img
        id="user-photo"
        src={props.photo}
        alt={`${props.firstName} ${props.lastName}`}
      />
      <div id="user-name-container">
        <div id="user-name-background">
          <div id="user-name-text">
            {props.firstName} {props.lastName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
