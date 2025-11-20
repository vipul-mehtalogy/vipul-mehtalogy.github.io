---
title: "Create certificate signing request using openSSL"
slug: "create-certificate-signing-request-using-openssl"
date: "2020-03-20"
updated: "2021-02-26"
tags: ["CertificateSigningRequest","Cyber-Security","OpenSSL"]
summary: ""
---

## Create certificate signing request using OpenSSL

### Download & Install OpenSSL

*   Download OpenSSL from a trustable source, I downloaded from [https://slproweb.com/products/Win32OpenSSL.html](https://slproweb.com/products/Win32OpenSSL.html). Use [https://tecadmin.net/install-openssl-on-windows/](https://tecadmin.net/install-openssl-on-windows/) for detail steps.
*   Install from Exe or MSI
*   Set installed binary path in the environment's  variable.

### Prepare config file

You can pass all this information as command line parameter but using configuration file removes the complexity of dealing with UTF8 characters if there is any, in your subject details.

  

> \[req\]  
>   
> prompt = no  
> distinguished\_name = dn  
> req\_extensions = ext  
> \[dn\]  
>   
> CN = domain name # Site description  
> O = My company # My company  
> OU = My dept # My dept  
> L = Budigere, Bangalore # India  
> C = IN  
> \[ext\]  
>   
> subjectAltName = DNS:example.com,DNS:\*.example.com

  
Command to Generate Certificate Signing Request  

> openssl req -new -utf8 -nameopt multiline,utf8 -config your-url.cnf -newkey rsa:2048 -nodes -keyout your-url.key -out your-url.csr

### Review your CSR

*   Open CSR file in text editor (notepad, notepad++ etc.)
*   Copy whole text from the file
*   Open [https://www.entrust.net/ssl-technical/csr-viewer.cfm](https://www.entrust.net/ssl-technical/csr-viewer.cfm) and paste your content into the CSR Viewer box.

### Best Practices

*   Key size must be 2048 minimum
*   Always use -utf8 option with openssl to avoid issues with unicode characters (multi lingual support)
*   Signature algorithm must be sha256 or greater
*   Common name must be in lower case
*   Do not repeat common name value in the san entry field
*   Each time you run the command it creates a new keypair. After the certificate is signed both the certificate and the keypair will need to be updated on the server. So keep the generated key safely with you.
    
*   If you are generating a certificate for multiple domains configure them like below in config (.cnf) file. It improves readability. When the CSR is generated it gets concatenated.  
      
    
    > subjectAltName = @alt\_names \[alt\_names\]  
    > DNS.1 = domain1.app  
    > DNS.2 = domain2.app  
    > DNS.3 = domain3.app  
    > DNS.4 = domain4.app  
    > DNS.5 = domain5.app
    

### Command to convert certficate to PFX format

> openssl pkcs12 -export -out x.pfx -inkey x.key -in x.crt
