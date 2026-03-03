import Link from "next/link"
import { CheckCircle, Package, ArrowRight, Home } from "lucide-react"

export default function PamoOrderSuccessPage() {
    return (
        <div className="w-full min-h-[80vh] flex items-center justify-center px-6 py-16">
            <div className="max-w-lg w-full text-center">

                {/* Success Icon */}
                <div className="mx-auto w-24 h-24 mb-8 rounded-full bg-[#5F8C62]/10 flex items-center justify-center animate-in zoom-in duration-500">
                    <CheckCircle className="w-14 h-14 text-[#5F8C62]" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-[#202222] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    Order Placed Successfully!
                </h1>

                <p className="text-lg text-[#202222]/70 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                    Thank you for shopping with PAMO.
                </p>
                <p className="text-[#202222]/50 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    A confirmation email has been sent to your registered email address with your order details and tracking information.
                </p>

                {/* Order Reference Placeholder */}
                <div className="bg-white p-6 rounded-2xl border border-[#202222]/10 shadow-sm mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Package className="w-5 h-5 text-[#5F8C62]" />
                        <span className="text-sm font-bold text-[#202222]/60 uppercase tracking-wider">Order Reference</span>
                    </div>
                    <p className="text-2xl font-bold text-[#202222] font-mono tracking-widest">PAMO-2026XXXX</p>
                </div>

                {/* Next Steps */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
                    <Link href="/pamo/products" className="flex-1 h-14 rounded-xl bg-[#5F8C62] text-white font-semibold hover:bg-[#4F7C52] transition-colors flex items-center justify-center gap-2">
                        Continue Shopping <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/pamo" className="flex-1 h-14 rounded-xl border-2 border-[#202222]/10 text-[#202222] font-semibold hover:bg-[#202222]/5 transition-colors flex items-center justify-center gap-2">
                        <Home className="w-4 h-4" /> Go Home
                    </Link>
                </div>

            </div>
        </div>
    )
}
