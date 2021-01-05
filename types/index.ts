import { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import SecondaryLayout from '../components/layouts/EmptyLayout';
import { ReactElement, ReactNode } from 'react';

type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };

type PageWithPostLayoutType = NextPage & { layout: typeof SecondaryLayout };

type PageWithLayoutType = PageWithMainLayoutType | PageWithPostLayoutType;

export default PageWithLayoutType;

export interface LayoutInterface {
  children: ReactNode;
}

export interface AuthorInterface {
  first_name: string;
  last_name: string;
}

export interface ImageInterface {
  src: 'PUBLIC_FOLDER' | 'EXTERNAL_URL';
  path: string;
  width: number;
  height: number;
  caption?: ReactElement;
  alt?: string;
}

export interface CodeInterface {
  file?: string;
  link?: string;
  alias: string;
}
