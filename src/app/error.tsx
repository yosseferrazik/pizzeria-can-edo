"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <span className={styles.code}>500</span>
        <h1 className={styles.title}>Algo salió mal</h1>
        <p className={styles.message}>
          Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
        </p>
        <div className={styles.actions}>
          <button onClick={reset} className={styles.button}>
            Intentar de nuevo
          </button>
          <Link href="/" className={styles.buttonOutline}>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
