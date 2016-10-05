# Fe Template

## Dependency assumptions

1. You will be required to use node v6.* for this app.  Download it [here](https://nodejs.org/en/)
1. Install eslint globally `npm install -g eslint` in order to use the cli in the terminal.  You may have to do prefix this command with `sudo` depending on how you have your computer setup.

## Install the app and its dependencies using your terminal

Clone the repo from Github

### Project Dependencies

Our project has a lot of smaller modules of code installed to help us do great things.  These packages are all recorded in the `package.json` file.  There are two sections in here to take note of: dependencies and devDependencies.  Dependencies are third party libraries required to run the actual project, while devDependencies are third party libraries required to work on the project.

Run `npm install` from the project root using your terminal.  This command will use the `package.json` file to install all project dependencies and their dependencies into a directory called `node_modules`.  This directory is not in version control.  Everyone will have to perform this install.  **Note:** A common error people encounter when working in a front end application is a failure to perform an install after pulling in updates from a merge.

You can view the first level dependencies by running `npm list -g --depth 0`.  Depth here is the nesting level.  Try a number like 10 to see the full dependency chain.  It is important to note that while it looks like a tree when running this command, the install is flat and will make your `node_modules` directory look completely terrifying.

## Starting the App

Another thing we get with this type of project is the ability to use our `package.json` file to serve as the conductor for the application.  This file has the ability to serve as the entry point for all of our actions using npm scripts.  These are located in scripts section.

Scripts that are natively apart of the node env can be directly called:

```
$ npm start
$ npm test
```

We can also write custom scripts:

```
$ npm run dev
$ npm run test:unit
$ npm run test:lint
```

## Running the project

In order to run the project you must do the previous steps for dependency installations.

There are two different mode this project can be run in: a static mode and dev mode.  The static mode will bundle all the code using our production settings into the bin directory, then serve that directory using a node server.  The bin directory is the final product and can be deployed to and could server.  Dev mode does not actually build into a directory but runs the project though a dev server which has live reloading enabled.  This basically required for development.

Run one of the following commands from your server

```
npm start # will run a build then serve the static content
npm run dev # will run with hot reloading on a special server
```

It is highly recommended that you run `npm run build` and test on the static server before submitting a pull requests.

The deploy script, `npm run deploy`, will run a shell script to do some npm and git versioning then do a build.  This script will need the actual deployment you wish to perform added.

*Possible errors:*

Sometimes the live reloading or a node server may hang (you did not close it).  You will get an error similiar to this `EADDRINUSE`.  A simple solution to this usually will be to run `killall node`.  It sounds worse than it is.

One of the first things I do I am getting node errors is clean house.  We have a special script to delete all dependencies from your project and from your computers cache the reinstall them: `npm run purge`

## Testing

You can run the tests by executing the following command in your terminal: `npm test`.  This will run the entire test suite.  You can also use `npm run test:watch` to run the tests and have them watch for changes.  This is super useful when writing your tests.

#### [Jest](https://facebook.github.io/jest/) https://github.com/facebook/jest

We are using Jest to run our tests.  It is newer in the testing realm but it is a product from facebook.  So it all kind was built to play nice with each other.

#### [Enzyme](http://airbnb.io/enzyme/)

This is a product from AirBnB to allow us to do assertions on our react components!!!  This is the first good solution that I have really played with.  It is important to note that in the enzyme examples, they are using **not** using Jest for their assertions.

#### Helpful links

- https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md

## ES6

## React

## [Redux](http://redux.js.org/)

- Really good docs to read through

### [Redux Dev Tools](https://github.com/gaearon/redux-devtools)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
