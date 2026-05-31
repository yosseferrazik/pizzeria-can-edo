"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import styles from "./Nav.module.css";

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  links: NavLink[];
  ctaHref?: string;
  ctaLabel?: string;
  logoHref?: string;
}

export default function Nav({
  links,
  ctaHref = "https://wa.me/34613418837",
  ctaLabel = "Reserva",
  logoHref = "/",
}: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className={`${styles.nav}${scrolled ? ` ${styles.navScrolled}` : ""}`}>
      <a href={logoHref}>
        <Image
          className={styles.navLogo}
          src="/images/logo-white.png"
          alt="Can Edo"
          width={160}
          height={43}
          priority
        />
      </a>

      <button
        className={`${styles.hamburger}${menuOpen ? ` ${styles.hamburgerOpen}` : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Menú"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`${styles.navLinks}${menuOpen ? ` ${styles.navLinksOpen}` : ""}`}>
        {links.map((link) => (
          <li key={link.href + link.label}>
            <a href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            className={styles.navCta}
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            {ctaLabel}
          </a>
        </li>
      </ul>
    </nav>
  );
}
