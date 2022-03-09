# Vue 3 + Typescript + Vite and express api

## How to use

- Run `npm i` in `/api/` and `/frontend/` to install dependencies

- In `/api/` add `.env.development` and `.env.production` files

Example for .env.development

 ```env
SERVER_PORT=3333
CORS_ORIGIN=http://localhost:3000
CLIENT_ID=xyz
CLIENT_SECRET=xyz
TOKEN_EXPIRE=1d
JWT_SECRET=xyz
 ```

- In `/frontend/` add `.env.development` and `.env.production` files

Example for .env.development

```env
VITE_API_BASE_URL=http://localhost:3333
 ```

- Use `npm run dev` or `npm run prod` to start the API

- Use `npm run dev` to start the frontend

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
