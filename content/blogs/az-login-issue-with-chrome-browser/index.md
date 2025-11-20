---
title: "az login issue with chrome browser"
slug: "az-login-issue-with-chrome-browser"
date: "2020-10-15"
updated: "2020-10-15"
tags: []
summary: ""
---

Issue:

az login redirects to https://localhost:8400 and we get below error:

> This site can’t provide a secure connection localhost sent an invalid response.
> 
> Try running Windows Network Diagnostics.
> 
> ERR\_SSL\_PROTOCOL\_ERROR

Root Cause:

Chrome enforces strict hsts redirect on all domains by default.

az login redirects to HTTP and work only on HTTP so you get an error.

Fix:

We need to remove strict hsts policy from chrome for localhost domain as no valid certificate can be issued for localhost

*   Open Chrome browser, in address bar type chrome://net-internals/#hsts
*   Go to 'Delete domain security policies'
*   enter localhost for Domain textbox
*   Click delete
*   close and reopen chrome
*   try az login, it must work
