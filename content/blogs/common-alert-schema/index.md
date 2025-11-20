---
title: "Common Alert Schema"
slug: "common-alert-schema"
date: "2023-11-28"
updated: "2023-11-28"
tags: ["Azure"]
summary: ""
---

The Common Alert Schema (CAS) is a standardized format for alert notifications in Azure Monitor, designed to simplify the integration and consumption of alerts across different tools and platforms. By adopting the CAS, organizations can reduce the complexity of managing and maintaining alert integrations, as well as benefit from future enhancements to alert payloads.

## Benefits of Common Alert Schema:

*   Reduced Integration Complexity: The CAS provides a unified format for alert notifications, eliminating the need to adapt to different alert payload structures from various Azure services. This simplifies the integration process and reduces the overhead associated with managing multiple integrations.
*   Enhanced Consumption Experience: The CAS ensures consistent and structured alert payloads, making it easier for different tools and platforms to consume and interpret alerts. This improves the overall alert consumption experience and enables more efficient analysis and response.
*   Future-Proof Alert Payloads: The CAS is designed to accommodate future enhancements to alert payloads, such as additional data fields or customization options. This ensures that organizations will benefit from these enhancements without requiring changes to their existing integrations.

## Key Features of Common Alert Schema:

*   Standardized Format: The CAS adheres to a standardized JSON format, making it easy to parse and interpret by various tools and platforms.
*   Core Data Fields: The CAS defines a set of core data fields that are common to all alerts, providing essential information about the event, such as time, severity, and entity details.
*   Customizable Extensions: The CAS supports customizable extensions to accommodate specific requirements or additional data fields beyond the core schema.

Overall, the Common Alert Schema simplifies alert management, enhances alert consumption, and ensures future-proof alert payloads for Azure Monitor users.
