import Head from 'next/head';
import { FC } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import content from '../data/content.json';
import PageWithLayoutType from '../types';

const IndexPage: FC = () => {
  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>
      <h1 className="text-green-500">NOT FOUND</h1>
    </>
  );
};

(IndexPage as PageWithLayoutType).layout = MainLayout;

export default IndexPage;
