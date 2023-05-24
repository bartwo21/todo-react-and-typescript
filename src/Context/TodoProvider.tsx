import React, { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

interface ContentItem {
  id: number;
  content: string;
  category: string;
}
interface Props {
  children?: React.ReactNode;
}

const TodoProvider: React.FC<Props> = ({ children }) => {
  const [addContent, setAddContent] = useState<ContentItem[]>([]);

  const saveToLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  const handleAddContent = (newContent: string, category: string) => {
    const newId = addContent.length + 1;
    const newContentItem = {
      id: newId,
      content: newContent,
      category: category,
    };
    const updatedContent: ContentItem[] = [...addContent, newContentItem];
    setAddContent(updatedContent);
    saveToLocalStorage("storageCard", updatedContent);
  };

  const loadFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  useEffect(() => {
    const loadedData = loadFromLocalStorage("storageCard");
    setAddContent(loadedData || []);
  }, []);
  return (
    <TodoContext.Provider
      value={{ addContent, setAddContent, handleAddContent }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
