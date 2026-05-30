"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import styles from "./carta.module.css";

/* Assets */
const ASSETS = {
  logoWhite: "https://pizzeriacanedo.com/wp-content/uploads/2025/02/LOGO-BLANCO-1024x274.png",
  hero: "https://pizzeriacanedo.com/wp-content/uploads/2025/02/delicious-fresh-tomatoes-plate-high-angle-scaled.jpg",
  pizza: "https://pizzeriacanedo.com/wp-content/uploads/2026/05/transparent-PZZ.png",
};

/* Helpers */
const DIVIDER = (
  <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "0 auto 48px", maxWidth: 400 }}>
    <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, var(--green))" }} />
    <span style={{ color: "var(--green)", fontSize: 18 }}>✦</span>
    <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--green), transparent)" }} />
  </div>
);

/* Datos menú */
const CATEGORIES = [
  { id: "entrantes", label: "Entrantes", icon: "🥗" },
  { id: "pizzas", label: "Pizzas", icon: "🍕" },
  { id: "pastas", label: "Pastas", icon: "🍝" },
  { id: "postres", label: "Postres", icon: "🍰" },
  { id: "bebidas", label: "Bebidas", icon: "🍷" },
];

const STARTERS = [
  { name: "Burrata + Focaccia", price: "14€", desc: "Rúcula, amarena macerada con vinagre balsámico de Módena y almendras laminadas" },
  { name: "Porquetta de Ariccia + Focaccia", price: "15€", desc: "Mostaza de manzana y rúcula" },
  { name: "Camembert + Focaccia", price: "11€", desc: "Mostaza de pera y nueces pecanas" },
  { name: "Steak Tartar + Focaccia", price: "16,5€", desc: "Pepinillo encurtido, salsa brava, mayonesa, alcaparras y albahaca" },
  { name: "Parmigiana de Berenjena + Focaccia", price: "12€", desc: "Salsa de tomate, mozzarella, parmesano y albahaca" },
  { name: "Albóndigas de carne + Focaccia", price: "13€", desc: "Salsa de tomate y parmesano" },
  { name: "Focaccia Romero", price: "2,5€", desc: "Crujiente y aromática" },
  { name: "Suppli", price: "3€", desc: "Con mayonesa casera" },
  { name: "Olive All'Ascalona", price: "5€", desc: "Con salsa cacio e pepe" },
  { name: "Patatas Fritas", price: "5€", desc: "Salsa a elección: brava, mayonesa o mostaza de manzana" },
];

const SALADS = [
  { name: "Ensalada de la Casa", price: "10€", desc: "Mix 7 hojas, tomate, frutos rojos, frutos secos y zanahoria" },
  { name: "Ensalada de Tomate", price: "10€", desc: "Mix de tomates, cebolla, albahaca y aceite de arbequina" },
];

const PIZZAS = [
  { name: "Margherita", price: "10€", desc: "Tomate San Marzano D.O.P, mozzarella, parmesano y albahaca", badge: "Clásica" },
  { name: "Diavola", price: "12€", desc: "Tomate San Marzano D.O.P., mozzarella, chorizo artesanal picante, piparras y orégano fresco", badge: "Picante" },
  { name: "Marinara Can Edo", price: "16,5€", desc: "Tomates cherrys locales asados, ajo tierno, stracciatella de burrata, alcaparra frita, anchoas del cantábrico y polvo de aceitunas", badge: "⭐ Casa" },
  { name: "4 Quesos", price: "15,5€", desc: "Mozzarella, queso de cabra curado, tou de tilleur y gamoneo", badge: "Cremosa" },
  { name: "Escalivada Vegana", price: "14,5€", desc: "Crema de calabacín, verduras grilladas, queso vegano y nueces pecana", badge: "Vegana" },
  { name: "Piña", price: "17€", desc: "Mozzarella, gorgonzola, jamón dulce artesanal y piña caramelizada al ron", badge: "Gourmet" },
  { name: "Calzone Trufado", price: "18€", desc: "Calzone abierto con stracciatella trufada y mortadella de jabalí", badge: "Premium" },
  { name: "Calzone de Toda la Vida", price: "16€", desc: "Mozzarella, setas, jamón dulce artesanal, huevo frito", badge: "Tradición" },
  { name: "Carbonara", price: "16€", desc: "Mozzarella, guanciale y crema carbonara", badge: "Italiana" },
  { name: "Atún", price: "18€", desc: "Crema de cebolla, mozzarella, atún ahumado, tomates cherrys confitados, cebollas caramelizadas", badge: "Ahumado" },
  { name: "Espinaca", price: "18€", desc: "Crema de espinacas, salmón ahumado, pistacho, espinaca baby fresca, ricotta de cabra", badge: "Elegante" },
  { name: "Bufalina", price: "18€", desc: "Tomate cherry amarillo del piennolo, mozzarella de búfala, pesto de albahaca y chips de parmesano", badge: "Bufala" },
  { name: "Barbacoa", price: "14€", desc: "Cebolla estofada, bacon, stracciatella ahumada y salsa barbacoa artesanal", badge: "Ahumada" },
  { name: "Ibérica", price: "16,50€", desc: "Tomate San Marzano D.O.P, jamón ibérico, rúcula y pecorino moliterno", badge: "Premium" },
];

const EXTRAS_PIZZA = [
  "Rúcula 3€", "Jamón Dulce 3€", "Jamón Ibérico 4,50€", "Parmesano 2€",
  "Setas 1,5€", "Trufa 6€", "Atún 5€", "Salmón 6€", "Huevo 1,5€", "Aceitunas 2€",
];

const PASTAS = [
  { name: "Rigatoni Alla Carbonara", price: "13€", desc: "Crema de huevo, pecorino, guanciale y pimienta" },
  { name: "Pappardelle al Ragú de Jabalí", price: "16€", desc: "Con pecorino, al mirto" },
  { name: "Tagliatelle Alla Boloñesa", price: "14€", desc: "Ragú clásico con parmesano" },
  { name: "Spaghetti Aglio Olio y Peperoncino", price: "11€", desc: "Aceite, ajo y pimiento picante" },
  { name: "Spaghetti con Calabacín", price: "15€", desc: "Crema de calabacín, tomates cherrys confitados, stracciatella, menta y lima" },
  { name: "Tallarines Cacio e Pepe", price: "13€", desc: "Crema de pecorino, pimienta, limón rallado y menta" },
  { name: "Penne a la Putanesca", price: "15€", desc: "Ajo, alcaparras, anchoas, tomates cherrys y albahaca" },
];

const DESSERTS = [
  { name: "Tiramisú", price: "5€", desc: "Nuestra receta casera tradicional" },
  { name: "Mil Hojas con Crema de Limón y Frutos Rojos", price: "5€", desc: "Fresca y crujiente" },
  { name: "Tarta de Queso con Chocolate Blanco y Frambuesas", price: "5€", desc: "Suave e irresistible" },
  { name: "Cannolo Al Pistacho", price: "5€", desc: "Crema de ricotta con pistacho y glasa de chocolate" },
];

const DRINKS = [
  { label: "Cerveza", icon: "🍺", items: [
    ["Caña Birra Moretti", "3€"], ["Caña Radler", "3€"], ["Jarra Birra Moretti", "4,5€"],
    ["Jarra Radler", "4,5€"], ["Amstel Oro Tostada", "3,2€"], ["Amstel Oro Tostada 0%", "3,2€"],
    ["Cruz Campo sin gluten", "2,8€"], ["1870", "3,2€"], ["Montseny IPA", "3,5€"], ["Ichnusa sin filtrar", "3,5€"],
  ]},
  { label: "Cócteles", icon: "🍸", items: [
    ["Mojito", "7€"], ["Aperol Spritz", "5€"], ["Gin Tonic", "7€"], ["Chupito", "3€"],
  ]},
  { label: "Sin Alcohol", icon: "🥤", items: [
    ["Coca Cola / Zero", "2,8€"], ["Fuzetea Limón", "2,8€"], ["Aquarius Limón", "2,8€"],
    ["Fanta Naranja", "2,8€"], ["Zumo de Manzana / Naranja", "2,5€"], ["Agua Can Edo", "2€"],
    ["Agua Embotellada", "2,5€"], ["Limonada de la Casa", "4€"], ["Tinto de Verano", "3€"],
    ["Zumo de Naranja Natural", "3,8€"],
  ]},
  { label: "Café", icon: "☕", items: [
    ["Café", "1,4€"], ["Café con Leche", "1,8€"], ["Cortado", "1,6€"], ["Carajillo", "2,5€"], ["Infusión", "2,5€"],
  ]},
];

/* Componentes */

function useReveal() {
  useEffect(() => {
    const o = new IntersectionObserver(
      (es) => { es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.revealItem}`).forEach((el) => o.observe(el));
    return () => o.disconnect();
  }, []);
}

function ScrollNav() {
  const [active, setActive] = useState("entrantes");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    CATEGORIES.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className={styles.scrollNav}>
      {CATEGORIES.map((c) => (
        <button
          key={c.id}
          onClick={() => handleClick(c.id)}
          className={`${styles.scrollNavBtn} ${active === c.id ? styles.active : ""}`}
        >
          {c.icon} {c.label}
        </button>
      ))}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className={`nav${scrolled ? " nav-scrolled" : ""}`}>
      <Link href="/">
        <Image className="nav-logo" src={ASSETS.logoWhite} alt="Can Edo" width={160} height={43} priority />
      </Link>
      <button className={`hamburger${menuOpen ? " hamburger-open" : ""}`} onClick={() => setMenuOpen((v) => !v)} aria-label="Menú">
        <span /><span /><span />
      </button>
      <ul className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
        <li><Link href="/" onClick={closeMenu}>Inicio</Link></li>
        {CATEGORIES.map((c) => (
          <li key={c.id}><a href={`#${c.id}`} onClick={closeMenu}>{c.label}</a></li>
        ))}
        <li><a className="nav-cta" href="https://wa.me/34613418837" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Reserva</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg}>
        <Image src={ASSETS.hero} alt="" fill priority style={{ objectFit: "cover" }} />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>Pizzeria Artesanal Can Edo</p>
        <h1 className={styles.heroTitle}>Nuestra Carta</h1>
        <p className={styles.heroText}>
          Ingredientes de proximidad, masa madre natural y la pasión de un maestro pizzero italiano con más de 25 años de experiencia
        </p>
        <div className={styles.heroBtnGroup}>
          <a href="#pizzas" className={styles.heroBtnPrimary}>Ver Pizzas</a>
          <a href="https://wa.me/34613418837" target="_blank" rel="noopener noreferrer" className={styles.heroBtnSecondary}>
            Reserva tu Mesa
          </a>
        </div>
      </div>
      <a href="#entrantes" className={styles.scrollHint}>
        Descubrir
        <span className={styles.scrollHintLine} />
      </a>
    </section>
  );
}

function SectionHeader({ icon, title, subtitle }: { icon: string; title: string; subtitle?: string }) {
  return (
    <div className={`${styles.revealItem} ${styles.sectionHeader}`}>
      <span className={styles.sectionHeaderIcon}>{icon}</span>
      <h2 className={styles.sectionHeaderTitle}>{title}</h2>
      {subtitle && <p className={styles.sectionHeaderSubtitle}>{subtitle}</p>}
      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}>✦</span>
        <span className={styles.dividerLineRight} />
      </div>
    </div>
  );
}

function MenuRow({ name, price, desc, badge }: { name: string; price: string; desc?: string; badge?: string }) {
  return (
    <div className={styles.revealItem} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
      <div style={{ flex: 1, paddingRight: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: 19, fontWeight: 600, color: "var(--dark)" }}>{name}</span>
          {badge && (
            <span className="badge" style={{ background: "var(--green)" }}>{badge}</span>
          )}
        </div>
        {desc && <p style={{ fontSize: 14, color: "var(--text-light)", lineHeight: 1.5 }}>{desc}</p>}
      </div>
      <span style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 700, color: "var(--green)", whiteSpace: "nowrap" }}>{price}</span>
    </div>
  );
}

function PizzaCard({ name, price, desc, badge, index }: { name: string; price: string; desc: string; badge?: string; index: number }) {
  return (
    <div className={styles.revealItem} style={{ transitionDelay: `${(index % 4) * 0.08}s` }}>
      <div style={{
        background: "#fff", borderRadius: 14, overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
        height: "100%", display: "flex", flexDirection: "column",
      }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
        <div style={{ padding: "0 24px", display: "flex", justifyContent: "center", paddingTop: 20 }}>
          <Image src={ASSETS.pizza} alt="" width={90} height={90} style={{ objectFit: "contain", opacity: 0.85 }} />
        </div>
        <div style={{ padding: "16px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 21, fontWeight: 700, color: "var(--dark)" }}>{name}</span>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 700, color: "var(--green)" }}>{price}</span>
          </div>
          <p style={{ fontSize: 13.5, color: "var(--text-light)", lineHeight: 1.6, flex: 1 }}>{desc}</p>
          {badge && (
            <div style={{ marginTop: 12 }}>
              <span className={`badge ${badge.startsWith("⭐") ? "badge-gold" : "badge-cream"}`} style={{ padding: "4px 14px", borderRadius: 20, fontSize: 10.5 }}>
                {badge}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CartaPage() {
  useReveal();

  return (
    <>
      <style>{`
        .${styles.revealItem} { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .${styles.revealItem}.visible { opacity: 1; transform: translateY(0); }
        @keyframes scrollPulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
      `}</style>

      <Nav />
      <Hero />
      <ScrollNav />
      {/* Info strip */}
      <div className={styles.infoStrip}>
        <p className={styles.infoStripText}>
          🌿 Producto local · Ingredientes biológicos · Masa madre natural · Vinos de proximidad
        </p>
      </div>

      {/* Entrantes */}
      <section id="entrantes" className={styles.sectionContent}>
        <SectionHeader icon="🥗" title="Entrantes" subtitle="Para compartir y abrir el apetito" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {STARTERS.map((item) => <MenuRow key={item.name} {...item} />)}
        </div>
        <div style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, color: "var(--text-light)", fontStyle: "italic", textAlign: "center" }}>
            🥬 Ensaladas: <strong>Ensalada de la Casa</strong> 10€ · mix 7 hojas, tomate, frutos rojos, frutos secos, zanahoria &nbsp;|&nbsp; <strong>Ensalada de Tomate</strong> 10€ · mix de tomates, cebolla, albahaca, aceite de arbequina
          </p>
        </div>
      </section>

      {/* Pizzas */}
      <section id="pizzas" style={{ padding: "80px 24px 100px", background: "var(--cream-light)" }}>
        <div className={styles.sectionContentWide}>
          <SectionHeader icon="🍕" title="Pizzas" subtitle="Masa madre fermentada 48h · Horno de leña · Ingredientes D.O.P." />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {PIZZAS.map((p, i) => <PizzaCard key={p.name} {...p} index={i} />)}
          </div>

          <div className={styles.revealItem} style={{ marginTop: 40, textAlign: "center" }}>
            <div style={{ display: "inline-flex", flexWrap: "wrap", gap: 8, justifyContent: "center", background: "#fff", borderRadius: 12, padding: "20px 28px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 700, color: "var(--dark)", marginRight: 8, alignSelf: "center" }}>Extras:</span>
              {EXTRAS_PIZZA.map((e) => (
                <span key={e} style={{ background: "var(--cream)", padding: "4px 14px", borderRadius: 20, fontSize: 13, color: "var(--text)" }}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pastas */}
      <section id="pastas" className={styles.sectionContent}>
        <SectionHeader icon="🍝" title="Pastas" subtitle="Hechas al momento con ingredientes italianos y locales" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {PASTAS.map((item) => <MenuRow key={item.name} {...item} />)}
        </div>
      </section>

      {/* Postres */}
      <section id="postres" style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto", background: "var(--cream-light)", borderRadius: "40px 40px 0 0" }}>
        <SectionHeader icon="🍰" title="Postres Caseros" subtitle="El final perfecto" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {DESSERTS.map((d, i) => (
            <div key={d.name} className={styles.revealItem} style={{ transitionDelay: `${i * 0.1}s`, background: "#fff", borderRadius: 14, padding: "28px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", textAlign: "center" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 700, color: "var(--dark)", display: "block", marginBottom: 6 }}>{d.name}</span>
              <p style={{ fontSize: 14, color: "var(--text-light)", marginBottom: 12 }}>{d.desc}</p>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 700, color: "var(--green)" }}>{d.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bebidas */}
      <section id="bebidas" className={styles.sectionContentFull}>
        <SectionHeader icon="🍷" title="Bebidas" subtitle="Cervezas, cócteles, cafés y más" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {DRINKS.map((cat) => (
            <div key={cat.label} className={styles.revealItem} style={{ background: "#fff", borderRadius: 14, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 700, color: "var(--green-dark)", marginBottom: 16, paddingBottom: 12, borderBottom: "2px solid var(--cream)", display: "flex", alignItems: "center", gap: 8 }}>
                {cat.icon} {cat.label}
              </h3>
              {cat.items.map(([name, price]) => (
                <div key={name} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px dashed rgba(0,0,0,0.05)" }}>
                  <span style={{ fontSize: 14.5, color: "var(--dark)" }}>{name}</span>
                  <span style={{ fontSize: 14.5, fontWeight: 600, color: "var(--green)" }}>{price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: `url(${ASSETS.pizza})`, backgroundSize: "200px", backgroundRepeat: "repeat" }} />
        <div className={styles.ctaContent}>
          <p className={styles.ctaLabel}>Can Edo</p>
          <h2 className={styles.ctaTitle}>¿Listo para disfrutar?</h2>
          <p className={styles.ctaText}>
            Reserva tu mesa y ven a descubrir el auténtico sabor de la pizza artesanal italiana en el corazón de Blanes, Costa Brava
          </p>
          <a href="https://wa.me/34613418837" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Reserva por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer section-full">
        <p className="footer-brand">Can Edo</p>
        <p>Carrer Josep Tarradellas, 3 · 17300 Blanes · Girona</p>
        <p><a href="tel:+34613418837">+34 613 418 837</a></p>
        <div className="footer-social" style={{ marginTop: 24 }}>
          <a href="https://wa.me/34613418837" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
          <a href="https://www.instagram.com/pizzeriacanedo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
        </div>
        <p className="footer-credit">
          Copyright &copy; {new Date().getFullYear()} Pizzeria Can Edo &ndash;&nbsp;
          <a href="https://112studio112.com/" target="_blank" rel="noopener noreferrer">112 Studio</a>
          <br />
          Web desarrollada por <strong>Yossef Errazik</strong>
          <br />
          Foto: <a href="https://commons.wikimedia.org/wiki/File:Blanes_-_Passeig_de_s%27Abanell_-_View_SSW.jpg" target="_blank" rel="noopener noreferrer">Txllxt TxllxT</a>
          {" "}&copy; <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC-BY-SA-4.0</a>
        </p>
      </footer>

      <a className="whatsapp-fab" href="https://wa.me/34613418837" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
    </>
  );
}
