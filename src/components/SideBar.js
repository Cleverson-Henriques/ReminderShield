import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { ImHome3, ImAddressBook, ImAlarm, ImKey, ImCog } from "react-icons/im";
import { BiTask } from "react-icons/bi";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Link to="/" className="Button-sidebar">
        <ImAddressBook/>
      </Link>
      <Link to="/task" className="Button-sidebar">
        <BiTask/>
      </Link>
      <Link to="/password" className="Button-sidebar">
        <ImKey/>
      </Link>
      <Link to="/reminder" className="Button-sidebar">
        <ImAlarm />
      </Link>
      <Link to="/config" className="Button-sidebar">
        <ImCog/>
      </Link>
    </div>
  );
}
