export const UPDATE_PERIODS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export type TUpdatePeriod = (typeof UPDATE_PERIODS)[number];
