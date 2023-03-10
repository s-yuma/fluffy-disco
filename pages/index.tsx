import type { NextPage } from 'next'
import Head from 'next/head'
import Heder from '../components/heder/Heder'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar/Sidebar';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image'
import Link from "next/link"
const Home: NextPage = () => {
    const { user, error, isLoading } = useUser();
    if (user) {
        return (
            <>
            <Heder/>
            <Sidebar/>
          </>
        );
      }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/main.png" alt='Main Picture'  width={1920} height={800} objectFit="contain"></Image>
        <Link href="/api/auth/login" className={styles.p}>ログイン</Link>
      </main>
      
      
  

    </div>
  )
}

export default Home