import Layout from "@/components/Layout";
import utilStyle from "@/styles/utils.module.css";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { getPostsData } from "@/lib/post";

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
    <Layout>
      <section className={utilStyle.headingMd}>
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
              <Link href={`/posts/${id}`} className={utilStyle.boldText}>
                {title}
              </Link>
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
