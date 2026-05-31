import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Ubicacion.module.css";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="section">
      <p className="section-subtitle">Visítanos</p>
      <div className="location-grid">
        <div className="location-info reveal">
          <h2>Blanes</h2>
          <p className="region">Costa Brava</p>

          <div className="location-detail">
            <div className="location-detail-icon"><MapPin size={24} /></div>
            <div>
              <h4>Dirección</h4>
              <p>Carrer Josep Tarradellas, 3, 17300 Blanes, Girona</p>
            </div>
          </div>

          <div className="location-detail">
            <div className="location-detail-icon"><Phone size={24} /></div>
            <div>
              <h4>Teléfono</h4>
              <a className="location-phone" href="tel:+34613418837">+34 613 418 837</a>
            </div>
          </div>

          <div className="location-detail">
            <div className="location-detail-icon"><Mail size={24} /></div>
            <div>
              <h4>Email</h4>
              —
            </div>
          </div>

          <div className={styles.locationBtnContainer}>
            <a className={styles.locationBtn} href="https://wa.me/34613418837" target="_blank" rel="noopener noreferrer">
              Reserva por WhatsApp
            </a>
          </div>
        </div>

        <div className="location-map reveal">
          <iframe
            title="Ubicación Can Edo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1!2d2.789!3d41.675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQwJzMwLjAiTiAywrA0NzIyMC4wIkU!5e0!3m2!1sca!2ses!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
