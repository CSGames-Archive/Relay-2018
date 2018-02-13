import wallets from './wallets.json';

const delay = (ms) => (
  new Promise((resolve) => setTimeout(resolve, ms))
);

export const fakeFetch = (urlGetter, options) => (
  delay(300).then(() => {
    //ugly hack to create immutable copy of file.
    const walletsCopied = JSON.parse(JSON.stringify(wallets));
    switch (urlGetter) {
      case "/api/wallets":
        switch (true) {
          default:
            return walletsCopied;
        }
      default:
        throw new Error('Unknown urlGetter:');
    }
  })
);
