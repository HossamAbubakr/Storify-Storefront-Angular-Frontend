# Storify, Angular Storefront

<p align="center">
  <img src="">
</p>

## Table of Contents

- [Summary](#Summary)

- [Technologies](#Technologies)

- [Features](#Features)

- [Structure](#Structure)

- [Usage and Installation](#usage-and-installation)

## Summary

Storify is a storefront frontend that I made as part of my Full Stack JavaScript Developer Nanodegree from Udacity.

It was made following the requirements in the REQUIREMENTS.md file.

It demonstrates my understanding of Angular's : 
- CLI
- Forms
- Events
- Services
- Modules
- Templates
- Navigation
- HTTP Client
- Observables
- Components
- Dependency Injection
- And more...

## Technologies

- Angular as the frontend framework.
- Angular-bootstrap library for its widgets.

## Features

- Cart System
- Product Catalog
- Checkout System

## Structure

```
\---src
    |   favicon.ico
    |   index.html
    |   main.ts
    |   polyfills.ts
    |   styles.css
    |   test.ts
    |
    +---app
    |   |   app-routing.module.ts
    |   |   app.component.css
    |   |   app.component.html
    |   |   app.component.spec.ts
    |   |   app.component.ts
    |   |   app.module.ts
    |   |
    |   +---components
    |   |   +---cart
    |   |   |       cart.component.css
    |   |   |       cart.component.html
    |   |   |       cart.component.spec.ts
    |   |   |       cart.component.ts
    |   |   |
    |   |   +---confirmation
    |   |   |       confirmation.component.css
    |   |   |       confirmation.component.html
    |   |   |       confirmation.component.spec.ts
    |   |   |       confirmation.component.ts
    |   |   |
    |   |   +---header
    |   |   |   |   header.component.css
    |   |   |   |   header.component.html
    |   |   |   |   header.component.spec.ts
    |   |   |   |   header.component.ts
    |   |   |   |
    |   |   |   \---nabvar
    |   |   |           nabvar.component.css
    |   |   |           nabvar.component.html
    |   |   |           nabvar.component.spec.ts
    |   |   |           nabvar.component.ts
    |   |   |
    |   |   +---product-item
    |   |   |       product-item.component.css
    |   |   |       product-item.component.html
    |   |   |       product-item.component.spec.ts
    |   |   |       product-item.component.ts
    |   |   |
    |   |   +---product-item-detail
    |   |   |       product-item-detail.component.css
    |   |   |       product-item-detail.component.html
    |   |   |       product-item-detail.component.spec.ts
    |   |   |       product-item-detail.component.ts
    |   |   |
    |   |   \---product-list
    |   |           product-list.component.css
    |   |           product-list.component.html
    |   |           product-list.component.spec.ts
    |   |           product-list.component.ts
    |   |
    |   +---models
    |   |       CartItem.ts
    |   |       Order.ts
    |   |       Product.ts
    |   |
    |   \---services
    |           cart.service.spec.ts
    |           cart.service.ts
    |           product.service.spec.ts
    |           product.service.ts
    |
    +---assets
    |       products.json
    |
    \---environments
            environment.prod.ts
            environment.ts
```

## Usage and Installation

You can get the project up and running in two simple steps.

Install the required packages using the following command.

```
npm install
```

Then install the Angular CLI using the following command.
```
npm install -g @angular/cli
```

You can then use the following command to run the project

```
ng serve
```
