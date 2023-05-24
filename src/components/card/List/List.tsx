import React from "react";
import "./list.scss";

interface ListProps {
  isListOpen: boolean;
  setIsListOpen: (isOpen: boolean) => void;
}

const List: React.FC<ListProps> = ({ isListOpen, setIsListOpen }) => {
  const handleCloseClick = () => {
    setIsListOpen(false);
  };

  return (
    <div className="list">
      <div className="list-title">
        <h2>Liste İşlemleri</h2>
        <button onClick={handleCloseClick}>X</button>
      </div>
      <div className="list-items">
        <h3>Kart Ekle...</h3>
        <h3>Listeyi Kopyala</h3>
        <h3>Listeyi Taşı</h3>
        <h3>Takip et</h3>
      </div>
    </div>
  );
};

export default List;
