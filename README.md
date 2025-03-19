# aws-lambda-nodejs-boilerplate

This repository is a boilerplate template for working with Lambda functions in Javascript Node.js. It has all the setups in place for a) Local development b) Lambda environment c) Lambda environment with image-based functions. It has build scripts to build and deploy code to a lambda function, and much more.

## Features

This boilerplate has the following things:

1. Works on Javascript ES6 standard
2. Eslint linter in place
3. Prettier to prettify your code on commit using lint-staged.
4. Husky pre-commit hooks to check for ESlint errors and prettify the code.
5. Lambda environment emulation for local development using express.js in the server.js file, including environment variables and nodemon, etc.
6. Simplified folder structure for code separation.
7. Common API service to make API calls.
8. Build & deploy scripts in build.sh file
9. Docker setup for both local development and Lambda environment.

## Folder structure

1. `src/config`: It contains all the app’s configuration

2. `src/constant`s: It contains all the app’s constants either strings, arrays, objects, etc.

3. `src/services`: It contains common function \_makeApiCall() to make API external APIs. You can add other function to use_makeApiCall() to make your own API calls.

4. `src/utils`: It has all the app’s utility functions used across the app.

5. `src/vendors`: It contains all the code related to your vendor or third-party packages/CLIs, SDKs.

## Local development usage

    npm i
    npm run dev

## Local development with container image

    docker build --platform linux/x86_64 -t docker-image-name .

    docker run --platform linux/x86_64 -p 9000:8080 docker-image-name
    API endpoint will be opened on: http://localhost:9000/2015-03-31/functions/function/invocations

## Build and Deploy

Executing the below command will automatically build & deploy your code to the lambda function including the node_modules for production:

    bash build.sh <your-lambda-function-name> <aws-region>
