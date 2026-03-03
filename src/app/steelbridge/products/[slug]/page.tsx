import Link from "next/link"
import { ArrowLeft, Check, FileText, Play, Anchor } from "lucide-react"

export default function SteelbridgeMachineDetail({ params }: { params: { slug: string } }) {
    return (
        <div className="w-full">

            {/* Header / Breadcrumb Area */}
            <div className="w-full bg-[#15181A] border-b border-white/10 pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <Link href="/steelbridge/products" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#BFC5CC] hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Catalog
                    </Link>
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                        <div>
                            <p className="text-[#BFC5CC] text-sm font-bold uppercase tracking-widest mb-2 border-l-2 border-[#1A3A5A] pl-3">CNC Turning Center</p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">SB-TC500 Series</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/steelbridge/brochures" className="h-12 px-6 flex items-center justify-center gap-2 border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
                                <FileText className="w-4 h-4" /> Tech Specs PDF
                            </Link>
                            <Link href="/steelbridge/quote" className="btn-primary-steel h-12 flex items-center justify-center">
                                Request Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Main Content: Gallery & Info */}
                    <div className="w-full lg:w-2/3 space-y-12">

                        {/* Gallery / Video */}
                        <div className="aspect-[16/9] w-full bg-[#0E1A2B] border border-white/10 relative overflow-hidden group flex items-center justify-center">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                            <button className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-[#0E1A2B] text-white transition-all z-10">
                                <Play className="w-8 h-8 ml-1" />
                            </button>
                            <div className="absolute text-white/20 font-black uppercase tracking-widest text-2xl z-0">
                                Machine Demo Video
                            </div>
                        </div>

                        {/* Overview */}
                        <div>
                            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                <Anchor className="w-6 h-6 text-[#1A3A5A]" /> Product Overview
                            </h2>
                            <p className="text-[#BFC5CC] text-lg leading-relaxed mb-6 font-light">
                                The SB-TC500 Series is engineered for maximum rigidity and precision. Featuring a solid cast iron bed with box guideways, it absorbs heavy cutting vibrations effortlessly. Designed for continuous production environments, this machine ensures high surface finish and tight tolerances on every cut.
                            </p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {["High Rigidity Cast Iron Bed", "Precision Spindle Bearing", "Fanuc/Siemens Controller Options", "Automatic Lubrication System", "12-Station Tool Turret", "Tailstock with live center"].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white">
                                        <div className="mt-1 bg-[#1A3A5A] rounded-sm p-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="font-medium text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Sidebar Specifications */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-[#15181A] border border-white/10 p-6 lg:p-8 lg:sticky lg:top-24">
                            <h2 className="text-xl font-black text-white uppercase tracking-tight mb-6">Technical Specs</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    { label: "Max Turning Dia", val: "350 mm" },
                                    { label: "Max Turning Length", val: "500 mm" },
                                    { label: "Spindle Speed", val: "4000 RPM" },
                                    { label: "Spindle Motor", val: "11/15 kW" },
                                    { label: "Chuck Size", val: "8 inch" },
                                    { label: "Machine Weight", val: "4500 kg" },
                                ].map((spec, i) => (
                                    <div key={i} className="flex flex-col py-2 border-b border-white/5 last:border-0">
                                        <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest mb-1">{spec.label}</span>
                                        <span className="text-white font-medium text-sm">{spec.val}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#0E1A2B] p-5 border border-white/5 mb-6">
                                <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest mb-2">Estimated Price Range</p>
                                <p className="text-2xl font-black text-white">₹12.5L - ₹15.0L</p>
                                <p className="text-[#BFC5CC] text-xs mt-2 italic">*Pricing varies based on controller & options.</p>
                            </div>

                            <Link href="/steelbridge/quote" className="btn-primary-steel w-full flex items-center justify-center py-4 text-sm">
                                Request Formal Quote
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
