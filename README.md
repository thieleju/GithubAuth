# Vue 3 + Typescript + Vite and Express Middleware

## How to use

- Run `npm i` in `/api/` and `/frontend/` to install dependencies

- In `/api/` add `.env.development` and `.env.production` files

Example for .env.development

 ```env
SERVER_PORT=3333                     // Express server port
CORS_ORIGIN=http://localhost:3000    // Only allow requests from this origin
CLIENT_ID=xyz                        // GitHub OAuth client id
CLIENT_SECRET=xyz                    // GitHub OAuth client secret
TOKEN_EXPIRE=1d                      // JWT expire time span
JWT_SECRET=xyz                       // Random 32 char string
 ```

- In `/frontend/` add `.env.development` and `.env.production` files

Example for .env.development

```env
VITE_API_BASE_URL=http://localhost:3333   // Axios base url to express server
 ```

- Use `npm run dev` or `npm run prod` to start the API

- Use `npm run dev` to start the frontend

## Recommended IDE 

- [VSCode](https://code.visualstudio.com/)
