import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "../legal-page.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidad – Can Edo | Pizzeria Artesanal",
  description: "Política de Privacidad de Pizzeria Can Edo. Blanes, Costa Brava.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Nav links={[{ label: "Inicio", href: "/" }]} logoHref="/" />
      <main className={styles.page}>
        <div className={styles.container}>
          <p className={styles.subtitle}>RGPD</p>
          <h1 className={styles.title}>Política de Privacidad</h1>

          <section className={styles.section}>
            <h2>1. Responsable</h2>
            <ul className={styles.list}>
              <li><strong>Responsable:</strong> Edoardo Gualtieri</li>
              <li><strong>Negocio:</strong> Pizzeria Can Edo</li>
              <li><strong>Dirección:</strong> Carrer Josep Tarradellas, 3, 17300 Blanes, Girona</li>
              <li><strong>Email:</strong> —</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. ¿Qué datos recogemos y para qué?</h2>
            <p>
              Recogemos los datos que nos facilitas (nombre, teléfono, email) cuando nos contactas por WhatsApp,
              email o formulario. Los usamos para:
            </p>
            <ul className={styles.list}>
              <li>Gestionar tu reserva o consulta.</li>
              <li>Responder a tus mensajes.</li>
              <li>Identificarte como cliente habitual y ofrecerte un servicio más cercano cuando vuelvas.</li>
              <li>Cumplir con obligaciones legales (facturación, etc.).</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Base legal</h2>
            <p>
              Tratamos tus datos porque nos los facilitas voluntariamente (tu consentimiento), porque son
              necesarios para prestarte el servicio, y porque tenemos un interés legítimo en reconocerte como
              cliente habitual para darte un mejor trato.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. ¿Por cuánto tiempo guardamos tus datos?</h2>
            <p>
              Los conservamos mientras seas cliente habitual. Si dejas de visitarnos, los borramos a los 12 meses,
              salvo los datos necesarios para obligaciones fiscales que se guardan el tiempo que marca la ley.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. ¿Compartimos tus datos con alguien?</h2>
            <p>
              No vendemos ni cedemos tus datos a terceros. Solo los compartimos si la ley nos obliga o si es
              necesario para el servicio (WhatsApp, pasarela de pago, etc.).
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. ¿Usamos cookies?</h2>
            <p>
              Esta web solo usa cookies técnicas necesarias para su funcionamiento. No usamos cookies de
              seguimiento, publicitarias ni de terceros. Para más información, consulta nuestra{" "}
              <a href="/cookies">Política de Cookies</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Tus derechos</h2>
            <p>
              Puedes pedirnos en cualquier momento:
            </p>
            <ul className={styles.list}>
              <li><strong>Acceder</strong> a tus datos.</li>
              <li><strong>Corregirlos</strong> si son incorrectos.</li>
              <li><strong>Borrarlos</strong> (si ya no los necesitamos).</li>
              <li><strong>Limitarlos</strong> o <strong>portarlos</strong> a otro sitio.</li>
              <li><strong>Oponerte</strong> a que los usemos para ciertos fines.</li>
            </ul>
            <p>
              Escríbenos para ejercer
              cualquiera de estos derechos. Si no quedas satisfecho, puedes reclamar ante la{" "}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos</a>.
            </p>
          </section>

          <p className={styles.updated}>Última actualización: mayo de 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
