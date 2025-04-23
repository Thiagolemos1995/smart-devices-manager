"use client";

import { Device } from "@/lib/interfaces";
import { DeviceCard } from "./DeviceCard";

export interface DevicesSectionProps {
  devices: Device[];
  toggleDevice: (id: string) => void;
}

export function DevicesSection({ devices, toggleDevice }: DevicesSectionProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-xl font-medium">Devices</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-4">
        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            device={device}
            onToggle={() => toggleDevice(device.id)}
          />
        ))}
      </div>
    </div>
  );
}
