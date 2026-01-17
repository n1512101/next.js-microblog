import Layout, { siteTitle } from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { getPostsData } from "@/lib/post";
import Head from "next/head";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          私はichiです。趣味はプログラミングです。得意な言語はJavaScriptとTypeScriptです。
        </p>
      </section>
      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={thumbnail} alt="" className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`} className={utilStyles.boldText}>
                {title}
              </Link>
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
