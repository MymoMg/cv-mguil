import styles from "./Hero.module.css"
import Button from "../../ui/Button/Button";
import Shape from "../Shape/Shape";

export default function Hero() {
return (
    <section className={styles.hero}>
        <Shape className={`${styles.shape} ${styles.shapeOne}`}/>
        <Shape className={`${styles.shape} ${styles.shapeTwo}`}/>
        <div className={styles.container}>
            <div className={styles.content}>
                <h2> MGUIL &nbsp; Meriem </h2>
                <h1> Étudiante en Développement Web</h1>
                <p> Après un parcours en web design et stratégie de communication, j’ai fait le choix de me reconvertir dans le développement web pour donner une nouvelle dimension à ma créativité mais surtout pour pouvoir produire mes créations web.
                Actuellement en ..., je suis à la recherche d’une alternance pour continuer à apprendre et à monter en compétences. </p>
                </div>
            <div className={styles.buttonContainer}>
                <Button href="/assets/mg-meriem-cv.pdf" target="_blank">  Mon CV en PDF ›  </Button>
                <Button> Mes Projets › </Button>
            </div>
        </div>
    </section> 
);
}