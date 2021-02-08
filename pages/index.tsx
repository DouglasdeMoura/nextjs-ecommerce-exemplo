import Head from 'next/head';
import Home from '../src/templates/Home/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>E-commerce</title>
      </Head>
      <Home />
    </>
  );
}
