# React Project Structure Prompt

Create a React application using **Feature-Based Architecture**.

## Architecture

Use the following folder structure:

```text
src/
├── main.jsx
├── App.jsx
│
├── router/
│   └── index.jsx
│
├── core/
│   ├── api/
│   │   └── axios.js
│   ├── constants/
│   └── utils/
│
├── features/
│   ├── auth/
│   │   ├── pages/
│   │   │   └── LoginPage.jsx
│   │   ├── components/
│   │   │   └── LoginForm.jsx
│   │   ├── services/
│   │   │   └── authService.js
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   └── store/
│   │       └── authStore.js
│   │
│   └── users/
│       ├── pages/
│       ├── components/
│       ├── services/
│       ├── hooks/
│       └── store/
│
└── shared/
    ├── components/
    └── hooks/
```

## Architecture Mapping

Use this mapping:

- **Model** → Data / Types
- **View** → React Components
- **Controller** → Hooks / Store Actions
- **Service** → API Services

## Application Flow

Follow this flow:

```text
Component (View)
      ↓
Hook / Store Action
      ↓
Service (API Call)
      ↓
Update State
      ↓
Component Re-render
```

## Technical Requirements

Use:

- React
- React Router
- Axios
- Zustand for global state management
- TanStack Query for server/API state
- Feature-based folder structure
- Reusable shared components
- Custom hooks
- Service layer for API calls

## Rules

1. Do not call Axios directly inside React components.
2. API calls must be placed inside `services/`.
3. Business logic should be placed inside custom hooks or store actions.
4. Pages should mainly handle layout and composition.
5. Reusable UI components should be placed inside `shared/components/`.
6. Feature-specific components must stay inside their respective feature folders.
7. Global Axios configuration must be inside:

```text
src/core/api/axios.js
```

8. Routing configuration must be inside:

```text
src/router/index.jsx
```

9. Authentication state must be handled using:

```text
features/auth/store/authStore.js
```

10. Authentication-related API calls must be handled inside:

```text
features/auth/services/authService.js
```

## Authentication Example

Create an authentication module containing:

```text
features/auth/
├── pages/
│   └── LoginPage.jsx
├── components/
│   └── LoginForm.jsx
├── services/
│   └── authService.js
├── hooks/
│   └── useAuth.js
└── store/
    └── authStore.js
```

The login flow should be:

```text
LoginPage
   ↓
LoginForm
   ↓
useAuth
   ↓
authService
   ↓
Axios API
   ↓
authStore
   ↓
Redirect / Re-render
```

## Expected Output

Generate:

1. Complete folder structure.
2. Required npm packages.
3. Axios configuration.
4. React Router configuration.
5. Zustand authentication store.
6. Authentication service.
7. `useAuth` custom hook.
8. Login page.
9. Login form.
10. Example protected route.
11. Example users feature.
12. Clean and maintainable code.

Do not put all logic inside components.

Follow the architecture strictly.
