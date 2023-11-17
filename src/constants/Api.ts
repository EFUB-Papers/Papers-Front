export const NETWORK = {
  RETRY_COUNT: 2,
  TIMEOUT: 10000
} as const;

export type AxiosResponseType = {
  message: 'success' | 'failure';
};
