import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export default function PamoHomePage() {
    return (
        <div className="w-full flex flex-col items-center">

            {/* Hero Section */}
            <section className="w-full min-h-[85vh] flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 gap-12">
                <div className="flex-1 space-y-8 z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5F8C62]/10 text-[#5F8C62] text-sm font-semibold">
                        <Star className="w-4 h-4 fill-current" />
                        <span>New Arrivals 2026</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#202222] tracking-tight leading-[1.1]">
                        Discover Your<br />Next Favorite<br />Gadget
                    </h1>
                    <p className="text-lg md:text-xl text-[#202222]/70 max-w-md">
                        Trending tech and premium lifestyle essentials curated for the modern everyday.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="/pamo/products" className="btn-primary-pamo text-center">
                            Shop Now
                        </Link>
                        <Link href="#trending" className="btn-secondary-pamo text-center">
                            View Trending
                        </Link>
                    </div>
                </div>

                <div className="flex-1 relative w-full aspect-square max-w-lg animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                    {/* Abstract placeholder for Hero Image */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-[#EFECE0] to-[#5F8C62]/20 shadow-2xl overflow-hidden border border-white/40">
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#202222]/30 text-2xl font-bold tracking-widest uppercase">
                            Featured Product
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Brands / Trending Strip */}
            <section className="w-full bg-[#202222] text-white py-16 mt-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sm uppercase tracking-widest text-white/50 mb-8 font-semibold">Also Available On</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                        {/* Placeholders for Amazon, Flipkart, Meesho */}
                        <span className="text-2xl font-bold tracking-tight">amazon</span>
                        <span className="text-2xl font-bold tracking-tight italic text-blue-300">Flipkart</span>
                        <span className="text-2xl font-bold tracking-tight text-pink-400">meesho</span>
                    </div>
                </div>
            </section>

            {/* Trending Products Grid Placeholder */}
            <section id="trending" className="w-full max-w-7xl mx-auto px-6 py-24">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#202222] mb-3">Trending Now</h2>
                        <p className="text-[#202222]/60">Our most popular lifestyle tech this week.</p>
                    </div>
                    <Link href="/pamo/products" className="hidden md:flex items-center gap-2 text-[#5F8C62] font-semibold hover:opacity-80 transition-opacity">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Mock Product Cards */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group glass-card-light rounded-2xl p-4 transition-all duration-300">
                            <div className="aspect-square rounded-xl bg-[#F5F5F5] mb-4 relative overflow-hidden">
                                <div className="absolute top-3 right-3 bg-[#5F8C62] text-white text-xs font-bold px-3 py-1 rounded-md z-10">
                                    Trending
                                </div>
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-[#202222]/20 font-medium">Product {i}</div>
                            </div>
                            <h3 className="text-lg font-semibold text-[#202222] mb-1">Premium Wireless Earbuds</h3>
                            <p className="text-xl font-bold text-[#202222] mb-4">₹2,999</p>
                            <button className="w-full py-2 rounded-lg border-2 border-[#5F8C62] text-[#5F8C62] font-semibold hover:bg-[#5F8C62] hover:text-white transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

                <Link href="/pamo/products" className="md:hidden mt-8 w-full py-4 rounded-xl flex items-center justify-center gap-2 bg-[#5F8C62]/10 text-[#5F8C62] font-semibold">
                    View All Products <ArrowRight className="w-4 h-4" />
                </Link>
            </section>

        </div>
    )
}
