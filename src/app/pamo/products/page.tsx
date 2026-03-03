import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PamoProductsPage() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-12">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#202222] tracking-tight mb-4">All Products</h1>
                    <p className="text-lg text-[#202222]/70 max-w-xl">
                        Explore our curated collection of trending tech and premium lifestyle accessories.
                    </p>
                </div>

                {/* Filter Bar Placeholder */}
                <div className="flex items-center gap-4 text-sm font-semibold text-[#202222]/80">
                    <button className="px-4 py-2 rounded-lg border-2 border-[#202222]/10 hover:border-[#5F8C62] hover:text-[#5F8C62] transition-colors">
                        All Categories
                    </button>
                    <button className="px-4 py-2 rounded-lg border-2 border-[#202222]/10 hover:border-[#5F8C62] hover:text-[#5F8C62] transition-colors">
                        Sort: Newest
                    </button>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="group glass-card-light rounded-3xl p-4 transition-all duration-300">
                        <Link href={`/pamo/products/pamo-product-${i}`} className="block">
                            <div className="aspect-[4/5] rounded-2xl bg-[#F5F5F5] mb-5 relative overflow-hidden">
                                {i < 3 && (
                                    <div className="absolute top-3 left-3 bg-[#5F8C62] text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full z-10">
                                        Bestseller
                                    </div>
                                )}
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-[#202222]/20 font-medium">Image {i}</div>
                            </div>
                        </Link>

                        <Link href={`/pamo/products/pamo-product-${i}`} className="block group-hover:text-[#5F8C62] transition-colors">
                            <h3 className="text-[16px] font-semibold text-[#202222] mb-1 line-clamp-1">Premium Wireless Device {i}</h3>
                            <p className="text-[20px] font-bold text-[#202222] mb-5">₹{(1999 + i * 500).toLocaleString('en-IN')}</p>
                        </Link>

                        <button className="w-full py-3 rounded-xl border-2 border-[#5F8C62] text-[#5F8C62] font-semibold hover:bg-[#5F8C62] hover:text-white transition-all transform active:scale-[0.98]">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-16 flex justify-center items-center gap-2">
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#202222] text-white font-semibold shadow-md">1</button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#202222] hover:bg-[#202222]/5 font-semibold transition-colors">2</button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#202222] hover:bg-[#202222]/5 font-semibold transition-colors">3</button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#202222] hover:bg-[#202222]/5 transition-colors ml-2">
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>

        </div>
    )
}
