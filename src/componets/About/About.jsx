import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage}
          src={getImageUrl("about/about.png")}
          alt="Remember application"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.aboutItemImage} src={getImageUrl("about/mobile.png")} alt="mobile" />
            <div className={styles.aboutItemText}>
              <h3>Mobile Application Developer</h3>
              <p>
                I'm a frontend developer with experience in build multi-platform mobile application.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutItemImage} src={getImageUrl("about/backend.png")} alt="backend" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I specialize in developing fast and optimized backend systems and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/web.png")} alt="web" className={styles.aboutItemImage}/>
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I have expertise in building efficient and responsive websites
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
