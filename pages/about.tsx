import Head from 'next/head';
import { FC } from 'react';
import SecondaryLayout from '../components/layouts/EmptyLayout';
import content from '../data/content.json';
import PageWithLayoutType from '../types';

const NotFoundPage: FC = () => {
  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>
      <h1 className="text-green-500">{content.title}</h1>
    </>
  );
};

(NotFoundPage as PageWithLayoutType).layout = SecondaryLayout;

export default NotFoundPage;
