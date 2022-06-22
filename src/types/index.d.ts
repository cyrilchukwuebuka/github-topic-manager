export {};

declare global {
  interface Window {
    __WB_MANIFEST?: any;
    skipWaiting: () => any;
  }
  // interface ProcessEnv {
  //   [key: string]: string | undefined
  // }
}

