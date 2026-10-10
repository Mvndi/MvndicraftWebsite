Copyright (c) 2026 Matthieu CLAESSENS. All rights reserved.

## Cloudflare Workers deployment

Connect this repository as a Worker named `mvndicraft-website` with the repository root as the root directory.

- Build command: `pnpm run build:cloudflare`
- Deploy command: `pnpm exec opennextjs-cloudflare deploy`

For local checks, run `pnpm run build:cloudflare`, then `pnpm exec opennextjs-cloudflare preview`.
To build and deploy from your machine, run `pnpm run deploy-cloudflare`.
