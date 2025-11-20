---
title: "Software project best practices checklists"
slug: "software-project-best-practices-checklists"
date: "2023-11-28"
updated: "2023-11-28"
tags: ["compliance","best-practices","code-quality","cost-optimization"]
summary: ""
---

Here are some software project best practices checklists for each phase of the project lifecycle:

### Specifications / Requirements / RFP

*   Clearly define the project objectives and scope.
*   Identify all stakeholders and their needs.
*   Gather and analyze requirements from all stakeholders.
*   Prioritize requirements based on importance and urgency.
*   Document requirements in a clear, concise, and unambiguous manner.
*   Validate requirements with stakeholders.
*   Get approval from stakeholders before proceeding with the project.
*   Work break down structure
*   Was thought given to the system administration functionality?
*   Was thought given to error handling?
*   Does the specification clearly segregate the project into phases?
*   Do all the phases have verifiable (and preferably undisputed) outcomes?
*   Are all the phases shorter than a month? (1-3 weeks is optimal)
*   During writing, are all unfinished parts clearly marked with (preferably red) "XXX" markers?
*   Does the document refer to other documents as specifically as possible? (Document title, revision, page number)
*   If there are interfaces, are the necessary data format specifications, API documentations all collected?
*   Is the maximum load, bandwidth and cpu usage estimated?
*   Are the security requirements specified?
*   Are the operation and maintenance requirements specified?
*   Are the education/training requirements specified?
*   Are the installation/migration requirements specified?
*   Is everything else collected? (Is there a brand manual? Color guide? Design manual? Deployment requirements? The firm's ISO procedures? Related legislation?)
*   Are all the items (use cases, etc) atomic, and (where possible) measureable? ("fast" vs "10 sec")
*   Is the specification the shortest and simplest possible, while still complete? (Will it be actually read by stakeholders?)

### Price quote / Bid

*   Understand the scope of work and requirements.
*   Estimate the time and resources required to complete the project.
*   Factor in all costs, including labor, materials, and overhead.
*   Prepare a detailed and competitive bid.
*   Include a breakdown of costs.
*   Make sure the bid is clear, concise, and easy to understand.
*   Be prepared to negotiate the bid with the client.
*   Are the specifications accepted by all stakeholders?
*   Does every (1-3 weeks long) phase have a price quote?
*   Are all outcomes/deliverables of phases clearly defined and testable? (We're going to be paid based on these!)
*   Has the architecture and framework of the system already been decided? (At a minimum, programming languages and frameworks)
*   Will the allocated initial capital and the payment schedule together cover costs for the project's lifetime?
*   Is there a quote for education/training?
*   Is there a quote for installation/migration?
*   Is there a quote for documentation (operating manual, user guide, etc)?
*   Is there a quote for operations and maintenance? (Projects rarely end with typing in the last line of code.)
*   Is the contract attached?
*   Who's going to own the software that is about to be developed?

### Project start

*   Kick off the project with a meeting to align all stakeholders on the objectives, scope, and timeline.
*   Create a project plan that outlines the tasks, milestones, and deadlines.
*   Assign resources to the project and establish clear roles and responsibilities.
*   Set up a communication plan to keep stakeholders informed of the project's progress.
*   Establish a risk management plan to identify, assess, and mitigate potential risks.
*   Is the project still feasible?
*   Are the specifications still the same as at the time of the last price quote?
*   Has the client signed the contract? (Not "promised he will sign". Actually signed.)
*   Are there developers and a project leader assigned to the project? (Testers? Designer? Other experts as needed?)
*   Do we have a reachable and decision-capable contact person at the client?
*   Does the development team have a consensus and a clear vision about what will be the final delivery?
*   Does everybody on the team know \*as much as possible\* about the client, the project, the constraints and the deadline?
*   Schedule resources - Identifying key resources, considering resource constraints
*   Risk management plan - known risk, risk analysis, risk response
*   Choose collaboration platform

## Checklists for development

### General principles

*   Does everyone remember the KISS principle ("Keep it simple, stupid") and Occam's razor ("the simplest explanation or strategy tends to be the best one")?
*   Are unfinished/unpolished parts of the code clearly marked with "XXX"?
*   Is UTF-8 used for everything? Databases. Tables. DB connections. Strings. Content-type. All should be UTF-8.
*   Are compilation and any code generation automated? (Makefile, Ant, Maven, etc.)
*   Does every piece of input that comes from an untrusted source (i.e. the user, or other systems) gets filtered? (Invalid characters, invalid type, etc).
*   Do we prevent the users from uploading dangerous files? (php, cgi, exe, etc)
*   Are all forms validated for consistency on the server side? (And, as needed, on the client side?)
*   Are all the files in the project use the same identation? (Tabs vs spaces, ident size, etc.) K&R/1TBS style is preferred.
*   Is the code sufficiently (but not overly) commented?

#### Task Tracking

*   Break down large tasks into smaller, more manageable ones.
*   Estimate the time required to complete each task.
*   Assign tasks to team members based on their skills and availability.
*   Track the progress of tasks using a task tracking tool.
*   Update task status regularly.
*   Identify and address bottlenecks as they arise.
*   Does the team (or better, the company) has a task tracking system in place?
*   Is the task tracking system painless enough to use? Does it help the job, or gets in the way?
*   Is the task tracking system viewed often enough (daily) both by team members and management? (If not, how could you make it so?)
*   Can everybody assign tasks to everybody? (I.e., developers assigning tasks to management and sales?)
*   Is there some way to request acceptance testing?

### Source control

*   Use a centralized repository to store all code and documentation.
*   Commit code changes regularly.
*   Use descriptive commit messages.
*   Review code changes before committing them.
*   Use branches to isolate work in progress.
*   Use tags to mark releases.
*   Is the project using source control? (It must be. No buts.)
*   Is it easy to create a full working instance after checkout/clone? (Add an ./init.sh for setting permissions, Makefile for code generation, etc.)
*   Is there a database initialization script in the repository? (Database structure must be under source control, too.)
*   Do people pull/fetch/update before committing? (Most source control systems force you to, but not all. One should always integrate before commit.)
*   Does every commit contains only one modification (a feature, a bug fix, etc)?
*   Does every commit have a description? (Nobody will remember in three months what "today's work" was.)
*   Was the new code tested (and automated tests run) before committing? (At some places, the person who commits code that breaks the compilation/autotests has to pay for next day's coffee/dinner.)
*   If the database needed changing, was the db creation script modified and committed (preferably, together with the code changes)?

### Testing

*   Develop a comprehensive testing plan that covers all aspects of the system.
*   Write automated test cases to ensure the system works as expected.
*   Perform manual testing to identify and fix potential bugs.
*   Use a variety of testing techniques, such as unit testing, integration testing, and system testing.
*   Track and report bugs to the development team.
*   Fix bugs before deploying the system to production.
*   Does the system have automated tests? (It seems like a waste of time, but good tests save a lot of time in the long run, especially during the end, when it will matter most.)
*   Are the tests under source control?
*   Do the tests work the system on as many components as possible? (i.e., for web-based systems tests that use the user interface directly are better than unit tests, since the former also tests the communication and the client-side javascript.)
*   Are the tests work in a test database, that gets reset at the start to a known state?

## Checklist for operations and maintenance

*   Is there an automated monitoring/alert system in place?
*   Will you know if the automated monitoring system breaks down? (Is something watching the automated monitoring system?)
*   Were the development features (error/exception display, default passwords, etc) deactivated in the deployed code?
*   Does every operational project has one person who is responsible?
*   Is that responsible person subscribed (email or RSS) to the security list of all the technologies used in that project?
*   When making small modifications to operational code or configuration, is it always clearly noted why and when the modification happened, who did it, who asked for it, and, if feasible, what was the original?
*   Are abandoned/dead projects taken offline?
