import AppBar from "@/components/ui/appBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <AppBar />
      <div className="flex flex-col grow w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
