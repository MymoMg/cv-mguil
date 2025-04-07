import styles from "./Timeline.module.css"


const experiences = [
    { 
        role : "Conceptrice e-learning (alternance)",
        company : "Liebherr Mining, Colmar",
        year : "Sept 2023 - Sept 2024",
        description: "- Conception et amélioration des formations e-learning, en optimisant l’ergonomie et la communication visuelle. - Adaptation des productions aux standards lingistiques. - Formation de l'équipe e-learning à l’utilisation d’outils numériques et à l’IA appliquée à la communication."
    },
    { 
        role : "Graphiste (alternance)",
        company : "Resetel, Wettolsheim",
        year : "Oct 2022 - Août 2023",
        description: "- Refonte du site web. - Réalisation de visuels (catalogue d'entreprise, flyers, carte de visite, stickers, kakemonos, posts réseaux sociaux)"
    },
    { 
        role : "Agente d'accueil et de service client",
        company : "Boulanger Électroménagers et Multimédia, Colmar",
        year : "Juin 2022 - Août 2022",
        description: "Accueil et conseil des clients, gestion des réclamations et résolution des problèmes (SAV)."
    },
    {
        role : "Bénévole",
        company : "Association UCS, Colmar",
        year : "Depuis Mai 2022",
        description: "Préparation de colis alimentaires."
    },
    {
        role : "Stagiaire",
        company : "INA (Institut National de l'Audiovisuel), Paris",
        year : "Février 2020",
        description: "Découvertes du métier de l'audiovisuel"
    }
]

export default function Timeline() {
return (
        <div className={styles.timeline}>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.path}> {link.title} </a>
                    </li>
                )
                )}
            </ul>
        </div>
);
}