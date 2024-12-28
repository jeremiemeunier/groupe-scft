import { ThemeContext } from "@context/ThemeContext";
import PartHeroHeader from "@part/PartHeroHeader";
import SectionGare from "@section/SectionGare";
import { useContext, useEffect } from "react";

const Home = () => {
  const { setShade } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Vous transporter, notre métier — TeuTeuTrain Company";
    setShade("");
  }, []);

  return (
    <div>
      <PartHeroHeader />
      <SectionGare />
    </div>
  );
};

export default Home;
