import "../globals.css";
import { PamoNavbar } from "@/components/pamo/Navbar";

export const metadata = {
    title: 'PAMO — Trending Gadgets & Lifestyle',
    description: 'Discover your next favorite gadget at PAMO.',
}

export default function PamoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div data-brand="pamo" className="min-h-screen bg-[var(--color-bg-pamo)] flex flex-col font-sans">
            <PamoNavbar />
            <main className="flex-grow pt-[72px]">
                {children}
            </main>
            {/* PAMO Footer will go here */}
        </div>
    )
}
