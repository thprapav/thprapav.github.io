import { FC, ReactNode } from 'react';
import PageWithLayoutType from '../types';

import '../global.css';

type AppLayoutProps = {
  Component: PageWithLayoutType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
};

const App: FC<AppLayoutProps> = ({ Component, pageProps }: AppLayoutProps) => {
  const Layout = Component.layout || ((children: ReactNode) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
