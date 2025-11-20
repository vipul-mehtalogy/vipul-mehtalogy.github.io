---
title: "Improve Angular performance by adhering to proven best Practices"
slug: "improve-angular-performance-by-adhering-to-proven-best-practices"
date: "2020-12-11"
updated: "2021-02-02"
tags: ["angular","ui-framework","best-practices"]
summary: ""
---

[![Improve Angular performance by adhering to proven best Practices](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR53IdKzKYJqrsgQaS5pQWzP9y7ApEFGPjFJLx_Dktq_im3JKczudlVKhmNAxgHspoLHFSbr0z_czUGNyGw-0lxNorrZt4dIcg5INNnaiplsHHEDMivorhDzDU5YsJBPVlM9EMV_XnEP0/w400-h300/Performance-Evaluation-Process-z.jpg "Improve Angular performance by adhering to proven best Practices")](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR53IdKzKYJqrsgQaS5pQWzP9y7ApEFGPjFJLx_Dktq_im3JKczudlVKhmNAxgHspoLHFSbr0z_czUGNyGw-0lxNorrZt4dIcg5INNnaiplsHHEDMivorhDzDU5YsJBPVlM9EMV_XnEP0/s2048/Performance-Evaluation-Process-z.jpg)

  

##   

## Development Time Best Practices

### TSLint

*   run ng lint before raising PR
*   fix lint issues and test application if there is any breaking changes using the below command
*   ng lint --fix

### Generates classes using Angular CLI

*   ng new <project name>
*   ng g c components/products

### Avoid Duplicate

*   HTML --> Use components, Directive, Template
*   TS --> functions, providers or components
*   CSS--> use global & component-specific CSS, use SCSS

### Use Lazy loading

*   Instead of loading all components of the application, load only the module which are required by specific use case at run time.
*   Work well only if application designed well to divide in multiple modules
*   Help in reducing initial load time

### Recommended Plug-ins

*   Auto Import
*   MOVE TS
*   Material icon theme
*   Angular 2 TypeScript Snippet

### TypeScript Best practices

*   Write small functions
*   Turn Strict Checks On
*   Start pinning your versions in your package.json
*   Use objects as payloads for functions

### Third-Party Packages

*   Review the third party packages used and try to find better and smaller alternative
*   Remove unnecessary packages used for small functionality. Try to use native Js or HTML5 features if possible

### Use defer & async attribute on external Javascript files

*   lazyload javascript

### Avoid complex computations in the template

*   Leverage the use of pure pipes thereby taking advantage of Angular caching and hence avoiding duplicate operations 
*   If the use of pipe is not possible, see the opportunity to pre-calculate the values and then directly bind values instead of calling the component method in the template.

### Progressive Web Apps

*   Offer offline capabilities to the application
*   Near-native app experience

### Avoid using console.log

*   It slows down the performance of the application
*   Create memory leaks issues
*   In development mode of the browser, it slows down application performance significtly
*   If you use Webpack you could use the Terser plugin to completely exclude the console.log function calls.
*   You could define a DEBUG\_MODE variable and log conditionally.
*   Override console.log = function() {};, but it should be your last resort as it may lead to application crash issues, no guaranty if any other library overriding it. In the best case, you can write your own logging library and log conditionally.

### Unsubscribing Observables

*   Observables could create a memory leak issue. So it is better to unsubscribe them when they are not needed anymore. 
*   Unsubscribing explicitly is required when a subscription is created inside a component which is destroyed before the observable completes. 

### Observable share() operator

*   If you have subscribed the observable at multiple locations/components, then each subscription will try to produce the data even though the data is duplicate. 
*   We can avoid the processing of the duplicate data across subscriptions using the “share()” operator.

### Global variables

*   The variables defined in the global scope won’t be cleared until the window is reloaded or tab is closed thus resulting in the memory leak 
*   Instead of global variables

*   Use shared service 
*   Put the global variables in a file an export them, use an import statement "import \* as myGlobals from 'globals'" in other files

### Short digest Cycle

*   Your application’s performance will become slow if your app contains a longer digest cycle
*   Using fewer watchers reduces the digest cycle & improves the speed of your application

### Reduce usage of ng-repeat

*   use alternatives like $interpolate provider, if possible.

### Performance & Testing tools

*   Perform protractor and Batarang scan at the end of every sprint and add assessment results as a technical story in the next sprint

## Build Time Best Practices

### Use [Husky](https://github.com/typicode/husky) or [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) or [pre-commit](https://pre-commit.com/)

### 

*   NPM package that lets you run a set of commands or script before any git action
*   [Configure strict TSLint, prettier hooks with git add action](https://dev.to/ajmaurya/set-up-eslint-prettier-and-pre-commit-hooks-using-husky-for-wordpress-from-scratch-1djk)

### [Use AOT compilation](/2020/11/aot-vs-jit-compilation-in-angular.html)

### Use Tree-shaking 

*   To remove unused code

### Uglify

*   Uglify does the code transformations like mangling, removal of whitespace, removal of comments etc.
*   for webpack use uglify plugin with angular-cli, specify the prod' flag to perform the qualification process.

### WebPack

*   Help in reducing build size

### Prod flag

*   specify the 'prod' flag in the angular-cli
*   It enables various build optimization like uglify, AOT, removal of sourcemaps, service workers, and producing a smaller build size.

### Build optimizer flag

*   suggested for a production build
*   It disables the vendor chunk and helps in reducing build size.

### Server Side rendering

*   Pre-render application on the server and serve static content to the client
*   Helps in reducing the load time of the application
*   Use Angular Universal to perform server-side rendering

### GZip compression

*   Reduce the size of the response body, result in low latency

### Compressing images

*   Usually, UX team provides images in high resolution which is not good to use in web applications as it makes the application too heavy. 
*   Ensure to compress images without losing quality

### enableProdMode

*    Invoking “enableProdMode()” avoids Angular from performing additional checks for change detection.
*   import {enableProdMode} from '@angular/core';
    if (ENV === 'production') {
        enableProdMode();
    }
