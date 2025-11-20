---
title: "Non functional requirements for web based applications"
slug: "non-functional-requirements-for-web-based-applications"
date: "2023-11-28"
updated: "2023-11-28"
tags: []
summary: ""
---

Application Security Design

GDPR regulations for User Registration Data

Authentication, Authorization

Data Encryption during transfer/rest

Data Validation

Session Management

Error Handling

Threat Modelling

Offline Caching

Audit Trails/Logging

Safety Review

Sub Domain Setup/Deployment

Cross browser compatibility/Device Compatibility testing/IOP?

Performance/Performance Testing/Load Testing/Stress Testing

Security/Security testing (OWASP Top 10?)

Any other cybsersecurity requirement?

Test Automation/Integration Testing Framework

Third party API fitment

non-functional requirements about security, fault tolerance, performance, evolvability

· Project setup/skeleton 

· Kubernetes CI/CD poc. 

· Project Architecture -  HLD, lld, sdd, flow diagram.  

· technology stack 

· application stack 

· Odata standard apis PoCs 

· Api endpoints.  

· Datahub K.T(M.E.S integration) 

· PIM Domain model, MES domain model 

· Sample data investigation. 

· Monkey testing on all Partner apis  

· Threat modelling. 

Non Functional Questions:

  

\- Service authentication (oAuth or certificate)?

\- How failures are planned while service integration.

\- Understand hosting scenario from product perspective.

\- Maintenance schedule, downtime for maintenance etc.

\- Versioning and backward compatibility.

\- Maximum parallel request support. Concurrent users

a. Performance requirements:

i. Response time for API & UI: In general, any API or UI should be able to respond (server throughput) maximum within 2 seconds and average 1 second.

ii. In case of some special operations where system need more than general response time must be specified in SLA terms.

iii. Render time: Rendering of web pages must not block users. Resources like logos, thumbnail, JavaScripts, CSS & images etc shall be optimized for best rendering.

iv. Scalability / Capacity requirements (can be part of SLA) :

1. Inexto shall provide number of users system can support (without effecting performance)

2. Inexto shall provide number of concurrent users system support (without effecting performance)

v. Minimum & Maximum data size support per customer/system level. This information shall be provided by Inexto

b. Maintenance requirements

i. Downtime for maintenance schedule (must be defined in SLA by Inexto)

ii. Data backup (like Database, Files etc…). It is mentioned in one of the data backup policy of Inexto

iii. Azure Resource Backup (like VM backup if required)

c. Stability Requirements

i. Disaster recovery plan, MTTR, need to be defined in SLA by Inexto

ii. Availability (need to refer to SLA)

d. Security requirements 

i. Audit trail 

System that traces the detailed transactions relating to any item in system of records. Application shall be able to show what has happened to it, who did it and when (like transaction changes, before/after pictures) in case of change in state of resources or data.

ii. Logging, tracing general requirements

1. Log file retention must be configurable

2. Logs for all components should be available via a single location, i.e. an operator/developer should not have to bounce around to containers and systems to view and correlate logs

3. Logs entries should be accessed controlled, such that a user should only be able to view those logs to which they are authorized

4. Logs should be able to be viewed through one or more filters (think query)

5. Log context (source, component version, etc) must be available with each log message.

6. Log messages should provide information that is relevant to the operator, including identifying the user that invoked an action, the action, and parameters to that action

7. Log messages should contain complete sentences and thoughts and not be cryptic

8. User should be able to modify the verbosity (Trace | Info | Error | Fatal | Debug | Warning) of logging while the system is running

9. Log entries should be viewed in a single time zone (UTC)

10. Program level language exceptions and tracebacks/stack traces (error messages) should not be viewable (by default) to an operator

11. As an operator, user must be able to create an archive of log messages that can be transferred to a support organization; such as via email. This archive may be time-boxed and/or filtered

12. As an operator, user should be able to granularly control logging at the logical component level

13. Specific detailed log should have details of application events, Http Request Logs, application states and optionally may have SQL, debug information, Executing threads information, JavaScript errors.

iii. Data integrity

1. System shall ensure security of data while transit and rest.

2. A data record, such as a description of a serialization asset, must be complete to satisfy the needs of all its consumers.

3. Proper data normalization and validation procedures shall be in place to ensure consistency of data. In case of concurrent user proper transactions must be in place to ensure concurrency. In case of concurrency failures users must be notified.

  

2. Environment parity: The purpose of applying rigor and discipline to environment parity is to give schneider and its customers the confidence that the application will work in lower (i.e, development and QA environment) and higher environment (i.e, production) . Separate DEV, pre-prod & Prod environments shall be provided on Inexto hosted infrastructure keeping DEV, pre-prod & Prod environments as similar as possible.

3. As agreed, a separate environment would be provided for penetration & load testing

4. Policy shall be defined to access production environment which should define who can access the system, what procedures must be followed when accessing production system, log of access of resources & data, logs about changes in resource and data etc. It must be approved by Schneider.

5. Adherence to compliance (if any from segment agreed in this agreement): we follow existing compliances by Inexto, discussing future marketing and customer requirements based on new standards and regulations.
