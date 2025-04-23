import AppBar from "@/components/ui/appBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-gray-100">
      <AppBar />
      <div className="flex flex-col grow w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
