import styles from "./TimelineCard.module.css";
import Card from "../../../ui/Card/Card";

export default function Timeline({ role, company, year, description }) {
  return (
    <Card>
      <div className={styles.content}>
        <h3 className="h4">{role}</h3>
        <h4 className="h5">{company}</h4>
        <span>{year}</span>
        <div className={styles.description}>{description} </div>               
      </div>
    </Card>
  );
}