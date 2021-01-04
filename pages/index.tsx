import Head from 'next/head';
import { FC } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import PageWithLayoutType from '../types';

const IndexPage: FC = () => {
  return (
    <>
      <div className="text-center">
        <Head>
          <title>Dark mode with Tailwind and Next.js</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text:2xl">Dark mode with Tailwind and Next-themes</h1>
      </div>
    </>
  );
};

(IndexPage as PageWithLayoutType).layout = MainLayout;

export default IndexPage;
