import styles from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const contact = [
    {
        icon : <FontAwesomeIcon icon={faSquareGithub} />,
        link : "https://github.com/MymoMg"
    },
    {
        icon : <FontAwesomeIcon icon={faAt} />,
        link : "mailto:mmguil68@gmail.com"
    },
    {
        icon : <FontAwesomeIcon icon={faLinkedin} />,
        link : "https://www.linkedin.com/in/meriem-mguil-855b94216/"
    }
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        {contact.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            {item.icon}
          </a>
        ))}
      </div>

      <a href="/mentions-legales" className={styles.mentions}>
        Mentions Légales
      </a>

      <hr className={styles.separator} />

      <p className={styles.copyright}>
        ©2025 Mguil Meriem TOUS DROITS RÉSERVÉS
      </p>
    </footer>
  );
};

export default Footer;