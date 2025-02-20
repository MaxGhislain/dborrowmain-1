import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Info.module.scss'
import ReactMarkdown from 'react-markdown';

export default function Info({ info }) {
  const router = useRouter()
  const { slug } = router.query

  return (<>
    <Head>
      <title>{info.title}</title>
    </Head>
    <Link href="/#links"><a><img src="/back.svg" id={styles.back}/></a></Link>
    <main id={styles.main}>
      <div id={styles.content}>
        <ReactMarkdown>{info.text}</ReactMarkdown>
      </div>
    </main>
  </>)
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/infoData/${params.slug}.json`);
  const data = await req.json();

  return {
    props: { info: data },
  }
}