import { useEffect, useRef } from "react";
import styles from "./Timeline.module.css"
import TimelineCard from "./TimelineCard/ TimelineCard"   

const experiences = [
   {
    role: "BAC +3 CDA Concepteur Développeur d'Applications",
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

export default function Timeline() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      itemsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className={styles.timeline}>
      <ul>
        {experiences.map((link, index) => (

          <li
            key={index}
            ref={el => (itemsRef.current[index] = el)}
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            data-index={index + 1}
          >
            
            <TimelineCard
              role={link.role}
              company={link.company}
              year={link.year}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
