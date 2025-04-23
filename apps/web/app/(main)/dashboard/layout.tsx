export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col grow my-4 mx-2 md:mx-4 lg:mx-6 xl:mx-8">
      {children}
    </div>
  );
}
