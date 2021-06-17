import Head from 'next/head';

import Layout from '../components/layout';
import Test from '../components/test';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-5xl mx-auto p-md">
          <h1 className="text-2xl sm:text-3xl mb-lg">Hello from home</h1>
          <Test />
        </div>
      </Layout>
    </div>
  );
}
