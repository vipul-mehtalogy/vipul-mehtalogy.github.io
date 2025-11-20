---
title: "Azure Load Balancing & Network Security"
slug: "azure-load-balancing-and-network-security"
date: "2021-05-22"
updated: "2021-05-28"
tags: ["Azure","Networking","architecture"]
summary: ""
---

## SLA for Virtual Machines

*   VMs that have two or more instances deployed across two or more availability zones in the same Azure region, MS guarantee 99.99% of connectivity to at least one instance.
*   99.95% connectivity to at least one instance if VMs deployed in the same availability set or in the same dedicated host group.
*   VM using premium SSD for OS and data disk shall have 99.9% connectivity guarantee, 99.5% in case of standard SSD, 95% in case of standard HDD.

It implies that using 2 or more VM leads to 4 9 of availability means 4 min downtime in a month.

## Availability Set

*   The logical grouping of VMs allows Azure to understand how the application is built to provide for redundancy and availability.
*   There is no cost for the availability set itself, just need to pay for added VM instances.

*   Fault Domain: physical separation of these virtual machines so that no hardware failure will disrupt both of them.
*   Update domain

## Availability Zone

*   Is a physically separate zone, within an Azure region.
*   There are three availability zones per Azure region.
*   Each availability zone as a distinct power source, network, and cooling.
*   It protects applications and data from the loss of data centers.
*   If one zone is compromised, then replicated apps and data are instantly available in another zone.

## Virtual Machine Scale Set

*   Create and manage a group of load-balanced VMs
*   The number of VM instances can automatically increase or decrease in response to demand or a defined schedule.
*   There is no cost for the scale set itself, you only pay for each VM instance that you create.
*   Virtual machines in a scale set can also be deployed into a single Availability zone, or regionally. 

## Load Balancer

*   Combine the Azure Load Balancer with an availability zone or availability set to get the most application resiliency.
*   Standard tier virtual machines, the Azure Load Balancer is included. 
*   Load balancer helps in increasing availability of website and application
*   Works at layer 4
*   It can also be used to balance the load to containers and PaaS applications
*   Global load balancing with Non-HTTPS as recommended traffic
*   Supports up to 1000 backend VMs
*     
    

## Azure Firewall

  

  

## Azure Firewall Manager

  

## Application Gateway

*   Works at layer 7
*   SSL termination
*   Cookie-based session affinity
*   Reginal load balancing with HTTPS as recommended traffic

  

  

## Traffic Manager

*   Works at layer 7, DNSs load balancer
*   Load balancer for geographically distributed datacenters
*   Uses DNS to redirect requests to an appropriate geographical location endpoint
*   It Does not see the traffic passing between the client and the service. It simply redirects the request based on the most appropriate endpoints
*   Best suitable for load between two endpoints where your first endpoint is in Azure and the second endpoint placed in an on-premise datacenter
*   Global LB with Non-HTTPS as recommended traffic

## Content Delivery Network (CDN)

*   Deliver pages and other Web content to a user, based on the geographic locations of the user, from nearest POP.

  

  

## Azure FrontDoor

*   Works at layer 7
*   Offers a single global entry point for customers accessing web apps, APIs, content, and cloud services. 
*   Global load balancing, but it is doing more by enhancing performance
*   Promptly connect to the nearest Front Door POP
*   Increase application availability with smart health probes
*   URL based routing
*   Cookie-based session affinity
*   SSL termination
*     
    

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpdVmtvrwu4U-vapB2DXhME-mgNG6OoA-OIdaKh3uP1rLJ4e-ezqSNbXqHA8JvlzrfCy-uKBsi-iBuBKDZBe-mVVtDu_kCXuBQzk6If1FZw4134GSgmfcCMQJyj39AzVmaJFXho1bZnMU/w400-h319/image.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpdVmtvrwu4U-vapB2DXhME-mgNG6OoA-OIdaKh3uP1rLJ4e-ezqSNbXqHA8JvlzrfCy-uKBsi-iBuBKDZBe-mVVtDu_kCXuBQzk6If1FZw4134GSgmfcCMQJyj39AzVmaJFXho1bZnMU/)

  
  

## Azure Bastian

*   Allows to connect to virtual machine without RDP port open

  

  

## Notes

*   DNS traffic always travel over UDP
*   When we update DNS servers in Azure Firewall, it will restart the attached virtual machines.
*   If the virtual machine doesn't have public IP address we can RDP to VM using the firewall's public IP.
