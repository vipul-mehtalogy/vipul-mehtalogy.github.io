---
title: "Angular Components, Modules and Services"
slug: "angular-components-modules-and-services"
date: "2020-11-23"
updated: "2020-11-23"
tags: ["angular","architecture"]
summary: ""
---

[![](angular-architecture.png)](angular-architecture.png)

Angular application architecture  

## Component

*   Control a part of UI
*   Defined using the @Component decorator
*   Contains

*   template: loads view for the component
*   Stylesheet: define look and feel
*   Class: business logic for component

*   ng generate component productList

## Module

*   Group component 
*   Module decides whether the components, directives, etc can be used by others or not
*   There is two types of module exists in Angular

*   Root Module: 

*   Every app can have only one root module.
*   Imports Browser Module
*   Defined inside app.module.ts

*   Feature Module

*   mg generate module product-list

## Services

*   Services are objects which get initiated only once during the lifetime of an application.
*   The main objective of the service to share data
*   Defined using a @Injectable decorator
*   A function defined inside a service can be invoked from any component or directive by just importing the service.
*   ng generate service product-service
