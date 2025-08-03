import styles from "./TimelineCard.module.css";

export default function Timeline({ role, company, year, description }) {
  return (
    <article className={styles.timelineCard}>
      <div className={styles.content}>
        <h3>{role}</h3>
        <h4>{company}</h4>
        <span>{year}</span>
        <div className={styles.description}>{description} </div>               
      </div>
    </article>
  );
}