---
title: Deploy to Production
author: Mila
published_at: 2022/06/30 17:30:30
feature_image: /static/blog/how-to-install-mysql-shell-on-macos/mysql-mac.webp
tags: Education
---

**Latest release version:** [**%%bb_version%%**](https://github.com/bytebase/bytebase/releases/latest)

You have tried Bytebase via [quick start](../quick-start), now it's time to deploy it to production.

First, check [System Requirement and Support](/docs/faq#system-requirements-and-supported-versions).

There are four different ways to deploy Bytebase to production:

1. [Docker](deploy-with-docker)
2. [Deploy to Kubernetes](deploy-to-kubernetes)
3. [One-Liner Installation Script](installation-script)
4. [Build from Source Code](build-from-source-code)

By default, Bytebase bundles an embedded PostgreSQL instance for storing its own metadata. However, you can choose to store the metadata in [an external PostgreSQL database](/docs/get-started/install/external-postgres).
