import { useState } from "react";
import Head from "next/head";
import AddNewMessage from "../components/AddNewMessage";
import MessagesList from "../components/MessagesList";
import styles from "../styles/Home.module.css";
import DefaultLayout from "../components/DefaultLayout";

export default function Home() {
  const [reloadData, setReloadData] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Picciotto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultLayout>
        <main className={styles.main}>
          <AddNewMessage reloadData={reloadData} setReloadData={setReloadData} />
          <MessagesList reloadData={reloadData} setReloadData={setReloadData} />
        </main>
      </DefaultLayout>
    </div>
  );
}
