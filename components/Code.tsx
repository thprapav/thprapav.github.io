import { ReactElement } from 'react';
import { CodeInterface } from '../types';

function Code({ code }: { code: CodeInterface[] }): ReactElement {
  return (
    <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
      <h3 className="text-gray-500 dark:text-gray-300">Code</h3>

      {code.map(
        ({ link, alias }: CodeInterface): ReactElement => {
          return (
            <a key={alias} href={link} target="_blank" rel="noreferrer">
              {alias}
            </a>
          );
        },
      )}
    </div>
  );
}

export default Code;
