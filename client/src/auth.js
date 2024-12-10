import { createAuthProvider } from 'react-token-auth';

const authProvider = createAuthProvider({
    onUpdateToken: (token) => fetch('/auth/refresh', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refresh_token: token.refresh_token })
    })
    .then((r) => r.json())
});

export const useAuth = authProvider.useAuth;
export const authFetch = authProvider.authFetch;
export const login = authProvider.login;
export const logout = authProvider.logout;