---
title: "Architecture of an Angular application"
slug: "architecture-of-an-angular-application"
date: "2020-11-23"
updated: "2020-11-23"
tags: ["angular","architecture"]
summary: ""
---

#  Angular application architecture

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqPyPuR5IiLSwHDxexRMHoCcblBbIcfIoo-GBJceoHjNap9dXZOpVrWFND5dFLAmBEbdR5f63ZQhnexnnxIx-Jx_whTBT5JY3zBRjZrwGAjJuCAsUEYhg0MgfzkSmCs2O_eKPvYpqWWvA/w400-h304/Angular+Architecture+%25281%2529.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqPyPuR5IiLSwHDxexRMHoCcblBbIcfIoo-GBJceoHjNap9dXZOpVrWFND5dFLAmBEbdR5f63ZQhnexnnxIx-Jx_whTBT5JY3zBRjZrwGAjJuCAsUEYhg0MgfzkSmCs2O_eKPvYpqWWvA/s745/Angular+Architecture+%25281%2529.png)

  

*   Angular.json file will contain all the configurations of the app.
*   The builder looks at this file to find the entry point (main.ts) of the application
*   The main.ts file creates a browser environment for the application to run
*   calls a function called bootstrapModule, which bootstraps the application via AppModule (declared in the app.module.ts file. )
*   AppModule contains declarations of all the components, this will bootstrap AppComponenet (defined in app.component.ts file)
*   AppComponent interacts with the webpage and serves data to it.
*   Each component is declared with three properties:

*   Selector - used for accessing the component
*   Template/TemplateURL - contains HTML of the component
*   StylesURL - contains component-specific stylesheets

*   After this, Angular calls the index.html file. This file consequently calls the root component that is app-root. The root component is defined in app.component.ts.
*   Read more about Angular components, modules, and services [here](https://mehtalogy.blogspot.com/2020/11/angular-components-modules-and-services.html).
