---
title: "Heredoc or NowDoc Syntax"
slug: "heredoc-or-nowdoc-syntax"
date: "2020-11-14"
updated: "2020-11-14"
tags: ["file","string","heredoc"]
summary: ""
---

*   Heredoc syntax: <<<. After this operator, an identifier is provided, then a newline. The string itself follows, and then the same identifier again to close the quotation.
*   The closing identifier must begin in the first column of the line.
*   It is very important to note that the line with the closing identifier must contain no other characters, except a semicolon (;). That means especially that the identifier may not be indented, and there may not be any spaces or tabs before or after the semicolon.
