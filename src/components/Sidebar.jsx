import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiBarChartSquare } from "react-icons/bi";
import { LuListTodo } from "react-icons/lu";
import { RiWallet3Line } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import "../CSS/SideBar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  const Item = ({ title, to, icon, selected, setSelected }) => (
    <li
      className={selected === title ? "sidebarLiActive" : "sidebarLi"}
      onClick={() => setSelected(title)}
    >
      <Link to={to} className="sidebarLink">
        {icon}
        <span className="sidebarLinkSpan">{title}</span>
      </Link>
    </li>
  );

  return (
    <aside className={`sidebar ${isCollapsed ? "" : "expanded"}`}>
      <nav>
        <ul className="sidebarUl">
          <Item
            title="Dashboard"
            icon={<GrHomeRounded />}
            to="/"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Manage Team"
            icon={<LuListTodo />}
            to="/team"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Contacts Information"
            icon={<RiWallet3Line />}
            to="/contacts"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Invoices Balances"
            icon={<BsHandbag />}
            to="/invoices"
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Bar Chart"
            icon={<BiBarChartSquare />}
            to="/bar"
            selected={selected}
            setSelected={setSelected}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
