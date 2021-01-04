import { LayoutInterface } from '../../types';
import ThemeHeader from '../ThemeHeader';

const ThemeLayout: React.FunctionComponent<LayoutInterface> = ({ children }: LayoutInterface) => {
  return (
    <>
      <ThemeHeader />
      {children}
    </>
  );
};

export default ThemeLayout;
