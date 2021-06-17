import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-5xl mx-auto p-md">
          <h1 className="text-2xl sm:text-3xl mb-lg">Hello from about</h1>
        </div>
      </Layout>
    </div>
  );
}
