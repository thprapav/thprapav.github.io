import { ReactElement } from 'react';
import ReactPlayer from 'react-player';
import Image from './Image';
import { CodeInterface, ImageInterface } from '../types';
import PublicationAuthors from './PublicationAuthors';
import Code from './Code';

export interface PaperInterface {
  title: string;
  type: string;
  abstract: string;
  authors: string[];
  header_image: ImageInterface;
  video: string;
  code: CodeInterface[];
}

function Paper({ title, authors, type, abstract, header_image, video, code }: PaperInterface): ReactElement {
  return (
    <div className="bg-white dark:bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 dark:bg-gray-900 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:max-w-none ">
          <h2 className="text-base text-cyan-600 dark:text-cyan-800 font-semibold tracking-wide uppercase">{type}</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl relative z-20">
            {title}
          </h3>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-5 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-4 lg:col-span-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200 dark:text-gray-600"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <Image {...header_image} />
          </div>

          <div className="mt-8 lg:mt-0 lg:col-span-3 min-h-screen">
            <PublicationAuthors authors={authors} />
            <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <h3 className="text-gray-500 dark:text-gray-300">Abstract</h3>
              <p>{abstract}</p>
            </div>
            <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <h3 className="text-gray-500 dark:text-gray-300">Media</h3>
              <ReactPlayer width="auto" url={video} controls />
            </div>
            <Code code={code} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paper;
