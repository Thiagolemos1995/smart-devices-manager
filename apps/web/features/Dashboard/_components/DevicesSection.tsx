"use client";

import { Device } from "@/lib/interfaces";
import { devicesService } from "@/services/devices";
import { DeviceCard } from "./DeviceCard";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export interface DevicesSectionProps {
  initialDevices: Device[];
  toggleDevice: (id: string) => void;
}

export function DevicesSection({
  initialDevices,
  toggleDevice,
}: DevicesSectionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [devices, setDevices] = useState<Device[]>(initialDevices);

  const removeDevice = async (id: string) => {
    try {
      setIsLoading(true);
      await devicesService.removeDevice(id);
      const devices = await devicesService.fetchDevices();
      setDevices(devices.data);
      toast.success("Device removed successfully");
    } catch (error) {
      toast.error("Failed to remove device");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <h1 className="text-xl font-medium">Devices</h1>

      {isLoading ? (
        <div className="flex w-full h-full justify-center items-center">
          <Loader2 className="w-16 h-16 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full h-fit">
          {devices.length > 0 ? (
            devices.map((device) => (
              <DeviceCard
                key={device.id}
                device={device}
                onToggle={() => toggleDevice(device.id)}
                onRemove={() => removeDevice(device.id)}
              />
            ))
          ) : (
            <div className="flex w-full h-full justify-center items-center col-span-full row-span-full">
              <p className="text-gray-500">No devices found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
