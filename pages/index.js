import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

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
          As a dedicated and skilled Front-end Developer, I have a solid
          foundation in a variety of programming languages, frameworks, and
          tools, including React, Angular, Svelte, and Next.js. With six years
          of experience, I have successfully contributed to numerous projects
          for public institutions, startups, and development agencies. My strong
          problem-solving skills, keen attention to detail, and passion for
          creating intuitive user experiences make me an excellent fit for any
          company seeking a talented Front-end Developer.
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
