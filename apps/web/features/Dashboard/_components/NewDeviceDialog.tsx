"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { deviceTypes, deviceStatus } from "@/lib/consts";
import { useActionState } from "react";
import { createDevice } from "@/actions/devices";
import { useState } from "react";

export function NewDeviceDialog() {
  const [selectedType, setSelectedType] = useState("");
  const [state, formAction, isPending] = useActionState(
    createDevice,
    undefined
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="w-4 h-4" />
          Add Device
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Device</DialogTitle>
        </DialogHeader>
        <DialogDescription>Add a new device to your account.</DialogDescription>

        <form action={formAction}>
          {state?.message && (
            <div className="flex flex-col gap-2 bg-gray-100 p-4 rounded-md text-center">
              <p className="text-sm text-gray-700 font-bold">{state.message}</p>
            </div>
          )}
          <div className="grid gap-4 py-4">
            <p className="text-md font-medium text-gray-500">
              Device Information
            </p>
            <Separator />

            <div className="grid gap-2">
              <Label>Name</Label>
              <Input placeholder="Device Name" name="name" />
              {state?.error?.name && (
                <p className="text-sm text-red-500 font-bold">
                  {state.error.name.join(", ")}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label>Type</Label>
              <Select name="type" onValueChange={setSelectedType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a device type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {deviceTypes().map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {state?.error?.type && (
                <p className="text-sm text-red-500 font-bold">
                  {state.error.type.join(", ")}
                </p>
              )}
            </div>

            <p className="text-md font-medium text-gray-500">
              Device Data (just for simulation)
            </p>
            <Separator />

            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-2">
                <Label>Status</Label>
                <Select name="status">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a device status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {deviceStatus().map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {state?.error?.status && (
                  <p className="text-sm text-red-500 font-bold">
                    {state.error.status.join(", ")}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Battery</Label>
                <Input
                  min={0}
                  max={100}
                  placeholder="Device Battery"
                  name="battery"
                />
                {state?.error?.battery && (
                  <p className="text-sm text-red-500 font-bold">
                    {state.error.battery.join(", ")}
                  </p>
                )}
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Power</Label>
              <Input min={0} placeholder="Device Power" name="power" />
              {state?.error?.power && (
                <p className="text-sm text-red-500 font-bold">
                  {state.error.power.join(", ")}
                </p>
              )}
            </div>

            {selectedType === "thermostat" && (
              <div className="grid gap-2">
                <Label>Temperature</Label>
                <Input placeholder="Device Temperature" name="temperature" />
                {state?.error?.temperature && (
                  <p className="text-sm text-red-500 font-bold">
                    {state.error.temperature.join(", ")}
                  </p>
                )}
              </div>
            )}
          </div>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Adding..." : "Add Device"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
