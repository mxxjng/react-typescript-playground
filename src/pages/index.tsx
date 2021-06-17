import Head from 'next/head';

import Layout from '../components/layout';
import { MenuExample, Reducer, CustomHook } from '../components';

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
          <div>
            <h2>Dot Notation</h2>
            <MenuExample />
          </div>
          <div>
            <h2>Reducer</h2>
            <Reducer />
          </div>
          <div>
            <h2>Custom Hook</h2>
            <CustomHook />
          </div>
        </div>
      </Layout>
    </div>
  );
}
