import { useState } from "react";
import "../scss/components/_collapse.scss";
import arrowIcon from "../assets/icones/Fleche-droite.png";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(prev => !prev);

  return (
    <div className={`collapse${isOpen ? " open" : ""}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img
          src={arrowIcon}
          alt=""
          className="collapse-chevron"
        />
      </div>

      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
}
