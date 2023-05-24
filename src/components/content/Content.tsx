import React, { useState } from "react";
import "./content.scss";

interface ContentProps {
  addCard: boolean;
  setAddCard: (value: boolean) => void;
  addContent: { id: number; content: string; category: string }[];
  setAddContent: (
    value: { id: number; content: string; category: string }[]
  ) => void;
  handleAddContent: (newContent: string, category: string) => void;
  category: string;
}

const Content: React.FC<ContentProps> = ({
  addCard,
  setAddCard,
  addContent,
  setAddContent,
  handleAddContent,
  category,
}) => {
  const [newCardContent, setNewCardContent] = useState("");

  const handleAddCard = () => {
    handleAddContent(newCardContent, category);
    setNewCardContent("");
  };

  const handleCancel = () => {
    setAddCard(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCardContent(event.target.value);
  };

  return (
    <div>
      {addCard ? (
        <div className="content-input-container">
          <input
            className="content-input"
            type="text"
            placeholder="Bu kart için başlık girin..."
            value={newCardContent}
            onChange={handleInputChange}
          />
          <div className="content-buttons">
            <button
              className="content-button content-add-button"
              onClick={handleAddCard}
            >
              Kart Ekle
            </button>
            <button
              className="content-button content-cancel-button"
              onClick={handleCancel}
            >
              x
            </button>
          </div>
        </div>
      ) : (
        <button
          className="content-button content-open-button"
          onClick={() => setAddCard(true)}
        >
          Kart Ekle
        </button>
      )}
    </div>
  );
};

export default Content;
