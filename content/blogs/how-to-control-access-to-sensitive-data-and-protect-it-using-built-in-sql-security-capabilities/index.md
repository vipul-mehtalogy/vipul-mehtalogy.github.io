---
title: "How to control access to sensitive data and protect it using built-in SQL security capabilities"
slug: "how-to-control-access-to-sensitive-data-and-protect-it-using-built-in-sql-security-capabilities"
date: "2023-11-28"
updated: "2023-11-28"
tags: ["compliance","best-practices","Cyber-Security","architecture"]
summary: ""
---

### Controlling Access to Sensitive Data

Controlling access to sensitive data is crucial for compliance with CFR 21 Part 11 and for protecting the integrity and confidentiality of data. Here are some strategies for controlling access to sensitive data:

*   Role-based access control (RBAC): RBAC restricts access to sensitive data based on user roles and permissions. Only users with the appropriate permissions can access sensitive data.
*   Attribute-based access control (ABAC): ABAC provides more granular control over access to sensitive data by considering attributes of the user, the data, and the environment.
*   Data masking: Data masking techniques can be used to hide sensitive data from unauthorized users. For example, dynamic data masking can be used to mask sensitive data in real time, while static data masking can be used to mask sensitive data in stored data.
*   Encryption: Encryption can be used to protect sensitive data at rest and in transit. For example, Always Encrypted can be used to encrypt data at rest in SQL Server databases.

### Using Built-in SQL Security Capabilities

SQL Server provides several built-in security capabilities that can be used to control access to sensitive data and protect it. Here are some examples:

*   Always Encrypted: Always Encrypted encrypts data at rest in SQL Server databases. This means that the data is encrypted even when it is stored on disk. Always Encrypted also provides secure enclave-based decryption, which means that the data is never decrypted in the clear outside of the secure enclave.
*   Dynamic Data Masking: Dynamic Data Masking masks sensitive data in real time as it is returned to users. This means that users only see the data they are authorized to see. Dynamic Data Masking can be used to mask a variety of data types, including credit card numbers, social security numbers, and email addresses.
*   Row-Level Security (RLS): RLS restricts access to data at the row level. This means that users can only see the rows of data that they are authorized to see. RLS can be used to implement a variety of security policies, such as restricting access to data based on user roles, organizational units, or data sensitivity.

By using built-in SQL security capabilities, organizations can effectively control access to sensitive data and protect it from unauthorized access.
