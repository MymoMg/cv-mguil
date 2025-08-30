import styles from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";


const links = [
    {
        icon : <FontAwesomeIcon icon={faSquareGithub} />,
    },
    {
        icon : <FontAwesomeIcon icon={faLinux} />,
    },
    {
        icon : <FontAwesomeIcon icon={faLinux} />,
    }
]

const Footer= () => {
  return (
<section className={styles.devskills}>
      <Shape className={`${styles.shape} ${styles.shapeOne}`}/>
        <h2>Compétences en Programmation</h2>
        <ul className={styles.programmingSkills}>
            {links.map((link, index) => (
                <li key={index}>
                    {link.icon}
                    <span className="h4"> {link.title} </span>
                </li>
            )
            )} 
        </ul>
      </section>
);
};

export default Footer;