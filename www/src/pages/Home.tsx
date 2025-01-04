import { ThemeContext } from "@context/ThemeContext";
import PartHeroHeader from "@part/PartHeroHeader";
import { useContext, useEffect } from "react";

const Home = () => {
  const { setShade } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "Vous transporter, notre métier — TeuTeuTrain Company";
    setShade("");
  }, []);

  return (
    <>
      <PartHeroHeader />
    </>
  );
};

export default Home;
