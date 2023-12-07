import React, { useState } from "react";
import { companyLogo, headerConfig } from "../../../utils/data";
import { InputText } from "primereact/inputtext";
import "./Navbar.css";

const IconMenu = ({ title = "", icon = "" }) => {
  return (
    <li className="d-flex align-items-center ">
      <div style={{ position: "relative", left: "5px" }}>
        {" "}
        <span className={icon} />
        <span className="ml-2 icon-title" style={{ marginLeft: "5px" }}>
          {title}
        </span>
      </div>
    </li>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = () => setOpen(!open)

  return (
    <div className="navbar-container">
      <nav>
        <span className={!open ? "pi pi-bars" : "pi pi-times"} onClick={handleMenuClick} />
        <img className="company-logo" src={companyLogo} alt={"company logo"} />
        <ul className={`menu-list left ${open ? 'menu' : ''}`}>
          <li>Men</li>
          <li>Women</li>
          <li>Accessories</li>
        </ul>
      </nav>
      <nav>
        <InputText
          value={""}
          className="search-input"
          placeholder="Search by Products"
          //   onChange={(e) => setValue(e.target.value)}
          style={{ position: "relative", width: "400px", height: "36px" }}
        />
        <span className="pi pi-search"/>
        <ul className="menu-list right">
          {headerConfig?.map((hConfig, i) => {
            return <IconMenu key={i} {...hConfig} />;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
