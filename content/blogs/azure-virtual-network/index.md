---
title: "Azure Virtual Network"
slug: "azure-virtual-network"
date: "2021-05-21"
updated: "2021-05-21"
tags: ["Azure","Networking"]
summary: ""
---

# Virtual Network

Create a logically isolated network on Azure cloud. Allows to securely connect it to on-premises data centers or a single machine using an IPsec connection. 

*   Does not cost anything
*   Extend data center in the cloud
*   Build distributed applications
*   Remotely debug applications

Create Virtual Netowrk

*   Need to add to a subscription, resource group assign a name, and region
*   virtual network has a range of IP address, we need to specify a fixed range of IP address using [CIDR](/2020/11/what-is-cidr.html) notations. 
*   Virtual networks required a minimum of one subnet. a subnet is a division inside the IP address range. 

## Virtual network to virtual network connection

*   Devices connected to one virtual network will not be able to connect with devices in another virtual network. There is no vnet to vnet connection by default.
*   Communication can be possible via a network gateway. network gateway is a site-to-site VPN. It is a virtual device. It encrypts the traffic between vnets through a tunnel. 
*   Create a virtual network gateway

*   Choose a subscription, region, gateway type (VPN| ExpressRoute), VPN type (route based | policy-based), sku, vnet, choose public IP address.
*   Creation on virtual network gateways takes up to 45-60 min.
*   Each virtual network will need a separate Virtual Network Gateway.

*   Establish site to site connection between vnets

*   Go to virtual network gateway --> Settings --> Connections --> Add
*   Assign name, vnet 1 & vnet 2, IKE protocol (IKEv1 | IKEv2)
*   shared key: used to establish encryption for the connection. Should be the same on both virtual networks.

*   Pricing: based on the amount of time the gateway is provisioned and avaialable. data transfer inbound is free, outbound data transfer is chargable.

## Virtual Network peering

*   Go to virtual network --> Settings --> Peerings --> Add
*   Assign name, subscription, another vnet for peering, traffic direction, and forwarding 
*   Peering is suitable for the cloud to cloud vnet connection.
*   Charged only for outbound data transfer.
*   Enable traffic farwording
*   Save the cost of network gateway
*   Quick and easy
