import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Página no encontrada</h1>
        <p className={styles.message}>
          La página que buscas no existe o ha sido movida.
        </p>
        <Link href="/" className={styles.button}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
