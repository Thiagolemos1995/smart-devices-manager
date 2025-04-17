export function authApi(path: string, init?: RequestInit) {
  const baseUrl = process.env.NEXT_PUBLIC_AUTH_BASE_URL;
  const url = new URL(path, baseUrl);

  return fetch(url, {
    ...init,
    method: "POST",
    cache: "no-store",
  });
}
