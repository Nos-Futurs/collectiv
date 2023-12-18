import { createSignal, type Component, Setter, createEffect } from "solid-js";
import "./CreateGroupModal.scss";
import { A } from "@solidjs/router";
import { CreateWorkingGroupDto, User } from "@collectiv/db-entities/frontend";
import Participants from "../../../Group/Components/Participants/Participants.jsx";
import TipTapEditor from "../../../../components/TipTapEditor/TipTapEditor.jsx";
import { createStore } from "solid-js/store";
import { createGroup } from "../../../../api/workingGroupsApi.js";

interface CreateGroupModalProps {
  users: User[];
  currentUser: User | undefined;
  setOpenModal: Setter<boolean>;
}

const CreateGroupModal: Component<CreateGroupModalProps> = (
  props: CreateGroupModalProps
) => {
  const [groupForm, setGroupForm] = createStore<{
    name: string;
    ownerId: number;
    usersId: number[];
    description: string;
    shortDescription: string;
  }>({
    name: "",
    ownerId: 0,
    description: "",
    shortDescription: "",
    usersId: [],
  });

  createEffect(() => {
    if (props.currentUser) {
      setGroupForm("ownerId", props.currentUser.id);
    }
    if (props.users) {
      setGroupForm(
        "usersId",
        props.users.map((user) => user.id)
      );
    }
  });
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
        <input
          id="group-name"
          type="text"
          placeholder="Nom du groupe"
          maxLength={100}
          onChange={(e) => {
            setGroupForm("name", e.currentTarget.value);
          }}
        />
        <Participants participants={props.users} owner={props.currentUser} />
        <TipTapEditor
          editable={true}
          owner={false}
          setter={(value: string) => {
            setGroupForm("description", value);
          }}
        />
        <button
          id="validate-button"
          onClick={() => {
            createGroup(groupForm);
          }}
        >
          Créer le groupe
        </button>
        <textarea
          id="short-description"
          maxLength={1000}
          placeholder="Courte description publique"
          onChange={(e) => {
            setGroupForm("shortDescription", e.currentTarget.value);
          }}
        />
      </div>
    </div>
  );
};

export default CreateGroupModal;
