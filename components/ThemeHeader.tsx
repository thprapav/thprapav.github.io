import { ReactElement, useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

function ThemeHeader(): ReactElement {
  const { setTheme, resolvedTheme } = useTheme();
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked: boolean) => {
    const isDarkMode = checked;

    if (isDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const isRoot = pathname === '/';
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <nav className="h-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex" />
          <div className="flex items-right mr-6">
            <div className="flex-shrink-0 absolute z-10 top-4">
              {mounted && (
                <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} className={isRoot ? '28' : '24'} />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ThemeHeader;
