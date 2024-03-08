
The project only has these dependencies:

```json
  "dependencies": {
    "@novu/notification-center": "^0.24.0",
    "@types/react": "^16.8",
    "@types/react-dom": "^16.8",
    "react": "^16.8",
    "react-dom": "^16.8"
  },
  "devDependencies": {
    "typescript": "^5.4.2"
  }
```

Build and compile the project:

```sh
npm install
npx tsc
```

You will find a dependency error. `@novu/notification-center` has an implicit dependency to `@types/node`.

![Captura de pantalla 2024-03-08 a las 11 27 28](https://github.com/crispamares/novu-minimal-node-ts-error/assets/759344/3d40e619-ccc8-4d1d-a3b3-b03944f75911)
