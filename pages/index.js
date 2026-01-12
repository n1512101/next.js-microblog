import Layout from "@/components/Layout";
import utilStyle from "@/styles/utils.module.css";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          私はichiです。趣味はプログラミングです。得意な言語はJavaScriptとTypeScriptです。
        </p>
      </section>
      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                alt=""
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                alt=""
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                alt=""
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                alt=""
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
