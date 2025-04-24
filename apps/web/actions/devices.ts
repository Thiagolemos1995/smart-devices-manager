"use server";

import { DeviceFormState, CreateDeviceRequestSchema } from "@/lib/types";
import { devicesService } from "@/services/devices";
import { redirect } from "next/navigation";

export async function createDevice(
  state: DeviceFormState,
  formData: FormData
): Promise<DeviceFormState> {
  if (formData.get("type") !== "thermostat" && formData.get("temperature")) {
    return {
      error: {
        temperature: ["This device does not support temperature"],
      },
    };
  }

  const validatedFields = CreateDeviceRequestSchema.safeParse({
    name: formData.get("name"),
    type: formData.get("type"),
    status: formData.get("status"),
    isActive: true,
    battery: Number(formData.get("battery")),
    power: Number(formData.get("power")),
    temperature: Number(formData.get("temperature")),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  const { name, type, status, isActive, battery, power, temperature } =
    validatedFields.data;

  try {
    await devicesService.registerDevice({
      name,
      type,
      status,
      isActive,
      battery,
      power,
      temperature,
    });
  } catch (error: unknown) {
    console.error(error);
    return {
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
  redirect("/dashboard");
}
