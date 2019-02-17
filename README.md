# Bit Components

React Bit components source repository.

## Getting Started

This project uses yarn:

```
yarn install
```

Once the dependencies have been installed you can issue the `npm start` command.

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in development mode.
It will automatically run the app using Electron and supports HMR (Hot Module Reloading).

`npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Bit

Login to Bit:

```
bit login
```

Add a new component:

```
bit add src/components/Button
```

Check the status of the components:

```
bit status
```

Run the tests:

```
npm run test
```

Tag the components:

```
bit tag --all 1.0.1
```

Export the components to Bit:

```
bit export nicolaspearson.interaction
```

## Contribution guidelines

Code reviews are done via pull requests.
