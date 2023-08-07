import React from "react";
import { Link } from "react-router-dom";
import { ImHome3, ImAddressBook, ImAlarm, ImKey, ImCog } from "react-icons/im";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Link to="/">
        <ImHome3 />
      </Link>
      <Link to="/task">
        <ImAddressBook />
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
