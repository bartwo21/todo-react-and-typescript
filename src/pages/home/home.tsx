import { useContext } from "react";
import "./home.scss";
import Card from "../../components/card/Card";
import TodoContext from "../../Context/TodoContext";

const Home = () => {
  const { addContent, setAddContent, handleAddContent } =
    useContext(TodoContext);

  return (
    <div className="home">
      <Card
        title="Yapılacaklar"
        content="Kart Ekle"
        category="Yapılacaklar"
        addContent={addContent.filter(
          (item) => item.category === "Yapılacaklar"
        )}
        setAddContent={setAddContent}
        handleAddContent={(newContent) =>
          handleAddContent(newContent, "Yapılacaklar")
        }
      />
      <Card
        title="Yapılıyor"
        content="Kart Ekle"
        category="Yapılıyor"
        addContent={addContent.filter((item) => item.category === "Yapılıyor")}
        setAddContent={setAddContent}
        handleAddContent={(newContent) =>
          handleAddContent(newContent, "Yapılıyor")
        }
      />
      <Card
        title="Tamamlandı"
        content="Kart Ekle"
        category="Tamamlandı"
        addContent={addContent.filter((item) => item.category === "Tamamlandı")}
        setAddContent={setAddContent}
        handleAddContent={(newContent) =>
          handleAddContent(newContent, "Tamamlandı")
        }
      />
    </div>
  );
};

export default Home;
