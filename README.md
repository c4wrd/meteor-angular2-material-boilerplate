# Angular2-Meteor Boilerplate - Material

This is an Angular 2 based todo-manager built with Meteor and Angular Material2.

## Install

```
git clone https://github.com/c4wrd/meteor-ng2-bootstrap-boilerplate app
cd app
npm install
```

## NPM Scripts

This boilerplate comes with predefined NPM scripts, defined in `package.json`:

- `$ npm run start` - Run the Meteor application.
- `$ npm run start:prod` - Run the Meteor application in production mode.
- `$ npm run build` - Creates a Meteor build version under `./build/` directory.
- `$ npm run clear` - Resets Meteor's cache and clears the MongoDB collections.
- `$ npm run meteor:update` - Updates Meteor's version and it's dependencies.
- `$ npm run test` - Executes Meteor in test mode with Mocha.
- `$ npm run test:ci` - Executes Meteor in test mode with Mocha for CI (run once).

The Main component loads the child component, which uses the todo service that gets it's data from the todo collection.

### Client

The `client` folder contains single TypeScript (`.ts`) file which is the main file (`/client/app.component.ts`), and bootstrap's the Angular 2 application.

The main component uses HTML template and SASS file.

The `index.html` file is the main HTML which loads the application by using the main component selector (`<app>`).

All the other client files are under `client/imports` and organized by the context of the components.


### Server

The `server` folder contain single TypeScript (`.ts`) file which is the main file (`/server/main.ts`), and creates the main server instance, and the starts it.

All other server files should be located under `/server/imports`.

### Shared
Contains code that is shared on both the client and the server, such as our models and collections.

# Credits

Originally developed from angular2-meteor-base, https://github.com/Urigo/angular2-meteor-base