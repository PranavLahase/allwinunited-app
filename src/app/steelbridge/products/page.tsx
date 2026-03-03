import Link from "next/link"
import { ArrowRight, ChevronRight, Settings } from "lucide-react"

export default function SteelbridgeMachinesPage() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24">

            {/* Header */}
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">Industrial Machinery</h1>
                <div className="w-20 h-1 bg-[#1A3A5A] mb-6" />
                <p className="text-xl text-[#BFC5CC] max-w-2xl font-light">
                    Explore our extensive catalog of high-performance CNC turning centers, vertical machining tools, and automated welding systems designed for peak efficiency.
                </p>
            </div>

            {/* Filters / Utility Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 pb-4 border-b border-white/10">
                <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto">
                    <button className="px-6 py-2 bg-white text-[#0E1A2B] font-bold uppercase text-xs tracking-wider whitespace-nowrap">
                        All Machines
                    </button>
                    <button className="px-6 py-2 border border-white/20 text-white font-bold uppercase text-xs tracking-wider whitespace-nowrap hover:bg-white/5 transition-colors">
                        CNC Turning
                    </button>
                    <button className="px-6 py-2 border border-white/20 text-white font-bold uppercase text-xs tracking-wider whitespace-nowrap hover:bg-white/5 transition-colors">
                        Vertical Machining
                    </button>
                    <button className="px-6 py-2 border border-white/20 text-white font-bold uppercase text-xs tracking-wider whitespace-nowrap hover:bg-white/5 transition-colors">
                        Laser Welding
                    </button>
                </div>
            </div>

            {/* Machines Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="group flex flex-col bg-[#15181A] border border-white/10 hover:border-[#1A3A5A] transition-colors">

                        {/* Image Box */}
                        <Link href={`/steelbridge/products/machine-${i}`} className="block relative aspect-[16/9] bg-[#0A121F] overflow-hidden flex items-center justify-center">
                            <div className="absolute top-4 left-4 bg-[#1A3A5A] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 z-10">
                                In Stock
                            </div>
                            <div className="text-white/10 font-bold uppercase tracking-widest z-0 flex items-center gap-2">
                                <Settings className="w-8 h-8 opacity-20" /> Machine Model {i}
                            </div>
                        </Link>

                        {/* Details Box */}
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="mb-4">
                                <p className="text-[#BFC5CC] text-xs font-bold uppercase tracking-wider mb-2">CNC Turning Center</p>
                                <Link href={`/steelbridge/products/machine-${i}`} className="block">
                                    <h3 className="text-2xl font-black text-white hover:text-[#BFC5CC] transition-colors line-clamp-1 uppercase tracking-tight">SB-TC{i}00 Series</h3>
                                </Link>
                            </div>

                            <p className="text-[#BFC5CC] text-sm leading-relaxed mb-8 flex-grow">
                                High rigidity box guideway design with advanced spindle technology for heavy-duty cutting applications.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto pt-6 border-t border-white/5">
                                <div className="text-left w-full sm:w-auto">
                                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Est. Starting Price</p>
                                    <p className="text-white font-bold text-xl">₹12,50,000</p>
                                </div>
                                <Link href={`/steelbridge/products/machine-${i}`} className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-bold uppercase tracking-wider text-sm hover:text-[#1A3A5A] transition-colors group/link p-3 bg-white/5 hover:bg-white rounded-none border border-white/20">
                                    View Specs <ChevronRight className="w-4 h-4 text-white group-hover/link:text-[#1A3A5A]" />
                                </Link>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}
