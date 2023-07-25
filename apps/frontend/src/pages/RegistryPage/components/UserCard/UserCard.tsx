import { createSignal, type Component } from "solid-js";
import "./UserCard.scss";
import { A } from "@solidjs/router";
import { User } from "@collectiv/shared-types";

interface userCardProps {
  user: User;
  photo: string;
  selectable: boolean;
}

const UserCard: Component<userCardProps> = (props: userCardProps) => {
  const [selected, setSelected] = createSignal<boolean>(false);
  return (
    <>
      {props.selectable ? (
        <button
          id="card"
          onClick={() => setSelected(!selected())}
          class={selected() ? "selected" : "unselected"}
        >
          <img
            id="user-photo"
            src={props.photo}
            alt={`${props.user.firstName} ${props.user.lastName}`}
          />
          <div id="user-name-container">
            <div id="user-name-background">
              <div id="user-name-text">
                {props.user.firstName} {props.user.lastName}
              </div>
            </div>
          </div>
        </button>
      ) : (
        <A id="card" href={`/users/${props.user.id}`}>
          <img
            id="user-photo"
            src={props.photo}
            alt={`${props.user.firstName} ${props.user.lastName}`}
          />
          <div id="user-name-container">
            <div id="user-name-background">
              <div id="user-name-text">
                {props.user.firstName} {props.user.lastName}
              </div>
            </div>
          </div>
        </A>
      )}
    </>
  );
};

export default UserCard;
