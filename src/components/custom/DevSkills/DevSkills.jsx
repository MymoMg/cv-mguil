import styles from "./DevSkills.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import Shape from "../Shape/Shape";


const links = [
    {
        icon : <FontAwesomeIcon icon={faReact} />,
        title : "React"
    },
    {
        icon : <FontAwesomeIcon icon={faNode} />,
        title : "Node.js"
    },
    {
        icon : <FontAwesomeIcon icon={faDatabase} />,
        title : "Database"
    },
    {
        icon : <FontAwesomeIcon icon={faSquareGithub} />,
        title : "GitHub"
    },
    {
        icon : <FontAwesomeIcon icon={faLinux} />,
        title : "Linux"
    }
]

const DevSkills = () => {
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

export default DevSkills;