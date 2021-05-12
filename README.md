# bond-villains

This repo contains a demo environment for trying out [Cypress](https://cypress.io).

## Conferences

This repo was used for my session 'E2E testing evolved' at [Techorama 2021](https://techorama.be). Since it may evolve over time for other conferences, you can use the branch `techorama-2021` to ensure it is the exact content shown in the session. (`git checkout techorama-2021`)

## Structure

- api : Backend, Express running on Node
- e2e : Cypress with tests
- frontend : Angular app 
- frontend-server : Minimalistic web server to mimic deployed behavior (no Webpack Dev Server polling)

## Getting started

0. Make sure [Node.js](https://nodejs.com) is installed
0. `npm run build` - this will install all dependencies and build each subproject
0. `npm run demo` - starts the api, the frontend-server and Cypress.

Note that running in demo mode uses a static build of the frontend. If you change the frontend code, you need to do `npm run build` again.

### Alternatives

- `npm run demo:dev` - starts the api and Cypress and runs the frontend in development mode. Use this is you want to modify the frontend app and see those changes immediately.
- `npm run demo:ci` - starts the api, the frontend-server and runs Cypress in headless mode.
