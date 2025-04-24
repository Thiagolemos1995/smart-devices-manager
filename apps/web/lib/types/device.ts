import { z } from "zod";

export type DeviceFormState =
  | {
      error?: {
        name?: string[];
        type?: string[];
        status?: string[];
        battery?: string[];
        power?: string[];
        temperature?: string[];
      };
      message?: string;
    }
  | undefined;

export const CreateDeviceRequestSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).trim(),
  type: z.string().min(1, { message: "Type is required" }).trim(),
  status: z.string().min(1, { message: "Status is required" }).trim(),
  isActive: z.boolean().default(true),
  battery: z.number().min(0, { message: "Battery must be greater than 0" }),
  power: z.number().min(0, { message: "Power must be greater than 0" }),
  temperature: z.number().optional(),
});

export type CreateDeviceRequest = z.infer<typeof CreateDeviceRequestSchema>;
