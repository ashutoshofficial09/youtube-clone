import React from "react";
import "./sidebarRow.css";

export const SidebarRow = ({ selected, Icon, title }) => {
  return (
    <div className={`sidebar-row ${selected && "selected"}`}>
      <Icon className="sidebar-icon " />
      <h2 className="sidebar-h2">{title}</h2>
    </div>
  );
};
export default SidebarRow;
