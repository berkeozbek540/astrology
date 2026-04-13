import AdminSidebar from "@/components/admin/AdminSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto p-8 mt-16">{children}</main>
    </div>
  );
}
