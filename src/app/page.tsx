"use client";

import Toggle from "@/components/Toggle/Toggle.component";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Toggle />
    </div>
  );
}
