import styles from "./Navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const links = [
    { 
        title : <FontAwesomeIcon icon={faHouse} />,
        path : "#home"
    },
    {
        title : <FontAwesomeIcon icon={faGraduationCap} />,
        path : "#diplomes"
    },
    {
        title : <FontAwesomeIcon icon={faBriefcase} />,
        path : "#experiences"
    },
    {
        title : <FontAwesomeIcon icon={faListCheck} />,
        path : "#competences"
    },
    {
        title : <FontAwesomeIcon icon={faPen} />,
        path : "#projets"
    }
]

export default function Navbar() {
return (
        <nav className={styles.nav}>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.path}> {link.title} </a>
                    </li>
                )
                )}
            </ul>
        </nav>
);
}