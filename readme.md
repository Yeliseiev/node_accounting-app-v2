# Accounting app (with Node.js)

Implement an expense tracking app.
You need to implement 2 collections with 5 endpoints each.

## Technical requirements

Additional to positive cases you for every request you should:
- return 404 with any message if expected entity doesn't exist.
- return 400 with any message if required parameter is not passed.

This behavior described in tests (expected and checked by tests).

Data should be empty initially. Store data in memory (just in code in some variable).
Changes should be persistent while server is working.
It means, if I create expense in the first POST request it should be returned in the second GET request.

But after stop/start server again data should be empty.

## How to work
- `npm run dev` - to start server with auto-restart on code change.
- `npm start` - just starts the server.
- `npm run test:watch` - **[Recommended]** runs tests in watch mode (rerun them automatically on change).
- `npm test` - runs ESLint and tests once.
- `npm run lint` - runs ESLint.
- `npm run lint:fix` - runs ESLint and fix fixable errors.
