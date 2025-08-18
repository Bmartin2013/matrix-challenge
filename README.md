# React Matrix Challenge

React Matrix Challenge – CRD (there is no update) app for phrases with real-time search, responsive grid, validations, and global state using Zustand. Built following the ClearFlow architecture: separation of domain logic (headless hooks), presentational UI, and orchestration (layout/controller).

## Demo

<img width="1912" height="980" alt="image" src="https://github.com/user-attachments/assets/55a064fd-9a66-426e-8c41-c223b85cd362" />

<img width="1912" height="980" alt="image" src="https://github.com/user-attachments/assets/0b8041c8-8d6a-4d65-97f9-9163ba0522aa" />


#### Live demo [here](https://matrix-challenge-ten.vercel.app/)

## Tech Stack & Features

Stack: React + TypeScript, NextJS, Zustand, MUI, Framer Motion, Jest + Testing Library.

_Key Features:_

- Add / list / delete phrases.

- Search with debounce and normalization (case-insensitive, diacritics-insensitive … except “ñ”).

- Validation rules (min/max length, empty, duplicates).

- Responsive card grid with CSS Grid + auto-fit.

- Loading, error, and empty states; error handling per action (add/delete).

## Getting Started

```
# install
npm i

# run in dev mode
npm run dev

# run tests
npm run test          # watch mode
npm run test:ci       # no watch + coverage

# lint / build
npm run lint
npm run build
```

---

## Folder Structure

```
src/
  domain/                 # pure contracts and validations (no UI deps)
    entities/             # domain models
    interfaces/           # ports
    validators/           # rules + headless hooks (e.g., usePhraseForm)
    utils/                # normalize-string, etc.
  features/phraseCRUD/
    components/           # presentational UI only
    hooks/                # usePhraseCrud (interacts with store)
    layouts/              # orchestration (acts as thin controller)
    stores/               # Zustand store for this feature
    utils/                # helpers (render-with-states, etc.)
    infrastructure/       # client/provider implementations (if any)
  shared/                 # cross-feature HOCs, hooks, helpers
  test-utils/             # renderWithTheme, fixtures, setup

```

## Architecture: ClearFlow (designed by me)

- Layout/Controller: orchestrates hooks, passes props, defines flows (submit, delete, search).

- Headless hooks (domain): logic/state without UI (e.g., usePhraseForm → validation, trim, error handling).

- Presentational components: pure UI, no business logic (MUI-driven).

- Global state: Zustand per feature (phrase-crud.store.ts). Atomic actions; error state per operation (errorAdd, errorDelete).

- Normalization: normalizeString (lowercase, trim, remove diacritics, preserve “ñ”).

- Debounce: useDebouncedValue in search.

- Optional HOCs: could wrap for latency or debounce, but hooks used for simplicity.

- Benefits: high testability (unit + component tests), clear separation of concerns, scalable structure.

## Design Decisions

- Zustand vs Context/Redux: chose Zustand for simplicity and ergonomics (direct actions, minimal boilerplate).

- Two-layer validation:

- UI-level (headless hook) → instant feedback.

- Store-level → “safety net” before persisting.

- Persistence: LocalStorage for the challenge; can easily swap with a real API.

- Normalization: accents and casing ignored; ñ vs n preserved.

- Framer Motion: subtle animations for mount/unmount.

## Error Handling

- renderWithStates → handles loading, error, empty states at layout level.

- Errors scoped to operations:

    - Add → errorAdd → shown in NewCardForm helperText.

    - Delete → errorDelete → shown inside CardItem + sticky bottom alert for visibility.

## Performance & UX

- useMemo for filtered list.

- React.memo for cards and items.

- Debounced search input.

- CSS Grid auto-fit for responsive layout.

- Accessibility: proper labels, roles, helperText, disabled/aria-busy attributes.

## Testing

*Unit tests:*

- normalizeString → trims, lowercases, removes accents (but keeps ñ).

- validatePhrase → empty, min/max length, duplicates.

*Component tests:*

- NewCardForm: disabled button, errors, submit behavior, store error propagation.

- CardMatrix: renders cards, shows empty state, triggers delete.

- SearchBar: onChange events, disabled behavior.

Run with:

```
npm run test          # watch mode
npm run test:ci       # no watch + coverage
```

## Future Roadmap

- Real API integration + complete infrastructure/ layer (clients, mappers).

- Pagination or infinite scroll.

- Internationalization (i18n).

- Dark mode theme.

- More robust optimistic updates with retries.

- Accessibility improvements (keyboard shortcuts, focus management).

- Update card feature

## License / Author

MIT — Barbara Carolina Martinez / [LinkedIn](https://www.linkedin.com/in/barbaracmartinez) / [Email](mailto:barcmartinez@gmail.com)
