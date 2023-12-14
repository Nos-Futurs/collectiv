import { createSignal, type Component, Setter, createEffect } from "solid-js";
import "./CreateGroupModal.scss";
import { A } from "@solidjs/router";
import { User } from "@collectiv/db-entities/frontend";
import Participants from "../../../Group/Components/Participants/Participants.jsx";

interface CreateGroupModalProps {
  users: User[];
  currentUser: User | undefined;
  setOpenModal: Setter<boolean>;
}

const CreateGroupModal: Component<CreateGroupModalProps> = (
  props: CreateGroupModalProps
) => {
  return (
    <div id="group-modal-container">
      <div id="group-modal">
        <button
          onClick={() => {
            props.setOpenModal(false);
          }}
        >
          X
        </button>
        <Participants participants={props.users} owner={props.currentUser}/>
      </div>
    </div>
  );
};

export default CreateGroupModal;
