import Link from "next/link"
import { ArrowRight, PlayCircle, Settings, ShieldCheck, Wrench } from "lucide-react"

export default function SteelbridgeHomePage() {
    return (
        <div className="w-full flex flex-col items-center">

            {/* Hero with Video Background Placeholder */}
            <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">

                {/* Abstract Dark Video Gradient Placeholder */}
                <div className="absolute inset-0 bg-[#0E1A2B] z-0">
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1A3A5A] via-[#0E1A2B] to-[#0A121F]" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

                    {/* Simulated Video Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-6xl md:text-9xl uppercase tracking-tighter mix-blend-overlay pointer-events-none">
                        Precision
                    </div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
                        <span className="text-white/80 text-sm font-semibold tracking-wider">Industrial Excellence</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-6 uppercase">
                        Powering<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#1A3A5A]">Modern</span><br />
                        Manufacturing
                    </h1>

                    <p className="text-lg md:text-xl text-[#BFC5CC] max-w-2xl mx-auto mb-10 font-light">
                        Engineered for performance, durability, and absolute precision. Discover our range of next-generation CNC machines and welding automation systems.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link href="/steelbridge/products" className="btn-primary-steel flex items-center justify-center min-w-[200px]">
                            Explore Machines
                        </Link>
                        <button className="h-14 px-8 rounded-none border border-white/30 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-[#0E1A2B] transition-colors flex items-center justify-center min-w-[200px] gap-2">
                            <PlayCircle className="w-5 h-5" /> Watch Demo
                        </button>
                    </div>
                </div>

            </section>

            {/* Trust & Stats Bar */}
            <section className="w-full bg-[#15181A] border-y border-white/10 py-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {[
                        { label: "Machines Delivered", value: "500+" },
                        { label: "Years Experience", value: "15+" },
                        { label: "Service Network", value: "Pan-India" },
                        { label: "ISO Certified", value: "9001:2015" }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
                            <span className="text-[#BFC5CC] text-sm font-semibold tracking-wider uppercase">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Machine Categories */}
            <section className="w-full max-w-7xl mx-auto px-6 py-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">Industrial Solutions</h2>
                        <div className="w-20 h-1 bg-[#1A3A5A] mb-4" />
                        <p className="text-[#BFC5CC] max-w-xl">
                            High-performance machinery designed to scale your production capabilities and deliver uncompromised quality.
                        </p>
                    </div>
                    <Link href="/steelbridge/products" className="inline-flex items-center gap-2 text-[#BFC5CC] font-semibold hover:text-white transition-colors">
                        View Complete Catalog <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "CNC Turning Centers", icon: <Settings className="w-8 h-8" /> },
                        { title: "Vertical Machining", icon: <Wrench className="w-8 h-8" /> },
                        { title: "Laser Welding Systems", icon: <ShieldCheck className="w-8 h-8" /> }
                    ].map((cat, i) => (
                        <Link key={i} href="/steelbridge/products" className="group block">
                            <div className="relative aspect-[4/3] bg-[#1A1C1E] border border-white/10 overflow-hidden mb-6 flex items-center justify-center transition-colors group-hover:border-[#1A3A5A]">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <span className="text-white/10 text-xl font-bold z-0">Image: {cat.title}</span>

                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="w-12 h-12 bg-[#0A121F] rounded-none flex items-center justify-center text-white mb-4 border border-white/20">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full relative py-24 overflow-hidden bg-[#0A121F]">
                <div className="absolute inset-0 text-[#1A3A5A]/20 transform -skew-y-12 scale-150 origin-bottom-left z-0">
                    {/* Abstract shape */}
                    <div className="w-full h-full bg-repeating-linear-gradient-to-r from-transparent to-transparent via-current bg-[length:100px_100px]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
                        Ready to upgrade your shop floor?
                    </h2>
                    <p className="text-xl text-[#BFC5CC] mb-10 font-light">
                        Connect with our technical sales team for personalized consultation and custom quotes.
                    </p>
                    <Link href="/steelbridge/quote" className="inline-flex h-16 px-10 items-center justify-center bg-white text-[#0E1A2B] font-black uppercase tracking-widest hover:bg-[#BFC5CC] transition-colors">
                        Request a Quote
                    </Link>
                </div>
            </section>

        </div>
    )
}
