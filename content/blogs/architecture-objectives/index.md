---
title: "Architecture Objectives"
slug: "architecture-objectives"
date: "2023-11-28"
updated: "2023-11-28"
tags: ["architecture"]
summary: ""
---

Architecture objectives are the goals that a software architect aims to achieve when designing a system. They typically fall into one of several categories:

  

*   Functional: These objectives focus on the what and how of the system, specifying the features and functionalities that the system should provide. They may also include performance and scalability requirements.
*   Non-functional: These objectives focus on the how well the system delivers its features and functionalities, addressing aspects such as usability, maintainability, reliability, and security.
*   Architectural: These objectives address the overall structure and organization of the system, ensuring that it is modular, scalable, and maintainable.

Some common architecture objectives include:

*   Modular: A modular architecture is one in which the system is divided into independent modules. Each module has a well-defined purpose and is responsible for a specific set of tasks. This makes it easier to maintain and extend the system, as changes can be made to one module without affecting the others.
*   Cohesion: Cohesion is a measure of how well-related the functions within a module are. High cohesion means that the functions in a module are highly related and share a common purpose. Low cohesion means that the functions in a module are unrelated and do not share a common purpose.
*   Coupling: Coupling is a measure of how interdependent modules are. High coupling means that modules are tightly interdependent and rely on each other for data or functionality. Low coupling means that modules are loosely interdependent and can function independently.
*   Abstraction: The system should hide implementation details and expose only the essential functionalities to the user.
*   Scalability: The system should be able to handle increasing loads and user numbers without performance degradation.
*   Reliability: The system should be able to recover from failures and maintain data integrity.
*   Security: The system should be protected from unauthorized access, data breaches, and malicious attacks.
*   Performance: The system should deliver its functionalities efficiently and without excessive resource consumption.
*   Usability: The system should be easy to learn, use, and navigate.
*   Maintainability: The system should be easy to modify, extend, and debug.
*   Testability: The system should be easy to test and verify its correctness.
*   Clean: A clean architecture is one that is easy to understand, maintain, and extend. It is also one that is free from duplication and unnecessary complexity.
*   Evolution: An architecture that is designed for evolution is one that is flexible and can accommodate changes over time. This includes changes to the requirements, the technology stack, and the business needs.
*   Push vs Pull: In a push architecture, the server pushes data to the client. This is the traditional way of delivering content to web browsers, and it is still used by many applications. In a pull architecture, the client periodically requests data from the server. This is often used for applications that require real-time data, such as chat applications and stock tickers.
*   Payload / Performance: The payload is the amount of data that is transferred between the client and the server. The performance of an application can be affected by the size of the payload. A larger payload can take longer to transfer, which can slow down the application.
*   Tenancy: Tenancy is the ability to share resources between different users or applications. This can be done by dividing the application into separate tenants. Each tenant has its own set of resources, such as databases and storage. This can help to improve security and scalability.
