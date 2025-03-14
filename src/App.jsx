import { useState, useEffect } from "react";
import { links } from "./data/links";
import LinkItem from "./components/LinkItem";
import Console from "./components/Console";
import "./styles/global.css";

const App = () => {
  const [activeLinks, setActiveLinks] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const filteredLinks = links.filter(
      (link) => new Date(link.expirationDate) >= currentDate
    );
    setActiveLinks(filteredLinks);
  }, []);

  return (
    <>
      <Console>
        {activeLinks.length > 0 ? (
          activeLinks.map((link, index) => (
            <LinkItem
              key={index}
              name={link.name}
              link={link.link}
              color={link.color}
              icon={link.icon}
            />
          ))
        ) : (
          <p>Nenhum link disponível no momento.</p>
        )}
      </Console>
    </>
  );
};

export default App;