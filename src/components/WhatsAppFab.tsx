import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppFab.module.css";

export default function WhatsAppFab() {
  return (
    <a
      className={styles.fab}
      href="https://wa.me/34613418837"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
