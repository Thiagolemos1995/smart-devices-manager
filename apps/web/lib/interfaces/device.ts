export interface Device {
  id: string;
  name: string;
  type: string;
  status: string;
  isActive: boolean;
  battery: number;
  power: number;
  temperature?: number;
  updatedAt: string;
}

export interface DeviceResponse {
  data: Device[];
  metadata: {
    count: number;
    order: string;
    skip: number;
    take: number;
  };
}
