# ekanshvinaik.com

Personal site. [Astro](https://astro.build), static output, no client framework.

```sh
npm install
npm run dev      # local dev server
npm run build    # static build -> dist/
npm run preview  # serve dist/ locally
npm run deploy   # build + publish dist/ to the `main` branch (GitHub Pages)
```

Source lives on `source`; `main` holds the built output that GitHub Pages serves.
`public/CNAME` pins the custom domain.
