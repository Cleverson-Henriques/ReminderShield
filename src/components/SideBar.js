import React from "react";
import { Link } from "react-router-dom";
import { ImHome3, ImAddressBook, ImAlarm, ImKey, ImCog } from "react-icons/im";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Link to="/Tarefas">
        <ImHome3 />
      </Link>
      <Link to="/Tarefas">
        <ImAddressBook />
      </Link>
      <Link to="/Tarefas">
        <ImKey />
      </Link>
      <Link to="/Tarefas">
        <ImAlarm />
      </Link>
      <Link to="/Tarefas">
        <ImCog />
      </Link>
    </div>
  );
}
