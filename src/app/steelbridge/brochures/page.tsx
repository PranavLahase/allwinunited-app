import Link from "next/link"
import { ArrowLeft, Download, FileText, Eye } from "lucide-react"

export default function SteelbridgeBrochuresPage() {
    const brochures = [
        { title: "CNC Turning Centers — Full Range Catalog", category: "CNC Turning", pages: 24, size: "4.2 MB" },
        { title: "Vertical Machining Centers — VMC Series", category: "Vertical Machining", pages: 18, size: "3.8 MB" },
        { title: "Laser Welding Systems — Technical Overview", category: "Laser Welding", pages: 12, size: "2.5 MB" },
        { title: "Welding Automation & Robotics Catalog", category: "Automation", pages: 20, size: "5.1 MB" },
        { title: "SteelBridge Corporate Brochure 2026", category: "Corporate", pages: 8, size: "1.9 MB" },
        { title: "After-Sales Service & Support Plans", category: "Service", pages: 6, size: "1.2 MB" },
    ]

    return (
        <div className="w-full">

            {/* Header */}
            <div className="w-full bg-[#15181A] border-b border-white/10 pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <Link href="/steelbridge" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#BFC5CC] hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3">Technical Brochures</h1>
                    <p className="text-lg text-[#BFC5CC] font-light max-w-2xl">
                        Download detailed product catalogs and technical documentation. All brochures are available in PDF format.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

                {/* Grid of Brochures */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brochures.map((brochure, i) => (
                        <div key={i} className="group bg-[#15181A] border border-white/10 hover:border-[#1A3A5A] transition-all duration-300 flex flex-col">

                            {/* PDF Cover Placeholder */}
                            <div className="aspect-[3/4] bg-[#0E1A2B] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
                                <div className="flex flex-col items-center gap-4 z-10">
                                    <div className="w-16 h-16 border border-white/20 flex items-center justify-center">
                                        <FileText className="w-8 h-8 text-white/30" />
                                    </div>
                                    <span className="text-white/15 text-xs font-bold uppercase tracking-widest">PDF Preview</span>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-[#1A3A5A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20">
                                    <button className="w-12 h-12 bg-white flex items-center justify-center hover:bg-[#BFC5CC] transition-colors" title="Preview">
                                        <Eye className="w-5 h-5 text-[#0E1A2B]" />
                                    </button>
                                    <button className="w-12 h-12 bg-white flex items-center justify-center hover:bg-[#BFC5CC] transition-colors" title="Download">
                                        <Download className="w-5 h-5 text-[#0E1A2B]" />
                                    </button>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-[#1A3A5A] text-[10px] font-bold uppercase tracking-widest mb-2">{brochure.category}</p>
                                <h3 className="text-lg font-bold text-white mb-4 leading-snug flex-grow">{brochure.title}</h3>
                                <div className="flex items-center justify-between text-[#BFC5CC] text-xs font-medium border-t border-white/5 pt-4 mt-auto">
                                    <span>{brochure.pages} Pages</span>
                                    <span>{brochure.size}</span>
                                </div>
                            </div>

                            {/* Download Button */}
                            <div className="px-6 pb-6">
                                <button className="w-full h-12 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-[#0E1A2B] transition-colors flex items-center justify-center gap-2">
                                    <Download className="w-4 h-4" /> Download PDF
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
