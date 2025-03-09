import styles from "./Hero.module.css"
import Button from "../../ui/Button/Button";
import Shape from "../Shape/Shape";

export default function Hero() {
return (
    <section className={styles.hero}>
        <Shape/>
        <div className={styles.container}>
            <div className={styles.content}>
                <h2> MGUIL Meriem </h2>
                <h1> Étudiante en Développement Web</h1>
                <p> Après un parcours en web design et stratégie de communication, j’ai fait le choix de me reconvertir dans le développement web pour donner une nouvelle dimension à ma créativité mais surtout pour pouvoir produire mes créations web.
                Actuellement en formation CDA - Concepteur Développeur d’Applications, je suis actuellement à la recherche d’un stage pour continuer à apprendre et monter en compétences. </p>
                </div>
            <div className={styles.buttonContainer}>
                <Button href="/assets/mg-meriem-cv.pdf" target="_blank">  Mon CV en PDF ›  </Button>
                <Button> Mes Projets › </Button>
            </div>
        </div>
    </section> 
);
}