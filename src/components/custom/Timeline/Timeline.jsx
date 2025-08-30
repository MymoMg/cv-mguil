import styles from "./Timeline.module.css"
import TimelineCard from "./TimelineCard/ TimelineCard"  
import { motion } from "motion/react" 

const experiences = [
  {
    role: "Formation CDA (Concepteur Développeur d'Applications)",
    company: "CCI Campus, Strasbourg",
    year: "Octobre 2024 - Juillet 2025",
  },
  {
    role: "BUT MMI (Métiers du Multimédia et de l'Internet)",
    company: "IUT de Dijon, Université de Bourgogne",
    year: "Sept 2021 - Sept 2024",
  },
  {
    role: "L1 LEA (Langues Étrangères Appliquées)",
    company: "Paul Valéry Montpellier 3, Montpellier",
    year: "Septembre 2020 - Juillet 2021"
  },
  {
    role: "BAC STI2D Parcours PArI (Pousses d'architectes et d'Ingénieurs)",
    company: "Lycée Blaise Pascal, Colmar",
    year: "Septembre 2017 - Juillet 2020"
  },
];

export default function Timeline( { ...props } ) {
  return (
    <section className={styles.section} {...props}>
      <h2>Mes Diplomes et Formations</h2>
      <div className={styles.timeline}>
        <ul>
          {experiences.map((link, index) => (
            <motion.li
              key={index}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
              data-index={index + 1}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TimelineCard
                role={link.role}
                company={link.company}
                year={link.year}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}