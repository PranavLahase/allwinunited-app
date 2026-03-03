import "../globals.css";
import { SteelbridgeNavbar } from "@/components/steelbridge/Navbar";

export const metadata = {
    title: 'SteelBridge — Industrial Machinery',
    description: 'Precision CNC machines, welding robots, and powerful industrial machinery.',
}

export default function SteelbridgeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div data-brand="steelbridge" className="min-h-screen bg-[var(--color-bg-steel)] text-white flex flex-col font-sans">
            <SteelbridgeNavbar />
            <main className="flex-grow pt-[80px]">
                {children}
            </main>
        </div>
    )
}
