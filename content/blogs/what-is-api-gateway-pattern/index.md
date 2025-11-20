---
title: "What is API Gateway Pattern "
slug: "what-is-api-gateway-pattern"
date: "2020-12-11"
updated: "2021-02-02"
tags: ["api-manager","api-gateway","microservices","Kubernetes"]
summary: ""
---

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-7qqocWk8nTHwqOqFP-o8D3DPiArnDzLL8ybTzSFH5fR51sQYuAbmRLtTcxyhkdE24gMbtO_CX3X4xKdx-k5bKWKbDp37f1qJIX3eM_TVgjIyNOKgdF6W26XkVVdVyEuSNC6X9MElJQ8/w400-h168/API+Gateway+%25281%2529.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-7qqocWk8nTHwqOqFP-o8D3DPiArnDzLL8ybTzSFH5fR51sQYuAbmRLtTcxyhkdE24gMbtO_CX3X4xKdx-k5bKWKbDp37f1qJIX3eM_TVgjIyNOKgdF6W26XkVVdVyEuSNC6X9MElJQ8/s295/API+Gateway+%25281%2529.png)

  

  

# What is API Gateway

API gateway abstracts APIs from their implementation and hosts them under the same domain or a static IP address. It is a component that acts as an entry point for an application. It allows you to decouple client applications from internal microservices.  
  
Using API gateway secures APIs by aggregating them, and not exposing your microservices directly. This helps you reduce the surface area for a potential attack. You can authenticate API requests using a subscription key, JWT token, client certificate, or custom headers. Traffic may be filtered down only to trusted IP addresses.  
  
With API gateway can also execute rules on APIs. You can define API policies on incoming requests and outgoing responses globally, per API, or per API operation.  

## Common API gateway features

*   Authentication methods
*   Throttling
*   Caching
*   Transformations
*   rate-limiting
*   Load balancing
*   Health monitoring
*   Versioning
*   Fault tolerance
*   Logging

## Protocol Adaptor

If we want to take advantage of protocol like web socket or a newer version of HTTP, i.e., HTTP/2, and even if our backend services are not ready or not compatible with HTTP/2 or web socket, an API gateway can take the responsibility of converting a newer to an older protocol. It can act as a protocol adaptor.

  

## Popular Offering on API Gateway

*   Kong Gateway
*   Azure API Manager
*   Istio
*   Ocelot
*   Gloo
*   Amazon API Gateway
