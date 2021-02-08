import Head from 'next/head';
import AdicionarProduto from '../src/templates/AdicionarProduto/AdicionarProduto';

export default function AddProduct() {
  return (
    <>
      <Head>
        <title>Adicionar produto</title>
      </Head>
      <AdicionarProduto />
    </>
  );
}
