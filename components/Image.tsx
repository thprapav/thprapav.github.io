import { ReactElement } from 'react';
import { ImageInterface } from '../types';

function Image({ src, path, width, height, alt, caption }: ImageInterface): ReactElement {
  return (
    <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
      <figure>
        <img
          className="rounded-lg shadow-lg object-cover object-center"
          src={src === 'PUBLIC_FOLDER' ? `/${path}` : path}
          alt={alt}
          width={width}
          height={height}
        />
        {caption && (
          <figcaption className="mt-3 flex text-sm text-gray-500">
            <svg
              className="flex-none w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2">{caption}</span>
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export default Image;
