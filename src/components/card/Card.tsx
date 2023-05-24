import React, { useState } from "react";
import "./card.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import List from "./List/List";
import Content from "../content/Content";

interface CardProps {
  title: string;
  content: string;
  category: string;
  addContent: ContentItem[];
  setAddContent: (value: ContentItem[]) => void;
  handleAddContent: (newContent: string, category: string) => void;
}

interface ContentItem {
  id: number;
  content: string;
  category: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  category,
  addContent,
  setAddContent,
  handleAddContent,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [isListOpen, setIsListOpen] = useState(false);
  const [addCard, setAddCard] = useState(false);

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  const handleInputClose = () => {
    setIsEditing(false);
  };

  const handleOpenClick = () => {
    setIsListOpen(true);
  };

  const handleAddCard = () => {
    setAddCard(true);
  };

  const filteredContent = addContent.filter(
    (item) => item.category === category
  );

  return (
    <div className="card">
      <div className="title-sec">
        {isEditing ? (
          <input
            className="title-input"
            type="text"
            value={editedTitle}
            onChange={handleInputChange}
            onBlur={handleInputClose}
          />
        ) : (
          <h2 className="card-title" onClick={handleTitleClick}>
            {editedTitle}
          </h2>
        )}
        <button onClick={handleOpenClick}>...</button>
      </div>

      <div className="card-content">
        {filteredContent.map((item) => (
          <div className="content-info" key={item.id}>
            <div className="content-p">
              <p>{item.content}</p>
              <div className="pencil-icon">
                <BsPencil />
              </div>
            </div>
          </div>
        ))}

        {addCard && (
          <Content
            addCard={addCard}
            setAddCard={setAddCard}
            addContent={addContent}
            setAddContent={setAddContent}
            handleAddContent={handleAddContent}
            category={category}
          />
        )}
        {!addCard && (
          <div className="card-p" onClick={handleAddCard}>
            <AiOutlinePlus className="plus-icon" />
            <p>{content}</p>
          </div>
        )}
      </div>

      {isListOpen && (
        <div className="list">
          <List isListOpen={isListOpen} setIsListOpen={setIsListOpen} />
        </div>
      )}
    </div>
  );
};

export default Card;
