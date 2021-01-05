import { AuthorInterface } from '../types';

export const AUTHORS = {
  IASON_SARANTOPOULOS: 'IASON_SARANTOPOULOS',
  MARIOS_KIATOS: 'MARIOS_KIATOS',
  ZOE_DOULGERI: 'ZOE_DOULGERI',
  SOTIRIS_MALASIOTIS: 'SOTIRIS_MALASIOTIS',
} as const;

export type AUTHORS = typeof AUTHORS[keyof typeof AUTHORS];

export type AuthorDataInterface = { [key in AUTHORS]: AuthorInterface };

export const AUTHOR_DATA: AuthorDataInterface = {
  [AUTHORS.IASON_SARANTOPOULOS]: {
    first_name: 'Iason',
    last_name: 'Sarantopoulos',
  },
  [AUTHORS.MARIOS_KIATOS]: {
    first_name: 'Marios',
    last_name: 'Kiatos',
  },
  [AUTHORS.ZOE_DOULGERI]: {
    first_name: 'Zoe',
    last_name: 'Doulgeri',
  },
  [AUTHORS.SOTIRIS_MALASIOTIS]: {
    first_name: 'Sotiris',
    last_name: 'Malassiotis',
  },
};
