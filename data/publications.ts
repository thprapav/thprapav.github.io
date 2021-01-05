export const PUB_TYPES = {
  JOURNAL: 'JOURNAL',
  CONFERENCE_PAPER: 'CONFERENCE_PAPER',
} as const;

export type PUB_TYPES = typeof PUB_TYPES[keyof typeof PUB_TYPES];
