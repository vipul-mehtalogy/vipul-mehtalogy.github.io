---
title: "Azure Storage Account"
slug: "azure-storage-account"
date: "2021-05-21"
updated: "2021-05-21"
tags: ["Azure","Azure-CLI"]
summary: ""
---

Storage can be used for 2 purpose

1.  To store files
2.  Backend to VM

By default, VM runs on a managed storage account

1.  Managed Storage Account: Abstraction over storage account.
2.  Unmanaged Storage Account

## Storage account properties

1.  Subscription
2.  Resource Group
3.  Name
4.  Location: Keep it close to your application or other PaaS services.
5.  Performance: SSD vs HDD. If you choose the Premium account type you can't choose the access tier. Chosen at the time of creation, can't be changed from later from hot to premium or cool to premium.
6.  Replication: 

1.  Locally Redundant Storage: up to 3 copies of files in the same data center.
2.  Geo Redundant Storage: 6 copies of files across 2 data center (within region pair, having fastest speed using fiber optic cable)
3.  Read access geo-redundant storage: Secondary endpoint only to read files.
4.  Zone redundant storage: across availability zone in the same region
5.  Geo zone redundant: across the data center in a different region
6.  Read access geo zone redundant: Secondary endpoint only to read files.

8.  Access Tier: Storage life cycle: Can change the access tier of the blob from the configuration tab. and object using their properties.

1.  Hot: Default
2.  Cool: half the file for storage but twice the price for access. Can be set for each file on storage.Minimum time period associated with each object. Even if you remove the object before that minimum time period you will be charged for at least that minimum perios. 30 days minimum period, if removed before 30 days early deletion charges will be applicable.
3.  Archive: Only applicable to object stored in blob storage. Should be used for very less accessible data as data retrieval (access) charges are too high but storage changes are 1/10 of hot. Most suitable for old backups. It takes a long time (hours) to retrieve the data. Data must remain to for at least 180 days, if removed before 180 days early deletion charges will be applicable. To read archived objects, first, rehydrate them to an online tier. Archive objects remain offline by default and not accessible but metadata remains online.

10.  Networking

1.  Public endpoint
2.  Public endpoint selected network - You need to attach a virtual network.
3.  Private endpoint

### Notes

1.  By default storage account endpoint exposed via HTTPS.
2.  By default soft delete is disabled on the storage account, when you enable it you can choose how long you want to retain deleted file so that recovery services can restore it back within a defined period (in days). as files are not getting deleted from storage so it will be charged for storage.
3.  Data Lake Storage Gen 2: Support for big data storage.

1.  You need to attach the Hadoop HDFS namespace

5.  Endpoint:

1.  We get 2 endpoints with the storage account

1.  Primary: NMaster endpoint
2.  Secondary: Read access endpoint

## Secure Your Storage

Secured via access keys. Azure provides 2 access keys with each account.  

1.  If you regenerate a key, the old key will not work.
2.  Use only one key at a time 
3.  The access key is not a recommended approach for the production environment. Use shared access signature instead.
4.  A shared access signature is a token that is signed by one of your keys and can be generated for individual services (Blob|File|Queue|Table), resource types(Services|Container|Object), with permission(read, write etc) along with a defined duration and whitelisted IP addresses.
5.  When you generate a token you get

1.  Connection string
2.  SAS Token
3.  Service URL

## Type of Storage

1.  Container (Blob Storage)

1.  Public Access level

1.  Private: require access keys or SAS token
2.  Blob: Allows anonymous access
3.  Public: Allows anonymous access

3.  Blob Type

1.  Block blob: default
2.  Page blob: When we want to update the file but not the entire file. Good for VM hard disk etc. 
3.  append blob: optimized for appending a file, like log files.

5.    
    

3.  File System (SMB File Share)
4.  Table (NoSQL data store)
5.  Queue (Messaging System)

## Pricing

early deletion charges applicable for hot and cool tier.

1.  Blocks

1.  depends on access tier & region
2.  Price include: storage cost + operation(read | write | list | retrival etc)
3.  additional data transfer cost if you opt for replication.

3.  Data Lake

1.  depends on file structure, redundancy, tier & region
2.  price = storage size + capacity reservation + No of transactions

5.  Managed Disks

1.  depends on tier, redundancy, access tier & region
2.  price = storage size + reservation + no of transactions
3.  additional sync price if you synchronize files from Windows Servers to Azure Files.

## Question

1.  How to get details of already generated SAS tokens?
