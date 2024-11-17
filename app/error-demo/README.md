# Error Handling In NextJS

Error can be divided into two categories in NextJS,

- Expected Errors
- Uncaught Errors

## Expected Errors

> 	- occur during the normal operation such as *server-side form validation* or *failed requests*

- Can handle this error using `userFormState` or `useActionState` in react 19

## Uncaught Exceptions

> - unexpected errors that indicate bugs or issue that should not occur during the normal flow of application

- Can be handle using `error.js` in the specific route of app you want to caught error
- Use `global-error.js` in the `/app` to caught error for all routes

### Notes

- `error.tsx` and `global-error.tsx` must be *client* component
- `global-error.tsx` must define its own `<html>` & `<body>` tags because it sit at the root and `layout.tsx` in root
  has no effect on him.