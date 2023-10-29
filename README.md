
A demo web app that lists the Most Starred Github repos that were created in the last 30 days.

# GithubReposStarChallenge

A small webapp that will list the Most Starred Github Reposs that were created in the last 30 days. [Github API](https://api.github.com/search/repositories?q=created:>2023-09-22&sort=stars&order=desc)


## Development server

- Clone the repo: `git clone git@github.com/ashokkumargv/github-repos-star-challenge.git`
- Install dependencies for the app (assuming `node`, and `npm` are already installed): `cd      most-starred-github-repos && npm install`
- Install angular material using  `npm install @angular/material' or ng add @angular/material`
- Install infinite scroll using  `npm install ngx-infinite-scroll' or ng add ngx-infinite-scroll`   ngx-infinite-scroll
- Run `ng serve` for a dev server.
- Navigate to `http://localhost:4200/`.

The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.