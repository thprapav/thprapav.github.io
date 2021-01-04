import { ReactElement, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

function ThemeHeader(): ReactElement {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <nav className="absolute z-10 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex" />
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md dark:text-gray-200 text-gray-600 focus:outline-none"
                onClick={switchTheme}
              >
                <span>{theme === 'light' ? 'dark' : 'light'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ThemeHeader;
