import { createSignal, type Component } from "solid-js";
import "./UserCard.scss";
import { A } from "@solidjs/router";
import { User } from "@collectiv/db-entities/frontend";
import { SetStoreFunction, produce } from "solid-js/store";
import Participants from "../../../Group/Components/Participants/Participants.jsx";

interface userCardProps {
  user: User;
  photo: string;
  selectable: boolean;
  setParticipants: SetStoreFunction<{
    users: User[];
  }>;
  participants: {
    users: User[];
  };
}

const UserCard: Component<userCardProps> = (props: userCardProps) => {
  const [selected, setSelected] = createSignal<boolean>(false);

  const handleAddUser = (user: User): void => {
    props.setParticipants(
      produce((draft) => {
        // Add the item if it doesn't exist
        draft.users.push(user);
      })
    );
  };

  const handleDeleteUser = (user: User): void => {
    const indexSelected = props.participants.users.findIndex((item) => {
      return user.id === item.id;
    });
    props.setParticipants(
      produce((draft) => {
        if (indexSelected > -1) {
          // Remove the item if it exists
          draft.users.splice(indexSelected, 1);
        }
      })
    );
  };

  return (
    <>
      {props.selectable ? (
        <button
          id="card"
          onClick={() => {
            if (selected()) {
              handleDeleteUser(props.user);
            } else {
              handleAddUser(props.user);
            }
            setSelected(!selected());
          }}
          class={selected() ? "selected-card" : "unselected-card"}
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
