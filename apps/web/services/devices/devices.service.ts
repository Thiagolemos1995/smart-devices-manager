import { authFetch } from "@/lib/authFetch";
import { Device } from "@/lib/interfaces";
import { CreateDeviceRequest } from "@/lib/types/device";

const baseUrl = process.env.NEXT_PUBLIC_DEVICES_BASE_URL;

export const devicesService = {
  fetchDevices: async (
    order: "asc" | "desc" = "asc",
    skip: number = 0,
    limit: number = 10
  ) => {
    const response = await authFetch(
      `${baseUrl}?order=${order}&skip=${skip}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch devices, ${response.statusText}`);
    }

    return response.json();
  },

  fetchDevice: async (id: string) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch device, ${response.statusText}`);
    }
    return response.json();
  },

  registerDevice: async (device: CreateDeviceRequest) => {
    const response = await authFetch(`${baseUrl}/register`, {
      method: "POST",
      body: JSON.stringify(device),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to register device, ${response.statusText}`);
    }
    return response.json();
  },

  updateDevice: async (id: string, device: Device) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      body: JSON.stringify(device),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to update device, ${response.statusText}`);
    }
    return response.json();
  },

  removeDevice: async (id: string) => {
    const response = await authFetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to remove device, ${response.statusText}`);
    }

    return response;
  },
};
