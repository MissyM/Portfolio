import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const Text = () => (
    <div className={styles.email}>mcabrerapatino@gmail.com</div>
  );
  return (
    <>
      <Head>
        <title>Milena Page | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Front-End Developer</h1>
        <p className={styles.text}>
          Milena is a Front-end developer with 4 years of experience working in
          web development. She specializes in JavaScript technologies and
          frameworks such as React, Angular, Svelte, and tools like Electron,
          building front-end solutions for public institutions and startups.
        </p>
        <p className={styles.text}>
          She is a focused, detail-oriented, and hard-working professional.
          Having worked with different technologies and paradigms, she is always
          willing to learn something new. She enjoys designing and developing
          efficient solutions that generate value in people and organizations.
          She is ambitious and self-motivated, leading her to be productive in
          both team-based and self-managed projects.
        </p>
        <div className={styles.btn} onClick={onClick}>
          Hire me
        </div>
        {showText ? <Text /> : null}
      </div>
    </>
  );
}
