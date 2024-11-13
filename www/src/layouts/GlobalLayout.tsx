import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GlobalLayoutProps } from "@/types/Layout.types";

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
