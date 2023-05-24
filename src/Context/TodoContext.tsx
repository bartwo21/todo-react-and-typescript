import React, { createContext } from "react";

interface ContentItem {
  id: number;
  content: string;
  category: string;
}

interface Props {
  addContent: ContentItem[];
  setAddContent: React.Dispatch<React.SetStateAction<ContentItem[]>>;
  handleAddContent: (newContent: string, category: string) => void;
}
const TodoContext = createContext<Props>({
  addContent: [],
  setAddContent: () => {},
  handleAddContent: () => {},
});
export default TodoContext;
