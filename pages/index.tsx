import Head from 'next/head';
import { FC } from 'react';
import content from '../content.json';

const IndexPage: FC = () => {
  return (
    <>
      <Head>
        <title>{content.title}</title>
      </Head>
      <h1 className="text-green-500">Hello, {content.index.title}</h1>
      <div>{content.index.content}</div>
    </>
  );
};

export default IndexPage;
