import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import {
  AppGalleryButton,
  GooglePlayButton,
  AppStoreButton,
} from "react-mobile-app-button";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, google_store, app_store },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {google_store && <GooglePlayButton url={google_store} theme={"dark"}/>}
        {app_store && <AppStoreButton url={google_store} theme={"dark"}/>}
      </div>
    </div>
  );
};
