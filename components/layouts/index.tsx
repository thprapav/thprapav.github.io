import { NextPage } from 'next';
import MainLayout from './MainLayout';
import EmptyLayout from './EmptyLayout';
import ThemeLayout from './ThemeLayout';

type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };

type PageWithEmptyLayoutType = NextPage & { layout: typeof EmptyLayout };

type PageWithThemeLayoutType = NextPage & { layout: typeof ThemeLayout };

type PageWithLayoutType = PageWithMainLayoutType | PageWithEmptyLayoutType | PageWithThemeLayoutType;

export default PageWithLayoutType;
