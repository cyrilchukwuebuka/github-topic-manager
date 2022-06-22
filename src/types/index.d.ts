export {};

declare global {
  interface Window {
    __WB_MANIFEST: any;
    skipWaiting: () => any;
  }
}

