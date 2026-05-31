import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "../legal-page.module.css";

export const metadata: Metadata = {
  title: "Aviso Legal – Can Edo | Pizzeria Artesanal",
  description: "Aviso Legal de Pizzeria Can Edo. Blanes, Costa Brava.",
};

export default function AvisoLegalPage() {
  return (
    <>
      <Nav links={[{ label: "Inicio", href: "/" }]} logoHref="/" />
      <main className={styles.page}>
        <div className={styles.container}>
          <p className={styles.subtitle}>LSSI-CE</p>
          <h1 className={styles.title}>Aviso Legal</h1>

          <section className={styles.section}>
            <h2>1. ¿Quién gestiona esta web?</h2>
            <ul className={styles.list}>
              <li><strong>Titular:</strong> Edoardo Gualtieri</li>
              <li><strong>Negocio:</strong> Pizzeria Can Edo</li>
              <li><strong>Dirección:</strong> Carrer Josep Tarradellas, 3, 17300 Blanes, Girona</li>
              <li><strong>Teléfono:</strong> <a href="tel:+34613418837">+34 613 418 837</a></li>
              <li><strong>Email:</strong> —</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. Propiedad del contenido</h2>
            <p>
              Todo lo que ves en esta web (textos, fotos, logotipos, diseño) es de Can Edo o está usado con permiso.
              No está permitido copiarlo o distribuirlo sin autorización.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Uso de la web</h2>
            <p>
              Al usar esta web te comprometes a no hacer un uso ilegal de ella. No nos hacemos responsables de
              problemas técnicos, virus o daños que puedan surgir por el uso de la página.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Enlaces externos</h2>
            <p>
              Esta web tiene enlaces a redes sociales y otras páginas externas. No nos responsabilizamos de su
              contenido ni de sus políticas de privacidad.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Legislación</h2>
            <p>
              Cualquier conflicto relacionado con esta web se resolverá según la ley española, en los tribunales
              de Blanes (Girona).
            </p>
          </section>

          <p className={styles.updated}>Última actualización: mayo de 2026</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
