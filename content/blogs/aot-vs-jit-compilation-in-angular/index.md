---
title: "AOT vs JIT compilation in Angular"
slug: "aot-vs-jit-compilation-in-angular"
date: "2020-11-23"
updated: "2021-01-19"
tags: ["angular","jit","compilation","aot"]
summary: ""
---

# What is a compilation in Angular?

An Angular application consists mainly of components and their HTML templates. Because the components and templates provided by Angular cannot be understood by the browser directly, Angular applications require a compilation process before they can run in a browser. Angular provides two types of compilation:

## JIT 

*   Compiles your app in the browser at runtime.
*   Development --> Production --> Browser download App --> Angular Parses & Compiles Templates (To JavaScript). The application compiles inside the browser during runtime.
*   ng build, ng serve

## AOT

*   It reduces the download size of the Angular framework.
*   Compiles your app and libraries at build time. As code is already compiled browser load executable code (HTML + JS + CSS) and renders the application immediately, which leads to fewer ajax request & reduce application load time because if faster rendering.
*   Errors can be detected at build time in advance, which helps in minimizing errors.
*   Development --> Angular Parses & Compiles Templates (To JavaScript) --> Production --> Browser download compiled App (HTML + Javascript). The application compiles during build time. Leads to faster rendering.
*   With compiled code on the client-side no need to read templates and no risky client-side HTML or Javascript evaluation, so fewer opportunities for injection attacks.
*   ng build --aot, ng serve --aot
*   AOT is the default compilation scheme from Angular 9 onwards
*   The type of compilation (JIT or AOT) depends on the value of the AOT property in your build configuration specified in angular.json. By default, AOT is set to true for new CLI apps.
