import { useState } from "react";
import "../scss/components/_collapse.scss"; // ajout du fichier plus tard

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen((prev) => !prev);
    };

  return (
      <div className="collapse">
          <div className="collapse-header" onClick={toggleCollapse}>
              <h3>{title}</h3>
              <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
          </div>

          {isOpen && (
            <div className="collapse-content">
                {children}
            </div>
          )}
      </div>
  );
}
