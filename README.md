# MyNewAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Angular building blocks: Templates
Templates are used to define a component view. A template looks like regular HTML, but it also has some differences. Code like \*ngFor, {{hero.name}}, (click), and [hero] uses Angular template syntax to enhance HTML markup capabilities. Templates can also include custom components like <custom-element> in the form of non-regular html tags. These components mix seamlessly with native HTML in the same layouts.

Angular building blocks: Services
Almost anything can be a service, any value, function, or feature that your application needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well. The main purpose of Angular Services is sharing resources across components.

That means we can work at a higher level using TypeScript, but compile down to the older form of Javascript that the browser needs.

For example we could have a local database for our development environment and a product database for production environment. When we run ng serve it will use by default the dev env. If you like to run in production mode you need to add the --prod flag to the ng serve.

Instructions

When all is done, you can start the client and the server up and test your application. Just to repeat, in the directory containing the server, run:

node dist/server.js
And in the client directory, run:

ng serve
