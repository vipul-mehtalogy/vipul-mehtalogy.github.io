---
title: "Broken Authentication attacks and mitigation"
slug: "broken-authentication-attacks-and-mitigation"
date: "2020-03-18"
updated: "2020-03-26"
tags: ["Authentication","OWASP","Cyber-Security"]
summary: ""
---

## Broken Authentication attacks and mitigation

  
Broken authentication & session management vulnerabilities are those in which the attacker exploits flaws to impersonate other users either through session hijacking, session manipulation or credential discovery.  
  
These flaws are the result of :  
  

*   Poor session control and isolation - Relying on IP address for session, inadequate timeout or inactive sessions.
*   weak password recovery - forgotten password functionality.
*   Data security at rest or while transmission - poor or no data encryption

### Mitigation / Best Practices

*   Use multi-factor authentication
*   Validate input from the user at the client as well as at the server-side.
*   Use TLS encryption (HTTPS) for web request and response
*   Encrypt sensitive data in datastore
*   Use HTTP post method while playing with sensitive information
*   Consider countermeasure for Bruteforce attack, credential harvesting.
*   Consider using proven third-party authentication providers rather implementing your own
*   Avoid default exception rendering by technology and platform and use generic error messages. Log detailed error/exception messages on the server and do not expose then to end-users. Error/exception information can be used by the attacker.
*   Avoid remember me functionality of login for high value / risky application
*   Keep session timeout as low as possible. Promote manual log out in the application. The idea is to avoid abrupt session termination or inactive sessions and terminate sessions gracefully.
*   Implement appropriate password policy (change password after a certain period, passwords length & complexity etc.)
*   Use strong session ID, do not share session id in URL or using HTTP get. Always generate new session id while login.
*   Never accept user-generated session id.
*   Use cookie best practices like httponly, non-persistent cookie etc.
*   Never use a self-signed certificate
