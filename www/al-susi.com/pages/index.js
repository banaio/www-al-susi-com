import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Al-Susi&#39;s narration on the authority of Abu Amr Al-Basri</title>
        <meta name="description" content="Al-Susi&#39;s narration on the authority of Abu Amr Al-Basri - برواية السوسي عن أبي عمرو البصري" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <Image src="/cover-1.svg" width={635} height={248} />
        </div>
        <div className={styles.title}>
          <Image src="/cover-2.svg" width={2007} height={220} />
        </div>

        <p className={styles.description}>
          <Link href="/al-susi.pdf">
            <a>Al-Susi&#39;s narration on the authority of Abu Amr Al-Basri - PDF</a>
          </Link>
          <br/>
          <Link href="/al-susi.pdf">
            القرآن الكريم برواية السوسي عن أبي عمرو البصري - PDF
          </Link>
        </p>

        <div>
          <Image src="/cover-mushaf.png" width={1532} height={2247} />
        </div>


        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div >
  )
}
