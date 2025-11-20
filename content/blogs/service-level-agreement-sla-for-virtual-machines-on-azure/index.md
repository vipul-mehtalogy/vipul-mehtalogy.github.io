---
title: " Service Level Agreement (SLA) for Virtual Machines on Azure"
slug: "service-level-agreement-sla-for-virtual-machines-on-azure"
date: "2023-11-28"
updated: "2023-11-28"
tags: ["Azure","architecture"]
summary: ""
---

Microsoft Azure provides a comprehensive SLA for Virtual Machines (VMs), guaranteeing a high level of uptime and connectivity for your workloads. The specific SLA guarantees vary depending on the deployment configuration of your VMs.

  

### SLA for VMs Deployed Across Availability Zones

  

For VMs that have two or more instances deployed across two or more availability zones in the same Azure region, Microsoft guarantees 99.99% connectivity to at least one instance. This means that you can be confident that your VMs will be available nearly all the time, even in the event of a localized outage.

  

### SLA for VMs Deployed in Availability Sets or Dedicated Host Groups

  

For VMs that have two or more instances deployed in the same availability set or in the same dedicated host group, Microsoft guarantees 99.95% connectivity to at least one instance. This means that your VMs will be highly available, even if there is a problem with the underlying infrastructure.

  

### SLA for VMs with Premium SSD Storage

  

For VMs that use premium SSD storage for both the operating system (OS) disk and data disks, Microsoft guarantees 99.9% connectivity. This is the highest level of SLA availability for VMs on Azure.

  

### SLA for VMs with Standard SSD or HDD Storage

  

For VMs that use standard SSD storage for the OS disk and data disks, Microsoft guarantees 99.5% connectivity. For VMs that use standard HDD storage for the data disks, Microsoft guarantees 95% connectivity.

  

### Implications of SLA Guarantees

  

The SLA guarantees for VMs on Azure translate into a very low amount of downtime. For example, with the 99.99% SLA guarantee, you can expect an average of only 4 minutes of downtime per month. This means that your workloads will be highly available and accessible to your users.

  

### Using Multiple VMs for Increased Availability

  

To achieve the highest level of availability, you can deploy two or more VMs across two or more availability zones. This will provide you with the 99.99% SLA guarantee for connectivity to at least one instance. Even if one availability zone experiences an outage, your VMs in the other zones will remain available.

  

### Conclusion

  

The SLA for VMs on Azure provides a high level of assurance for the uptime and connectivity of your workloads. By understanding the SLA guarantees and deploying your VMs accordingly, you can minimize downtime and ensure that your applications are always available to your users.
