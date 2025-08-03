import { useEffect, useRef } from "react";
import styles from "./Timeline.module.css"
import TimelineCard from "./TimelineCard/ TimelineCard"   

const experiences = [
  {
    role: "Conceptrice e-learning (alternance)",
    company: "Liebherr Mining, Colmar",
    year: "Sept 2023 - Sept 2024",
    description:
      "- Conception et amélioration des formations e-learning, en optimisant l’ergonomie et la communication visuelle. - Adaptation des productions aux standards lingistiques. - Formation de l'équipe e-learning à l’utilisation d’outils numériques et à l’IA appliquée à la communication.",
  },
  {
    role: "Graphiste (alternance)",
    company: "Resetel, Wettolsheim",
    year: "Oct 2022 - Août 2023",
    description:
      "- Refonte du site web. - Réalisation de visuels (catalogue d'entreprise, flyers, carte de visite, stickers, kakemonos, posts réseaux sociaux)",
  },
  {
    role: "Agente d'accueil",
    company: "Boulanger Électroménagers et Multimédia, Colmar",
    year: "Juin 2022 - Août 2022",
    description:
      "Accueil et conseil des clients, gestion des réclamations et résolution des problèmes (SAV).",
  },
  {
    role: "Bénévole",
    company: "Association UCS, Colmar",
    year: "Depuis Mai 2022",
    description: "Préparation de colis alimentaires.",
  },
  {
    role: "Stagiaire",
    company: "INA (Institut National de l'Audiovisuel), Paris",
    year: "Février 2020",
    description: "Découvertes du métier de l'audiovisuel",
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
              description={
                <p>
                  {link.description.split(" - ").map((item, idx) => (
                    <span key={idx}>
                      {idx !== 0 && "- "}
                      {item}
                      <br />
                    </span>
                  ))}
                </p>
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
