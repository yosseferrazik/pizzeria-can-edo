"use client";

import Image from "next/image";
import { useEffect, useState, useCallback, type ReactNode } from "react";
import { Salad, Pizza, Utensils, CakeSlice, Wine, Star, Leaf } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { useReveal } from "@/hooks/useReveal";
import {
  CATEGORIES,
  STARTERS,
  SALADS_STR,
  PIZZAS,
  EXTRAS_PIZZA,
  PASTAS,
  DESSERTS,
  DRINKS,
  ASSETS,
} from "@/data/carta";
import styles from "./carta.module.css";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  ...CATEGORIES.map((c) => ({ label: c.label, href: `#${c.id}` })),
];

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

function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg}>
        <Image src={ASSETS.hero} alt="" fill priority sizes="100vw" />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <span className="hero-badge">Masa Madre 48h</span>
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

function SectionHeader({ icon, title, subtitle }: { icon: ReactNode; title: string; subtitle?: string }) {
  return (
    <div className={`${styles.sectionHeader} reveal`}>
      <span className={styles.sectionHeaderIcon}>{icon}</span>
      <h2 className={styles.sectionHeaderTitle}>{title}</h2>
      {subtitle && <p className={styles.sectionHeaderSubtitle}>{subtitle}</p>}
      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerIcon}><Star size={16} /></span>
        <span className={styles.dividerLineRight} />
      </div>
    </div>
  );
}

function MenuRow({ name, price, desc, badge }: { name: string; price: string; desc?: string; badge?: string }) {
  return (
    <div className={`${styles.menuRow} reveal`}>
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

function PizzaCard({ name, price, desc, badge, index }: { name: string; price: string; desc?: string; badge?: string; index: number }) {
  return (
    <div className={`${styles.pizzaCardOuter} reveal`} style={{ transitionDelay: `${(index % 4) * 0.08}s` }}>
      <div className={styles.pizzaCardInner}>
        <div className={styles.pizzaCardImage}>
          <Image src={ASSETS.pizza} alt="" width={90} height={90} />
        </div>
        <div className={styles.pizzaCardBody}>
          <div className={styles.pizzaCardHeader}>
            <span className={styles.pizzaCardName}>{name}</span>
            <span className={styles.pizzaCardPrice}>{price}</span>
          </div>
          <p className={styles.pizzaCardDesc}>{desc}</p>
          {badge && (
            <div style={{ marginTop: 12 }}>
              <span className={`badge ${badge === "Casa" ? "badge-gold" : badge === "Vegana" ? "badge-vegan" : "badge-cream"}`} style={{ padding: "4px 14px", borderRadius: 20, fontSize: 10.5, display: "inline-flex", alignItems: "center", gap: 4 }}>
                {badge === "Casa" && <Star size={12} />}
                {badge === "Vegana" && <Leaf size={11} />}
                {badge}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CartaContent() {
  useReveal(undefined, 0.15);

  return (
    <>
      <Nav links={NAV_LINKS} />
      <Hero />
      <ScrollNav />
      <div className={styles.infoStrip}>
        <p className={styles.infoStripText}>
          <Leaf size={14} style={{ display: "inline", verticalAlign: "middle" }} /> Producto local · Ingredientes biológicos · Masa madre natural · Vinos de proximidad
        </p>
      </div>

      <section id="entrantes" className={styles.sectionContent}>
        <SectionHeader icon={<Salad size={32} />} title="Entrantes" subtitle="Para compartir y abrir el apetito" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {STARTERS.map((item) => <MenuRow key={item.name} {...item} />)}
        </div>
        <div style={{ marginTop: 32 }}>
          <p className={styles.saladsNote}>
            <Leaf size={14} style={{ display: "inline", verticalAlign: "middle" }} /> Ensaladas: <strong>{SALADS_STR}</strong>
          </p>
        </div>
      </section>

      <section id="pizzas" className={styles.pizzaSection}>
        <div className={styles.sectionContentWide}>
          <SectionHeader icon={<Pizza size={32} />} title="Pizzas" subtitle="Masa madre fermentada 48h · Horno de leña · Ingredientes D.O.P." />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {PIZZAS.map((p, i) => <PizzaCard key={p.name} {...p} index={i} />)}
          </div>

          <div className="reveal" style={{ marginTop: 40, textAlign: "center" }}>
            <div className={styles.extrasBar}>
              <span className={styles.extrasLabel}>Extras:</span>
              {EXTRAS_PIZZA.map((e) => (
                <span key={e} className={styles.extrasItem}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pastas" className={styles.sectionContent}>
        <SectionHeader icon={<Utensils size={32} />} title="Pastas" subtitle="Hechas al momento con ingredientes italianos y locales" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {PASTAS.map((item) => <MenuRow key={item.name} {...item} />)}
        </div>
      </section>

      <section id="postres" className={styles.postresSection}>
        <SectionHeader icon={<CakeSlice size={32} />} title="Postres Caseros" subtitle="El final perfecto" />
        <div className={styles.postresGrid}>
          {DESSERTS.map((d, i) => (
            <div key={d.name} className={`${styles.postresCard} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className={styles.postresCardName}>{d.name}</span>
              <p className={styles.postresCardDesc}>{d.desc}</p>
              <span className={styles.postresCardPrice}>{d.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="bebidas" className={styles.sectionContentFull}>
        <SectionHeader icon={<Wine size={32} />} title="Bebidas" subtitle="Cervezas, cócteles, cafés y más" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {DRINKS.map((cat) => (
            <div key={cat.label} className={`${styles.drinkCard} reveal`}>
              <h3>
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

      <section className={styles.ctaSection}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: `url(${ASSETS.pizza})`, backgroundSize: "200px", backgroundRepeat: "repeat" }} />
        <div className={styles.ctaContent}>
          <p className={styles.ctaLabel}>Can Edo</p>
          <h2 id="reserva" className={styles.ctaTitle}>¿Listo para disfrutar?</h2>
          <p className={styles.ctaText}>
            Reserva tu mesa y ven a descubrir el auténtico sabor de la pizza artesanal italiana en el corazón de Blanes, Costa Brava
          </p>
          <a href="https://wa.me/34613418837" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Reserva por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
