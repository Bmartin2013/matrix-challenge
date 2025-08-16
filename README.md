This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.



***

## About ClearFlow

ClearFlow is a lightweight architectural pattern for React applications, designed to provide clarity, separation of concerns, and a predictable development flow.

Its goal is to help you focus on the functionality of your app while keeping cross-app utilities, conventions, and scaffolding well-organized.

Core Principles
1. Three-layer separation

ClearFlow splits responsibilities into three base layers:

Headless Hook

Pure logic and state management.

No UI.

Encapsulates business logic, derivations, and local state.

Presentational UI

Receives props clearly.

No business logic.

Strong defaults.

Always a pure component.

Orchestration Layer

Can be a Controller (thin wrapper) or a Layout/Wrapper.

Coordinates hooks + UI.

Merges defaults.

Defines data/interaction flows.

Additionally:

HOC (optional) → applies upgrades or transversal concerns (e.g. theming, logging, tracking).

2. Minimal and predictable API

Clear required props.

Optional props with solid defaults.

Single escape hatch for flexibility (renderItem, sx, etc.).

3. Conscious scalability

New behaviors → go to controller if specific to a view.

HOC if transversal to multiple views.

Local vs global state separated by naming/location.

Performance optimizations (debounce, memo, virtualization) can be added without breaking the API.

4. Low cognitive load

No hidden “slots” or magic.

Defaults applied by layer (resolveOptions).

Consistent naming patterns.

File & Naming Conventions

Kebab-case for filenames.

Use suffixes to clarify purpose:

*.hook.ts → headless hooks

*.ui.tsx → presentational components

*.controller.tsx → controllers

*.hoc.tsx → higher-order components

*.util.ts → pure utilities

Examples:

use-phrase-crud.hook.ts

phrase-card.ui.tsx

phrase-list.controller.tsx

with-logging.hoc.tsx

resolve-options.util.ts

Domain vs Cross-App Separation

Domain/ → App-specific functionality (services, providers, domain logic, feature-related utils).

Core/ (or equivalent) → Cross-app utilities (resolvers, normalizers, shared infra).

This separation ensures you can focus only on what your app does, while keeping transversal scaffolding clean and isolated.

Optional Conventions

Barrel exports in index.ts for utils/.

tsconfig.json paths for cleaner imports.

Factory functions (e.g. make-phrase-crud-provider.ts) when injection or customization is required.

Why ClearFlow?

Clarity: Each layer has a single purpose.

Scalability: Add complexity without collapsing structure.

Simplicity: Easy onboarding, low cognitive load.

Flexibility: Works for both small projects and growing apps.

✨ ClearFlow is not a heavy framework. It’s a lightweight map — giving you just enough structure to start fast, scale cleanly, and keep your mind on the product itself.
