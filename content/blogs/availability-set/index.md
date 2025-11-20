---
title: "Availability Set"
slug: "availability-set"
date: "2023-11-28"
updated: "2023-11-28"
tags: ["Azure"]
summary: ""
---

An Azure Availability Set is a logical grouping of virtual machines (VMs) that allows Azure to understand how your application is built to provide for redundancy and availability. It is a way to improve the fault tolerance of your VMs by distributing them across multiple fault domains and update domains within an Azure region.

### Benefits of Availability Sets

Increased availability: By distributing VMs across multiple fault domains, you can minimize the risk of downtime caused by hardware failures.

Improved fault tolerance: If one fault domain fails, the remaining VMs in the Availability Set will continue to operate.

Simplified management: You can manage all of the VMs in an Availability Set as a single group.

### Cost of Availability Sets

There is no cost for the Availability Set itself. However, you will need to pay for the added VM instances. This is because you need to deploy at least two VMs in an Availability Set in order to take advantage of its fault tolerance capabilities.

### Fault Domain

A fault domain is a physical separation of VMs within an Azure region. This means that no hardware failure will disrupt both VMs in a fault domain. Fault domains are typically based on power grids and network switches. 

### Update Domain

An update domain is a group of VMs that can be updated independently. This means that Azure can update one update domain of VMs without affecting any of the other update domains. Update domains are typically based on software deployment groups. 

### How to Create an Availability Set

  

To create an Availability Set, follow these steps:

  

*   In the Azure portal, go to Virtual machines.
*   Select Add.
*   Under Availability options, select Availability set.
*   In the Name box, enter a name for the Availability Set.
*   Select the Region where you want to create the Availability Set.
*   Select the Fault domain count. This is the number of fault domains that you want to use. The maximum number of fault domains is 3.
*   Select the Update domain count. This is the number of update domains that you want to use. The maximum number of update domains is 5.
*   Select Review + create.
*   Review your settings and then select Create.

### How to Use an Availability Set

To use an Availability Set, you will need to deploy two or more VMs to the Availability Set. When you deploy a VM to an Availability Set, Azure will automatically distribute the VM across the fault domains and update domains within the Availability Set.

### Additional Considerations

Availability Sets do not protect against regional outages. If an entire Azure region experiences an outage, all of the VMs in that region will be unavailable.

To protect against regional outages, you can use Azure regions with Availability Zones.

Availability Sets are not supported for Azure VMs that are deployed to Azure Dedicated Hosts.

### Conclusion

Azure Availability Sets are a valuable tool for improving the fault tolerance and availability of your Azure VMs. By using Availability Sets, you can minimize the risk of downtime and ensure that your applications are always available to your users.
