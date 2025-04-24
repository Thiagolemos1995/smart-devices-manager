import Dashboard from "@/features/Dashboard";
import { devicesService } from "@/services/devices";

export default async function DashboardPage() {
  const devices = await devicesService.fetchDevices();

  return <Dashboard devices={devices} />;
}
