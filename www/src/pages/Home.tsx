import PartHeroHeader from "@part/PartHeroHeader";
import SectionGare from "@section/SectionGare";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Vous transporter, notre métier — TeuTeuTrain Company";
  }, []);
  return (
    <div>
      <PartHeroHeader />
      <SectionGare />
    </div>
  );
};

export default Home;
