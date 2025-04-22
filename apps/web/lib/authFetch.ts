import { refreshToken } from "@/actions/auth";
import { getSession } from "./session";

interface AuthFetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function authFetch(
  url: string | URL,
  options: AuthFetchOptions = {}
) {
  const session = await getSession();

  if (!session) {
    throw new Error("Invalid session");
  }

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${session.accessToken}`,
  };
  const response = await fetch(url, {
    ...options,
    method: options.method || "GET",
  });

  if (response.status === 401) {
    if (!session.refreshToken) throw new Error("Refresh token not found");

    const newAccessToken = await refreshToken(session.refreshToken);

    if (newAccessToken) {
      options.headers.Authorization = `Bearer ${newAccessToken}`;

      return authFetch(url, options);
    }
  }

  return response;
}
