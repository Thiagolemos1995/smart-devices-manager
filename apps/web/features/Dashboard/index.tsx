"use client";

import { Device, DeviceResponse } from "@/lib/interfaces";
import { DeviceStats } from "./_components/DeviceStats";
import { DevicesSection } from "./_components/DevicesSection";
import { useState } from "react";
import { NewDeviceDialog } from "./_components/NewDeviceDialog";

interface DashboardProps {
  devices: DeviceResponse;
}

export default function Dashboard({ devices }: DashboardProps) {
  const [devicesData, setDevicesData] = useState<Device[]>(devices.data);

  const toggleDevice = (id: string) => {
    setDevicesData(
      devicesData.map((device) =>
        device.id === id ? { ...device, isActive: !device.isActive } : device
      )
    );
  };

  return (
    <div className="flex flex-col grow gap-8">
      <div id="title" className="flex">
        <h1 className="text-2xl font-bold tracking-tighter select-none">
          Dashboard
        </h1>
        <div className="flex gap-2 ml-auto">
          <NewDeviceDialog />
        </div>
      </div>

      <div id="content" className="flex flex-col gap-4 h-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-medium">Stats</h1>
          <DeviceStats devices={devicesData} />
        </div>

        <DevicesSection
          initialDevices={devicesData}
          toggleDevice={toggleDevice}
        />
      </div>
    </div>
  );
}
