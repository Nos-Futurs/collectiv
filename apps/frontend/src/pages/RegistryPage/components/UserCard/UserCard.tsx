import type { Component } from 'solid-js';
import "./UserCard.scss";



interface userCardProps {
    name: string; 
}


const UserCard: Component<userCardProps> = (props: userCardProps) => {
  return (
    <div id="card" style={{"background-color": props.name === "chocolat" ? "red": "blue"}}>
        {props.name}
    </div>
  );
};

export default UserCard;
