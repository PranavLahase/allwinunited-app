import Link from "next/link"
import { ArrowLeft, Check, ShoppingBag, ShieldCheck, Truck } from "lucide-react"

export default function PamoProductDetail({ params }: { params: { slug: string } }) {
    // Mock data for layout purposes
    const productPrice = 2999
    const originalPrice = 4999

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-8">

            {/* Breadcrumb / Back Navigation */}
            <Link href="/pamo/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[#202222]/60 hover:text-[#5F8C62] mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Products
            </Link>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                {/* Image Gallery Side */}
                <div className="w-full lg:w-3/5 space-y-4">
                    <div className="w-full aspect-square md:aspect-[4/3] bg-white rounded-3xl border border-[#202222]/5 shadow-sm relative overflow-hidden flex items-center justify-center">
                        <span className="text-[#202222]/20 text-2xl font-bold">Main Image Gallery</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-white rounded-xl border border-[#202222]/5 shadow-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center">
                                <span className="text-[#202222]/20 text-xs font-bold">Thumb {i}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info Side */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">

                    <div className="inline-flex items-center gap-1 text-[#5F8C62] text-xs font-bold uppercase tracking-wider mb-4">
                        <Check className="w-4 h-4" /> In Stock & Ready to Ship
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-[#202222] leading-tight mb-4">
                        Premium Wireless Earbuds Pro
                    </h1>

                    <p className="text-[#202222]/70 text-lg mb-8">
                        Experience studio-quality sound with active noise cancellation and an ergonomic fit built for all-day comfort.
                    </p>

                    <div className="flex items-end gap-3 mb-8 pb-8 border-b border-[#202222]/10">
                        <span className="text-4xl font-bold text-[#202222]">₹{productPrice.toLocaleString('en-IN')}</span>
                        <span className="text-xl text-[#202222]/40 line-through mb-1">₹{originalPrice.toLocaleString('en-IN')}</span>
                        <span className="bg-[#5F8C62]/10 text-[#5F8C62] text-sm font-bold px-2 py-1 rounded-md mb-1 ml-2">Save 40%</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4 mb-10">
                        <button className="w-full h-14 bg-[#5F8C62] text-white text-lg font-bold rounded-xl shadow-lg shadow-[#5F8C62]/20 hover:bg-[#4F7C52] transition-colors flex items-center justify-center gap-2">
                            Buy Now
                        </button>
                        <button className="w-full h-14 bg-white border-2 border-[#5F8C62] text-[#5F8C62] text-lg font-bold rounded-xl hover:bg-[#5F8C62]/5 transition-colors flex items-center justify-center gap-2">
                            <ShoppingBag className="w-5 h-5" /> Add to Cart
                        </button>
                    </div>

                    {/* Marketplace Links */}
                    <div className="p-5 rounded-2xl bg-[#202222] text-white">
                        <p className="text-xs uppercase tracking-wider text-white/50 mb-4 font-semibold">Also available on</p>
                        <div className="flex items-center gap-4">
                            <button className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-bold text-sm flex items-center justify-center">
                                amazon
                            </button>
                            <button className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-bold text-sm italic text-blue-300 flex items-center justify-center">
                                Flipkart
                            </button>
                        </div>
                    </div>

                    {/* Value Props */}
                    <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#202222]/10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#202222]">
                                <Truck className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-semibold text-[#202222]/80">Free Express<br />Delivery</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#202222]">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-semibold text-[#202222]/80">1 Year Brand<br />Warranty</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
