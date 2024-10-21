import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-accent min-h-screen h-full">
      <div className="sm:h-screen min-h-screen flex flex-col w-full container mx-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
