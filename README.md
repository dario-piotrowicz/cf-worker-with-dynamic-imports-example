# Cloudflare Worker with dynamic imports example

A minimal example on how to use wrangler rules with no bundling to deploy a Cloudflare worker which includes non-bundled additional js modules that it can dynamically import at runtime.

## Steps

Install the dependencies with:
```sh
npm i
```

Run the worker locally:
```sh
npm run dev
```

Deploy with:

```sh
npm run deploy
```

