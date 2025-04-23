"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Device } from "@/lib/interfaces";
import { DeviceStats } from "./_components/DeviceStats";
import { DevicesSection } from "./_components/DevicesSection";
import { useState } from "react";

const devices: Device[] = [
  {
    id: "device-1",
    name: "Living Room Thermostat",
    type: "thermostat",
    status: "online",
    isActive: true,
    battery: 85,
    power: 4,
    temperature: 22,
    lastUpdated: "2 mins ago",
  },
  {
    id: "device-2",
    name: "Kitchen Smart Light",
    type: "light",
    status: "online",
    isActive: true,
    battery: 100,
    power: 8,
    lastUpdated: "5 mins ago",
  },
  {
    id: "device-3",
    name: "Bedroom Speaker",
    type: "speaker",
    status: "offline",
    isActive: false,
    battery: 0,
    power: 0,
    lastUpdated: "2 days ago",
  },
  {
    id: "device-4",
    name: "Bathroom Thermostat",
    type: "thermostat",
    status: "online",
    isActive: true,
    battery: 72,
    power: 4,
    temperature: 24,
    lastUpdated: "10 mins ago",
  },
  {
    id: "device-5",
    name: "Front Door Lock",
    type: "lock",
    status: "warning",
    isActive: true,
    battery: 15,
    power: 2,
    lastUpdated: "1 hour ago",
  },
  {
    id: "device-6",
    name: "Garage Door Opener",
    type: "opener",
    status: "online",
    isActive: false,
    battery: 65,
    power: 0,
    lastUpdated: "3 hours ago",
  },
  {
    id: "device-7",
    name: "Garage Door Opener",
    type: "opener",
    status: "online",
    isActive: false,
    battery: 65,
    power: 0,
    lastUpdated: "3 hours ago",
  },
  {
    id: "device-8",
    name: "Garage Door Opener",
    type: "opener",
    status: "online",
    isActive: false,
    battery: 65,
    power: 0,
    lastUpdated: "3 hours ago",
  },
  {
    id: "device-9",
    name: "Garage Door Opener",
    type: "opener",
    status: "online",
    isActive: false,
    battery: 65,
    power: 0,
    lastUpdated: "3 hours ago",
  },
  {
    id: "device-10",
    name: "Garage Door Opener",
    type: "opener",
    status: "online",
    isActive: false,
    battery: 65,
    power: 0,
    lastUpdated: "3 hours ago",
  },
];

export default function Dashboard() {
  const [devicesData, setDevicesData] = useState(devices);

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
          <Button variant="outline" className="cursor-pointer">
            <Plus className="w-4 h-4" />
            Add Device
          </Button>
        </div>
      </div>

      <div id="content" className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-medium">Stats</h1>
          <DeviceStats devices={devicesData} />
        </div>

        <DevicesSection devices={devicesData} toggleDevice={toggleDevice} />
      </div>
    </div>
  );
}
