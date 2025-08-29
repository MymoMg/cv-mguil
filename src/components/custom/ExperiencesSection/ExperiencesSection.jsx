import { useState } from "react";
import styles from "./ExperiencesSection.module.css";
import Card from "../../ui/Card/Card";
import Shape from "../Shape/Shape";

const experiences = [
  {
    title: "Développeuse Web",
    company: "AB3C For You, Strasbourg",
    role: "Stage",
    year: "Mars 2025 - Août 2025",
    description:
      "- Intégration d'un calendrier dynamique pour la gestion des événements. - Amélioration de l'accessibilité du site web. - Optimisation des performances front-end.",
  },
  {
    title: "Conceptrice e-learning",
    role: "Alternance",
    company: "Liebherr Mining, Colmar",
    year: "Sept 2023 - Sept 2024",
    description:
      "- Conception et amélioration des formations e-learning, en optimisant l’ergonomie et la communication visuelle. - Adaptation des productions aux standards lingistiques. - Formation de l'équipe e-learning à l’utilisation d’outils numériques et à l’IA appliquée à la communication.",
  },
  {
    title: "Graphiste",
    role: "Alternance",
    company: "Resetel, Wettolsheim",
    year: "Oct 2022 - Août 2023",
    description:
      "- Refonte du site web. - Réalisation de visuels (catalogue d'entreprise, flyers, carte de visite, stickers, kakemonos, posts réseaux sociaux)",
  },
  {
    title: "Agente d'accueil",
    role: "CDD",
    company: "Boulanger Électroménagers et Multimédia, Colmar",
    year: "Juin 2022 - Août 2022",
    description:
      "- Accueil et conseil des clients. - Gestion des réclamations. - Résolution des problèmes (SAV).",
  },
  {
    title: "Logistique & Animation",
    role: "Bénévolat",
    company: "Association UCS, Colmar",
    year: "Depuis Mai 2022",
    description: "- Animatrice lors d'évenements. - Préparation et distribution de colis alimentaires.",
  },
  {
    title: "Immersion Audiovisuel",
    role: "Stage",
    company: "INA (Institut National de l'Audiovisuel), Paris",
    year: "Février 2020",
    description: "- Visites plateaux télé (France 3, chaînes TV) - Ateliers pratiques sur les métiers et workflows. - Échanges avec des professionnels (journalisme, production) - Immersion au sein de l’INA.",
  },
];

export default function ExperiencesSection({...props}) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles.experienceSection} {...props}>
      <Shape className={`${styles.shape} ${styles.shapeOne}`}/>
      <Shape className={`${styles.shape} ${styles.shapeTwo}`}/>
      <div className={styles.container}>
      <h2>Mes Expériences Pro</h2>
      <div className={styles.experiencesGrid}>
        {experiences.map((exp, index) => (
          <Card className={styles.experienceCard} key={index}>
            <h3>{exp.title}</h3>
            <h4>{exp.role}</h4>
            <p className={styles.company}>{exp.company}</p>
            <p className={styles.year}>{exp.year}</p>

              <p className={`${styles.description} ${expandedIndex === index ? styles.expanded : styles.collapsed}`}>
                {exp.description.split(" - ").map((item, idx) => (
                  <span key={idx}>
                    {idx !== 0 && "- "}
                    {item}
                    <br />
                  </span>
                ))}
              </p>

            <button
              className={styles.toggleButton}
              onClick={() => toggleDescription(index)}
            >
              {expandedIndex === index ? "Réduire" : "En savoir plus..."}
            </button>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
}
