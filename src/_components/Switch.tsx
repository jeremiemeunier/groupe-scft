"use client";

import { ThemeContext } from "@/_context/ThemeContext";
import { useContext } from "react";

const Switch = () => {
  const { websiteDarkTheme, setWebsiteDarkTheme } = useContext(ThemeContext);

  return (
    <div className="teaui theme-switch">
      <input
        id="theme-switch-input"
        className="teaui theme-switch-input"
        type="checkbox"
        onChange={() => {
          setWebsiteDarkTheme(!websiteDarkTheme);
        }}
        checked={websiteDarkTheme}
      ></input>
      <label
        htmlFor="theme-switch-input"
        className="teaui theme-switch-label"
      ></label>
      <span>Mode sombre</span>
    </div>
  );
};

export default Switch;
