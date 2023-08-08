import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { ImHome3, ImAddressBook, ImAlarm, ImKey, ImCog } from "react-icons/im";
import { BiTask } from "react-icons/bi";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Link to="/">
        <ImAddressBook />
      </Link>
      <Link to="/task">
        <BiTask />
      </Link>
      <Link to="/password">
        <ImKey />
      </Link>
      <Link to="/reminder">
        <ImAlarm />
      </Link>
      <Link to="/config">
        <ImCog />
      </Link>
    </div>
  );
}
