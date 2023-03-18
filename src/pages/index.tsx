// pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import RandomSelector from "../components/RandomSelector";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Random Selector</title>
        <meta name="description" content="Random Selector using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RandomSelector />
      </main>
    </div>
  );
};

export default Home;