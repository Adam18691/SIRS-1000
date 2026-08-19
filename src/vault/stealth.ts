export const stealthFetch = (url:string) => fetch(url, { headers: { "X-SIRS-Ring": "gold", "X-Vault": "suleimani" }})
