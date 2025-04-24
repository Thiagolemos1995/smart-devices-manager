export const deviceStatus = (): { value: string; name: string }[] => [
  {
    value: "online",
    name: "Online",
  },
  {
    value: "offline",
    name: "Offline",
  },
  {
    value: "error",
    name: "Error",
  },
  {
    value: "warning",
    name: "Warning",
  },
];
