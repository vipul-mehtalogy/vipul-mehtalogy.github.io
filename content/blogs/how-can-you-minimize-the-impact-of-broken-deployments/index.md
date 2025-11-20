---
title: "How can you minimize the impact of broken deployments?"
slug: "how-can-you-minimize-the-impact-of-broken-deployments"
date: "2017-12-03"
updated: "2020-03-26"
tags: ["DevOps","twelve-factor"]
summary: ""
---

Deployment often lead to some downtime to your web application. There is however something that you can control about deployment process that can help minimize the downtime and lower the impact of availability of applications.  
  
If release pipeline is a black box then there are higher chances of broken deployment. One who understand release pipeline better can minimize the impact if deployment get broken and work on alternate plan.  
  
Azure Web App is having a very nice concept of deployment slot and swapping slots. I am fan of this feature. Many times, I have recovered broken deployments in seconds using this feature. This feature gives me a feel of transactional deployment as well.  
  
Application configuration is most popular reason behind broken deployment. It is everything that is likely to vary between deploys (staging, production etc). A strict separation of configuration from code is always advisable.  it’s easy to mistakenly check-in a configuration file to the repo; there is a tendency for config files to be scattered about in different places and different formats, making it hard to see and manage all the config in one place. Further, these formats tend to be language- or framework-specific. Avoid check-in environment specific configuration into source code repository. Always try to use environment variable instead. Various token process supported by continuous delivery tools which can be integrated into release pipeline. This way you get an opportunity to automate configuration values and reduce changes of broken deployment.  
  
Dependency (support library) is another common reason for broken deployment after configuration. Explicitly declare and isolate your application dependency. Try to avoid dependency of some driver installation, registry settings etc. Many programming languages are having very nice packaging ecosystem like NuGet, CPAN, RubbyGems etc.. Always try to add dependency (support libraries) using some packaging system. Integrate this packaging tasks in your release pipeline and ensure that release pipeline resolve all dependencies of your application. Some build tools support it implicitly but I would always prefer to execute it explicitly.  
  
It is always a good practice to perform a post-production release verification. Pre-impact analysis can define scope of your post-deployment release verification coverage. Along with your post-deployment release verification on production environment, it is also advisable to test DR/BCP environments. Do not forget to clean-up test data after verification is complete. Identified issue(s) while verification are good candidate for automation opportunities.  
  
Keep your development, staging & production environment as similar as possible. We have seen that tools and technologies used by developer to develop software may differ from production environment. Developers may be using a stack like Nginx, SQLite, and OS X, while the production deploy uses Apache, MySQL, and Linux. Try to reduce this gap as much as possible. There are various alternate options available to reduce this gap (it is based on what tools are you using) alternatively you can take advantages of virtualization/cloud technologies also.  
  
Try to automate as much as you can. Automate tasks like certificate binding, installing some dependency (if absolutely required), creating storage/queue accounts etc. This avoid chances of human errors.   
  
Summary  
  

*   A well-defined deployment process can minimize the impact of broken deployment. 
*   Manual deployment is always prone to deployment issues. Avoid manual and adopt automation as much as possible.
*   A strict separation of configuration from code is always advisable.
*   Always try to add dependency (support libraries) using some packaging system like NuGet or RubbyGems etc. 
*   Always perform a post-production release verification.
