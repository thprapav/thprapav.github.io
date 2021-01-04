import { ReactNode } from 'react';

import Header from '../Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Header isMain={true} />
      {children}
    </>
  );
};

export default Layout;
