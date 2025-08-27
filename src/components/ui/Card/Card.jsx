import styles from "./Card.module.css"

export default function Card({children, className, ...props}) {
  return (
    <article className={`${styles.card} ${className}`} {...props}>
        {children}
    </article>
  );
}