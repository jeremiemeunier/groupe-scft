import { ThemeContext } from "@context/ThemeContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const { shade } = useContext(ThemeContext);

  return (
    <div className="teaui grid ha-center">
      <svg
        width="49"
        height="28"
        viewBox="0 0 49 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={shade ? `teaui loader color-${shade}` : "teaui loader"}
      >
        <path d="M4.58319 20.9971L1.74551 10.2968C0.551989 5.79629 3.85116 1.44613 8.47339 1.50051C16.0833 1.59004 25.5608 2.08725 30.9726 3.75218C36.2936 5.38915 40.9722 7.70593 44.3327 9.6244C46.9969 11.1454 48.0462 14.3983 46.9382 17.4218L45.3955 21.6316C44.3425 24.505 41.5856 26.4273 38.4885 26.4273H11.6901C8.34401 26.4273 5.42992 24.19 4.58319 20.9971Z" />
      </svg>
    </div>
  );
};

export default Loader;

export const LoaderFullscreen = () => {
  const { shade } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{}}
      className={
        shade
          ? `teaui loader-fullscreen color-${shade} grid ha-center`
          : "teaui loader-fullscreen grid ha-center"
      }
    >
      <svg
        width="49"
        height="28"
        viewBox="0 0 49 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={shade ? `teaui loader color-${shade}` : "teaui loader"}
      >
        <path d="M4.58319 20.9971L1.74551 10.2968C0.551989 5.79629 3.85116 1.44613 8.47339 1.50051C16.0833 1.59004 25.5608 2.08725 30.9726 3.75218C36.2936 5.38915 40.9722 7.70593 44.3327 9.6244C46.9969 11.1454 48.0462 14.3983 46.9382 17.4218L45.3955 21.6316C44.3425 24.505 41.5856 26.4273 38.4885 26.4273H11.6901C8.34401 26.4273 5.42992 24.19 4.58319 20.9971Z" />
      </svg>
    </motion.div>
  );
};
