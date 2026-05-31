import { MessageCircle, Camera } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} section-full`}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <p className={styles.footerBrand}>Can Edo</p>
          <p>Pizzeria Artesanal</p>
          <p className={styles.footerCreditNote}>
            Blanes · Costa Brava
          </p>
        </div>

        <div className={styles.footerCol}>
          <h4>Horarios</h4>
          <ul className={styles.footerHours}>
            <li><span>Lun–Jue:</span> 12:30–16:00 / 19:30–23:00</li>
            <li><span>Vie–Sáb:</span> 12:30–16:00 / 19:30–00:00</li>
            <li><span>Domingo:</span> 12:30–16:00 / 19:30–23:00</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Contacto</h4>
          <p>Carrer Josep Tarradellas, 3</p>
          <p>17300 Blanes, Girona</p>
          <p><a href="tel:+34613418837">+34 613 418 837</a></p>
          <div className={styles.footerSocial}>
            <a href="https://wa.me/34613418837" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            <a href="https://www.instagram.com/pizzeriacanedo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Camera size={18} /></a>
          </div>
        </div>
      </div>

      <p className={styles.footerCredit}>
        Copyright &copy; {new Date().getFullYear()} Pizzeria Can Edo –&nbsp;
        <a href="https://112studio112.com/" target="_blank" rel="noopener noreferrer">112 Studio</a>
        <br />
        Web desarrollada por <a href="https://yosseferrazik.com"><strong>Yossef Errazik</strong></a>
        <br />
        Foto: <a href="https://commons.wikimedia.org/wiki/File:Blanes_-_Passeig_de_s%27Abanell_-_View_SSW.jpg" target="_blank" rel="noopener noreferrer">Txllxt TxllxT</a>
        {" "}&copy; <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC-BY-SA-4.0</a>
      </p>
    </footer>
  );
}
