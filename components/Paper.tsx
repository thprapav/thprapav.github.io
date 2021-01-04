import { ReactElement } from 'react';

export interface PaperInterface {
  title: string;
  type: string;
  abstract: string;
}

function Paper({ title, type, abstract }: PaperInterface): ReactElement {
  return (
    <div className="bg-white dark:bg-black overflow-hidden m-h-screen min-h-screen">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 dark:bg-gray-900 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div className="mx-auto text-base max-w-prose lg:max-w-none">
          <h2 className="text-base text-cyan-600 dark:text-cyan-800 font-semibold tracking-wide uppercase">{type}</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
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
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://via.placeholder.com/500"
                    alt="Whitney leaning against a railing on a downtown street"
                    width="1184"
                    height="1376"
                  />
                </div>
                {/* <figcaption className="mt-3 flex text-sm text-gray-500">
              <svg className="flex-none w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              <span className="ml-2">Photograph by Marcus O’Leary</span>
            </figcaption> */}
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-3">
            <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <h3 className="text-gray-500 dark:text-gray-300">Abstract</h3>
              <p>{abstract}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paper;