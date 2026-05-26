# Security Documentation

## Authentication & Authorization

- **No Hardcoded Credentials**: Passwords are verified using SHA-256 hashes via `authService.js`.
- **Session Management**: Sessions are abstracted in `authService`. Currently uses `localStorage` (simulated session) but designed to be swappable for HttpOnly cookies.
- **Route Protection**: All admin routes are protected by `ProtectedRoute` which checks for valid session and roles.

## Data Validation & Safety

- **Input Validation**: All data saving operations must pass Zod schema validation (`src/schemas/validation.js`).
- **XSS Prevention**: User content is rendered through `SafeHTML` component which uses `dompurify` to strip dangerous scripts.
- **Dependencies**: `dompurify` and `zod` are essential security dependencies.

## Development Guidelines

1. **Never commit secrets**: Use `.env` files (not committed) for sensitive keys.
2. **Use `SafeHTML`**: Never use `dangerouslySetInnerHTML` directly.
3. **Validate Inputs**: Always validate user input against a Zod schema before processing.
4. **Logging**: Use `logger` service, never `console.log` sensitive data.

## Incident Response

If a security issue is found:

1. Rotate any potentially exposed credentials.
2. Check logs (if available).
3. Patch vulnerabilities immediately.
