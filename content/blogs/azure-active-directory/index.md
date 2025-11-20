---
title: "Azure Active Directory"
slug: "azure-active-directory"
date: "2021-05-22"
updated: "2021-05-22"
tags: ["Azure","Authentication"]
summary: ""
---

## Identity

In computing, "identity" is a representation of a person, application, or device. example

*   Person - John Doe,
*   email address - vipul@gmail.com
*   Application - background batch job
*   Device - a network-connected printer

Identity usually requires a password, a secret key, or a certificate to prove the trust. Many applications required users to login into the application to provide restricted/controlled access to application functionality or resources. Traditionally developers have written their own code to handle this. It is a cross-cutting concern where it is always advisable to delegate this responsibility to external components so that development time can be saved, improvement to the system can be benefited by all application like password security, add/modify password policies or enforcing password complexity policies.

  

  

Azure provides an identity management system based on their popular "Active Directory" called Azure Active Directory (AAD). Azure active directory does not provide the same services as Active directory as the traditional active directory (AD) does not work with (LDAP, Kerberos) internet protocols like SAML or WS Federation, etc. Azure active directory provides "identity as a service". Instead of writing code to handle users, passwords, password reset, etc we can leverage AAD service features.

## Azure Active Directory (AAD) Model

[![Azure Active Directory (AAD) Model](Azure-Active-Directory-Model.png "Azure Active Directory (AAD) Model")](Azure-Active-Directory-Model.png)

Azure Active Directory (AAD) Model

In the AAD model Identity provider is a middle man, the client app goes to the identity provider with credentials and gets back a signed token. The client app passes this signed token to the server and the service is able to validate that token is valid because it is signed and they are able to trust that the person because they have signed the token.

  

The token often has details called claims, expiry time, issue time and who the intended target is, etc.

  

## Common Protocol for authentication

*   SAML
*   OpenID
*   WS Federation

## Benefits  of Azure Active Directory

*   An industry-standard system, used by millions of organizations uses a proven-tested and secure system.
*   Very easy to integrate with via APIs
*   Increased  Security
*   Multi-Factor Authentic
*   Conditional Access 
*   Privileged identity management
*   Advanced threat detection
*   Centralized administration
*   Single sign-on
*   Integration with other Azure services like SQL Database, Storage VM, etc.

## Tips

*   A resource group can be created even if you don't have a subscription.
*   Can add users even without an active subscription.
*   Can assign a custom domain name to the active directory.
*   Can enable self-service password reset to allow the user to either via mobile app, email, SMS, or using security questions.
*   Conditional Access policies can be configured via custom policies.
*   MFA can block users for a certain time period after a defined number of unsuccessful attempts.
*   A fraud alert can be configured for users and can block automatically or manually.
*   Guest users can also be added to the active directory with role and group assignment. Such users are not part of your domain and belong to an external domain.

## Identity Protection 

protects against

*   User Risk

*   Compromise of credentials
*   Bruteforce attack
*   Users can be blocked if violating policies. It can be mitigated via password reset.

*   Sign-in risk

*   Using anonymous VPN
*   Logging from an unusual location
*   IP address used for logging is a bad IP address
*   A simultaneous attempt of Sign-in found from multiple different geographies.

*   Multifactor Authentication Registration Policy

*   Force certain or all users to signup for MFA

## Azure AD Connect

*   To sync on-premise AD with Azure Active Directory
*   Allow single sign-on for on-prim users
*   Pass-throught authentication enforce user to auth with on-premise Active Directory
*   Health and analytics can be configure

## Question

*   What is an active directory forest?
