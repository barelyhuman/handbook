---
layout: layouts/base.njk
title: Security Checklist
description: ""
---

## Checklist

- Avoid the transfer of secrets over the network.
- Avoid storing secrets in the client app configs
- Use nonce’s and/or ephemeral tokens to decide and move through instructions between devices
- Add in some form of 2FA (TOTP, HOTP) for critical actions.
- When using logging services, make sure the log context and stack are masked if using a public log (ElasticSearch + LogStash = Log4j incident) 
- Add in a rate limiter for basic DOS attack
- Add in a rolling blacklist for IP’s to mitigate a DDOS (it’s for mitigation, cause it’s hardly ever avoidable)
- If possible add in a secure REDIR DNS provider, one of which is Cloudflare
- Make sure your compute instances aren’t exposed to the public network and are only accessible in the VPC / VPN area
