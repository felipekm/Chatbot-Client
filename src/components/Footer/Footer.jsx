import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faReddit,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Copyright © 2024 ChatSphere. Designed By{" "}
          <a href="#">ChatSphere</a>
        </p>
      </div>
      <div className={styles.handles}>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faReddit} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
