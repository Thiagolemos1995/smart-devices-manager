import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Device } from "@/lib/interfaces";
import { Battery, Power, Signal, Thermometer } from "lucide-react";

export interface DeviceStatsProps {
  devices: Device[];
}

export function DeviceStats({ devices }: DeviceStatsProps) {
  const activeDevices = devices.filter((device) => device.isActive).length;
  const totalDevices = devices.length;
  const activePercentage = Math.round((activeDevices / totalDevices) * 100);

  const totalPower = devices
    .filter((device) => device.isActive)
    .reduce((sum, device) => sum + device.power, 0);

  const averageBattery = Math.round(
    devices.reduce((sum, device) => sum + device.battery, 0) / devices.length
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
          <Signal className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {activeDevices} / {totalDevices}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {activePercentage}% of devices are active
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Power Usage</CardTitle>
          <Power className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalPower}W</div>
          <p className="text-xs text-gray-500 mt-1">
            Total consumption of active devices
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Avg. Battery</CardTitle>
          <Battery className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{averageBattery}%</div>
          <p className="text-xs text-gray-500 mt-1">
            Average battery level of all devices
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Avg. Temperature
          </CardTitle>
          <Thermometer className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {Math.round(
              devices
                .filter((device) => device.type === "thermostat")
                .reduce((sum, device) => sum + device.temperature!, 0) /
                devices.filter((device) => device.type === "thermostat").length
            )}
            °
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Average temperature of thermostats
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
