import React, { useState, useEffect } from "react";
import styles from "./ToggleButton.module.css";

const ToggleButton = () => {
  const [mode, setMode] = useState("darkMode");
  const toggleFunction = (check) => {
    check ? setMode("lightMode") : setMode("darkMode");
  };
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <div style={{ height: 30 }}>
      <div className={styles.toggleDiv}>
        <input
          type="checkbox"
          id="toggle"
          onChange={(e) => toggleFunction(e.target.checked)}
        />
        <label htmlFor="toggle" className={styles.toggleButton}>
          <span className={styles.toggleBall}></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
