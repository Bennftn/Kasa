// isOpen controle si le contenu est lisible
// title est le test du bouton/ section
//content peut etre un string ou un tableau
// la flèche tourne selon l'etat open
import { useState } from "react";
import "./styles/Collapse.css"; // ajout du fichier plus tard

export default function Collapse({ title, content }) {
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
                  {Array.isArray(content) ? (
                      <ul>
                          {content.map((item, index) => (
                              <li key={index}>{item}</li>
                          ))}
                      </ul>
                  ) : (
                      <p>{content}</p>
                  )}
              </div>
          )}
      </div>
  );
}
