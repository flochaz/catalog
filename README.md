# Paris AWS Summit 2022 - FM-01 - Demo code

This repo was used as part of the session FM-01 of Paris AWS Summit 2022 and aim to demonstrate how easy it is to create a web app using AWS Amplify tooling.

## Demo flow

1. Démarrage sur [Amplify Studio - Sandbox](https://sandbox.amplifyapp.com/)
   1. Design du model de données
   1. Utilisation en local / Datastore
1. Sortie de la sandbox 
   1. Déploiement sur AWS
   1. Ajout d’[Amplify UI lib](https://ui.docs.amplify.aws/)
1. Découverte d’Amplify Studio
   1. Gestion des données
   1. UI Design avec [Figma](https://www.figma.com/)
1. Ajout d’authentification avec Amplify CLI
1. CI/CD avec Amplify Console


## Code Usage

1. Install amplify cli
   ```
   curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL
   ```
1. Install dependencies
   ```
   npm install
   ```
1. Build front locally
   ```
   npm run build
   ```
1. Start front locally
   ```
   npm run start
   ```
1. Deploy the backend
   ```
   amplify init
   amplify push
   ```
1. Play with Amplify studio to
   * create new Categories
   * update UI design of CategoryCard, CategoryCardCollection or NavBar
   * update the data model
   * manage your user base
   * etc

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
