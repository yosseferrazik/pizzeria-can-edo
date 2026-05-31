import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "../legal-page.module.css";

export const metadata: Metadata = {
  title: "Política de Cookies – Can Edo | Pizzeria Artesanal",
  description: "Política de Cookies de Pizzeria Can Edo. Blanes, Costa Brava.",
};

export default function CookiesPage() {
  return (
    <>
      <Nav links={[{ label: "Inicio", href: "/" }]} logoHref="/" />
      <main className={styles.page}>
        <div className={styles.container}>
          <p className={styles.subtitle}>Cookies</p>
          <h1 className={styles.title}>Política de Cookies</h1>

          <section className={styles.section}>
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos que se guardan en tu navegador cuando visitas una web. Sirven
              para que la web funcione correctamente o para recordar preferencias.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Cookies que usamos</h2>
            <p>En Can Edo usamos únicamente cookies técnicas necesarias para el funcionamiento de la web:</p>
            <ul className={styles.list}>
              <li><strong>Preferencias de navegación</strong> (idioma, etc.).</li>
              <li><strong>Cookies de sesión</strong> para mantener la web operativa.</li>
            </ul>
            <p>
              <strong>No usamos</strong> cookies de seguimiento, publicitarias, de redes sociales ni de terceros
              como Google Analytics.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Cookies de terceros</h2>
            <p>
              Esta web puede cargar contenido externo (Google Maps, Instagram, WhatsApp) que podría establecer
              sus propias cookies. No tenemos control sobre ellas. Te recomendamos revisar las políticas de
              privacidad de esos servicios.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Cómo gestionar las cookies</h2>
            <p>
              Puedes configurar tu navegador para bloquear o eliminar las cookies. Cada navegador tiene su
              propia configuración:
            </p>
            <ul className={styles.list}>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Edge</a></li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Cambios futuros</h2>
            <p>
              Si en el futuro añadimos cookies que requieran consentimiento (por ejemplo, analytics),
              te lo notificaremos y te pediremos aceptación antes de activarlas.
            </p>
          </section>

          <p className={styles.updated}>Última actualización: mayo de 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
