import { LayoutInterface } from '../../types';

import Header from '../Header';

const MainLayout: React.FunctionComponent<LayoutInterface> = ({ children }: LayoutInterface) => {
  return (
    <>
      <Header isMain={true} />
      {children}
    </>
  );
};

export default MainLayout;
