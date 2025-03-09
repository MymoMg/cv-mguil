import styles from "./Button.module.css"

export default function Button({ children, className, href, ...props }) {
  if (href) {
    return (
      <a
        href={href}
        className={`${styles.button} ${className ? className : ""}`}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={`${styles.button} ${className ? className : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}