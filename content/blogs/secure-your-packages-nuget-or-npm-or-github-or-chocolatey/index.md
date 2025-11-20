---
title: "Secure your packages – NuGet | NPM | Github | Chocolatey "
slug: "secure-your-packages-nuget-or-npm-or-github-or-chocolatey"
date: "2021-04-30"
updated: "2021-04-30"
tags: ["angular","DevOps",".NET"]
summary: ""
---

## Problem Statement

1.  No central approval process for adding packages
2.  Anyone can pack anything into a package, give it any name they want (like "Microsoft Prism", as long as the name is not taken (doesn't manage trust)
3.  Binaries downloaded from Sourceforge.net, Codeplex.com, etc could feasibly contain malicious code
4.  What if the project is using licensed NuGet. We do not have any mechanism to verify that license terms are followed or not.
5.  There is no check for using an obsolete version of NuGet. Once added never updated

## Approach for using packages

1.  Lock in the semantic version number completely. Explicitly specify the major, minor, and patch numbers. Don't assume that new updates will be safe or that their semantic version will be accurate.
2.  Use only well-known current versions for production.
3.  Experiment with anything in a test environment with limited access e.g. under an account that isn't a local administrator, no local access to highly privileged credentials, no access rights to privileged resources granted to the test machine's IP.
4.  Check the vendor/publisher. For example, if the package is released by Microsoft, Amazon and it's an AWS SDK, then that package is probably safe to use if you trust Amazon.
