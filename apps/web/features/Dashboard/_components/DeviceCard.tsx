"use client";

import {
  Battery,
  Power,
  Signal,
  Thermometer,
  Smartphone,
  Cctv,
  Lightbulb,
  Speaker,
  LockIcon,
  Trash2Icon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Device } from "@/lib/interfaces";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";

interface DeviceCardProps {
  device: Device;
  onToggle: () => void;
  onRemove: () => void;
}

export function DeviceCard({ device, onToggle, onRemove }: DeviceCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-green-500";
      case "offline":
        return "text-gray-400";
      case "warning":
        return "text-amber-500";
      case "error":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "thermostat":
        return <Thermometer className="h-6 w-6" />;
      case "camera":
        return <Cctv className="h-6 w-6" />;
      case "light":
        return <Lightbulb className="h-6 w-6" />;
      case "speaker":
        return <Speaker className="h-6 w-6" />;
      case "opener":
        return <LockIcon className="h-6 w-6" />;
      default:
        return <Smartphone className="h-6 w-6" />;
    }
  };

  return (
    <Card className="overflow-hidden h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <div
              className={`p-2 rounded-md bg-gray-100 dark:bg-gray-800 ${device.isActive ? "text-primary" : "text-gray-500"}`}
            >
              {getDeviceIcon(device.type)}
            </div>
            <div>
              <CardTitle className="text-base">{device.name}</CardTitle>
              <div className="flex items-center mt-1 text-xs">
                <Signal
                  className={`h-3 w-3 mr-1 ${getStatusColor(device.status)}`}
                />
                <span className="capitalize">{device.status}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Switch checked={device.isActive} onCheckedChange={onToggle} />
            <Button
              variant="ghost"
              size="icon"
              onClick={onRemove}
              className="cursor-pointer"
            >
              <Trash2Icon />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-full">
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="flex items-center text-sm">
            <Battery className="h-4 w-4 mr-2 text-gray-500" />
            <span>{device.battery}%</span>
          </div>
          <div className="flex items-center text-sm">
            <Power className="h-4 w-4 mr-2 text-gray-500" />
            <span>{device.power}W</span>
          </div>
        </div>

        {device.type === "thermostat" && (
          <div className="mt-4 text-center">
            <span className="text-3xl font-semibold">
              {device.temperature}°
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4 text-xs text-gray-500">
        Last updated: {dayjs(device.updatedAt).format("DD/MM/YYYY HH:mm")}
      </CardFooter>
    </Card>
  );
}
