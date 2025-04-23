export interface Device {
  id: string;
  name: string;
  type: string;
  status: string;
  isActive: boolean;
  battery: number;
  power: number;
  temperature?: number;
  lastUpdated: string;
}
