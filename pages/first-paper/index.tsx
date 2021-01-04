import Head from 'next/head';
import { FC } from 'react';
import ThemeLayout from '../../components/layouts/ThemeLayout';
import content from '../../data/content.json';
import FIRST_PAPER_DATA from '../../data/papers/first';
import PageWithLayoutType from '../../types';
import Paper from '../../components/Paper';

const NotFoundPage: FC = () => {
  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>
      <Paper {...FIRST_PAPER_DATA} />
    </>
  );
};

(NotFoundPage as PageWithLayoutType).layout = ThemeLayout;

export default NotFoundPage;
