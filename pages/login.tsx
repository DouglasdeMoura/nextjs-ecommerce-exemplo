import Head from 'next/head';
import Login from '../src/templates/Login/Login';

export default function Index() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </>
  );
}
