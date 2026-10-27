# React + Vite

## Baza chat

The site loads Baza chat through an async script in `index.html` using assistant
`d54c8103-6f98-4e2f-9f01-62379e7f7b57`.

Run `npm run dev` and open the `localhost` URL printed by Vite. Baza checks the
website's origin: `http://localhost:5173` is currently accepted, while
`http://127.0.0.1:5173` returns `403` with `Not available on this website`.
If the widget is missing on another address, add that website to the assistant's
allowed websites in Baza. The production website must also be allowed.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
