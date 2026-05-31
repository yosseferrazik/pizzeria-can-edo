"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { useReveal } from "@/hooks/useReveal";
import styles from "./page.module.css";

const IMG = {
  logo: "/images/logo.png",
  logoWhite: "/images/logo-white.png",
  hero: "/images/hero.jpg",
  edo: "/images/edo.jpg",
  tomatoes: "/images/tomatoes.jpg",
  romana: "/images/romana.jpg",
  favicon: "/images/favicon.png",
  moto: "/images/moto.png",
  pronto: "/images/pronto.png",
  pizza: "/images/pizza.png",
  romanaLogo: "/images/romana-logo.png",
};

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Historia", href: "#historia" },
  { label: "Carta", href: "#carta" },
  { label: "Calidad", href: "#calidad" },
  { label: "La Romana", href: "#romana" },
  { label: "Ubicación", href: "#ubicacion" },
];

const MENU = [
  {
    category: "Clásicas",
    items: [
      { name: "Margherita", desc: "Tomate, mozzarella, albahaca", price: "12€" },
      { name: "Marinara", desc: "Tomate, ajo, orégano, aceite", price: "11€" },
      { name: "Diavola", desc: "Tomate, mozzarella, salami picante", price: "14€" },
    ],
  },
  {
    category: "Especiales",
    items: [
      { name: "Can Edo", desc: "Mozzarella di bufala, pesto, tomate seco", price: "16€" },
      { name: "Tartufo", desc: "Crema de trufa, champiñones, parmesano", price: "18€" },
      { name: "Prosciutto e Rucola", desc: "Prosciutto crudo, rúcula, parmesano", price: "17€" },
    ],
  },
  {
    category: "Dolci & Bebidas",
    items: [
      { name: "Tiramisú", desc: "Casero, receta tradicional", price: "7€" },
      { name: "Panna Cotta", desc: "Con frutos rojos", price: "7€" },
      { name: "Vinos locales", desc: "Selección de proximidad", price: "—" },
    ],
  },
];

function Hero() {
  return (
    <section className="hero section-full">
      <div className="hero-bg">
        <Image src={IMG.hero} alt="Platja de Blanes" fill priority sizes="100vw" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-badge">Auténtica Pizza Napolitana</span>
        <Image className="hero-logo" src={IMG.logoWhite} alt="Can Edo" width={420} height={113} priority />
        <p className="hero-tagline">Blanes · Costa Brava</p>
      </div>
      <div className={styles.heroCta}>
        <Link href="/carta" className={styles.heroPrimary}>
          Ver Carta
        </Link>
        <a href="https://wa.me/34613418837" target="_blank" rel="noopener noreferrer" className={styles.heroSecondary}>
          Reservar
        </a>
      </div>
      <a className="hero-scroll" href="#historia">Descubrir</a>
    </section>
  );
}

function Announcement() {
  return (
    <section className="announcement section-full">
      <Image src={IMG.romana} alt="Próximamente La Romana" width={300} height={300} loading="lazy" />
    </section>
  );
}

function Historia() {
  return (
    <section id="historia" className="section">
      <p className="section-subtitle">Nuestra Historia</p>
      <div className="history-grid">
        <div className="history-image reveal">
          <div className="history-badge">Italian Chef</div>
          <Image src={IMG.edo} alt="Edoardo Gualtieri" width={600} height={750} priority />
        </div>
        <div className="history-text reveal">
          <h2 id="bienvenidos">Bienvenidos a</h2>
          <h3>Pizzeria Can Edo</h3>
          <p className="name">Edoardo Gualtieri</p>
          <p>
            Un <span className="highlight">maestro pizzero italiano</span> con más de 25 años de
            experiencia. A lo largo de su trayectoria, Edo ha trabajado en diversas pizzerías,
            incluyendo algunas de renombre internacional, donde no solo perfeccionó su técnica,
            sino que también formó parte de equipos ganadores de importantes premios.
          </p>
          <p>
            Cada pizza que sale de nuestras manos es una obra de arte que combina técnica, pasión
            y los mejores ingredientes. Edo se destaca por su habilidad para seleccionar sabores
            y productos de la más alta calidad, creando combinaciones únicas que te transportarán
            a Italia en cada bocado.
          </p>
          <p>
            <strong>
              Ven a descubrir el arte de Edo en Pizzería Can Edo y experimenta el sabor de una
              tradición perfeccionada por décadas. ¡Estamos seguros de que te sorprenderá!
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function MenuPreview() {
  return (
    <section id="carta" className="section menu-preview">
      <p className="section-subtitle">Descubre</p>
      <h2 className="section-title reveal">Nuestra Carta</h2>
      <div className="menu-tag reveal">El gusto es biológico y de proximidad</div>
      <div className="menu-grid">
        {MENU.map((cat) => (
          <div key={cat.category} className="menu-category reveal">
            <h3>{cat.category}</h3>
            {cat.items.map((item) => (
              <div key={item.name} className="menu-item">
                <div>
                  <div className="menu-item-name">{item.name}</div>
                  <div className="menu-item-desc">{item.desc}</div>
                </div>
                <span className="menu-item-price">{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="reveal" style={{ marginTop: 40 }}>
        <Link href="/carta" className="btn-primary">
          Ver carta completa
        </Link>
      </div>
    </section>
  );
}

function Calidad() {
  return (
    <section id="calidad" className="section quality section-full">
      <div className="section">
        <p className="section-subtitle">Filosofía</p>
        <div className="quality-grid">
          <div className="quality-text reveal">
            <h2 id="filosofia">El gusto es biológico y de proximidad</h2>
            <p>
              Todos nuestros productos se realizan utilizando exclusivamente materias primas de
              proximidad, haciendo red con productores locales, y serán acompañados por vinos de
              proximidad y postres caseros.
            </p>
            <ul className="quality-list">
              <li>Materias primas de proximidad</li>
              <li>Red con productores locales</li>
              <li>Vinos de la región</li>
              <li>Postres caseros</li>
              <li>Ingredientes biológicos certificados</li>
              <li>Masa madre natural</li>
            </ul>
          </div>
          <div className="quality-image reveal">
            <Image src={IMG.tomatoes} alt="Ingredientes frescos" width={600} height={500} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Romana() {
  return (
    <section id="romana" className="romana section-full">
      <div className="romana-carousel">
        <div className="romana-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} style={{ display: "flex", gap: 40, alignItems: "center" }}>
              <Image src={IMG.moto} alt="" width={100} height={100} loading="lazy" />
              <Image src={IMG.pronto} alt="" width={200} height={100} loading="lazy" />
            </span>
          ))}
        </div>
      </div>

      <div className="romana-image reveal">
        <Image src={IMG.pizza} alt="Pizza artesanal" width={200} height={200} loading="lazy" />
      </div>
      <div className="romana-tag reveal">Próximamente</div>
      <div className="reveal">
        <Image src={IMG.romanaLogo} alt="La Romana" width={500} height={72} loading="lazy" />
      </div>
      <p className="reveal">
        Estamos trabajando para abrir las puertas de nuestra segunda ubicación.
        Un nuevo espacio donde seguir compartiendo nuestra pasión por la pizza artesanal.
        Síguenos para estar al tanto de las novedades.
      </p>
    </section>
  );
}

function Ubicacion() {
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
              <a href="mailto:info@pizzeriacanedo.com">info@pizzeriacanedo.com</a>
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

export default function Home() {
  useReveal();

  return (
    <>
      <Nav links={NAV_LINKS} logoHref="/" />
      <Hero />
      <Announcement />
      <Historia />
      <MenuPreview />
      <Calidad />
      <Romana />
      <Ubicacion />
      <Footer />
      <WhatsAppFab />
    </>
  );
}
