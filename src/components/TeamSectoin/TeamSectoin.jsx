import React from "react";
import styles from "./TeamSection.module.css"; // Make sure the import path is accurate
import TeamCard from "../TeamCard/TeamCard"; // Update the import path if necessary

const TeamSection = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.mainHeading}>Our Team</p>
      <TeamCard />
    </div>
  );
};

export default TeamSection;
