"use client"

import Link from "next/link"
import { ArrowLeft, ShieldCheck, CreditCard } from "lucide-react"

export default function PamoCheckoutPage() {
    const total = 10048 // Mock total from previous step

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-8 md:py-12">

            <div className="mb-8">
                <Link href="/pamo/cart" className="inline-flex items-center gap-2 text-sm font-semibold text-[#202222]/60 hover:text-[#5F8C62] transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Return to Cart
                </Link>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                {/* Checkout Form */}
                <div className="w-full lg:w-3/5 space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold text-[#202222] tracking-tight mb-2">Checkout</h1>
                        <p className="text-[#202222]/60">Please provide your details to complete the order.</p>
                    </div>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

                        {/* Contact Info */}
                        <section className="bg-white p-6 md:p-8 rounded-2xl border border-[#202222]/10 shadow-sm">
                            <h2 className="text-xl font-bold text-[#202222] mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-[#202222] mb-2">Email Address</label>
                                    <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-[#202222]/20 focus:border-[#5F8C62] focus:ring-1 focus:ring-[#5F8C62] outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#202222] mb-2">Phone Number</label>
                                    <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-[#202222]/20 focus:border-[#5F8C62] focus:ring-1 focus:ring-[#5F8C62] outline-none transition-all" />
                                </div>
                            </div>
                        </section>

                        {/* Shipping Info */}
                        <section className="bg-white p-6 md:p-8 rounded-2xl border border-[#202222]/10 shadow-sm">
                            <h2 className="text-xl font-bold text-[#202222] mb-6">Shipping Address</h2>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-[#202222] mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#202222]/20 focus:border-[#5F8C62] focus:ring-1 focus:ring-[#5F8C62] outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#202222] mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#202222]/20 focus:border-[#5F8C62] focus:ring-1 focus:ring-[#5F8C62] outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#202222] mb-2">Street Address</label>
                                    <input type="text" placeholder="123 Main St, Apartment, Studio, or Floor" className="w-full px-4 py-3 rounded-xl border border-[#202222]/20 focus:border-[#5F8C62] focus:ring-1 focus:ring-[#5F8C62] outline-none transition-all" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="md:col-span-1">
                                        <label className="block text-sm font-semibold text-[#202222] mb-2">PIN Code</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#202222]/20 focus:border-[#5F8C62] focus:ring-1 focus:ring-[#5F8C62] outline-none transition-all" />
                                    </div>
                                    <div className="md:col-span-1">
                                        <label className="block text-sm font-semibold text-[#202222] mb-2">City</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#202222]/20 focus:border-[#5F8C62] focus:ring-1 focus:ring-[#5F8C62] outline-none transition-all" />
                                    </div>
                                    <div className="md:col-span-1">
                                        <label className="block text-sm font-semibold text-[#202222] mb-2">State</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#202222]/20 focus:border-[#5F8C62] focus:ring-1 focus:ring-[#5F8C62] outline-none transition-all" />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </form>
                </div>

                {/* Payment & Summary Side */}
                <div className="w-full lg:w-2/5">
                    <div className="bg-[#202222] text-white rounded-3xl p-6 lg:p-8 lg:sticky lg:top-24 shadow-2xl">

                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                        {/* Small Item Preview */}
                        <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                            {/* Mock items */}
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-white/80">Earbuds Pro x 1</span>
                                <span className="font-semibold">₹2,999</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-white/80">Fitness Watch x 2</span>
                                <span className="font-semibold">₹6,998</span>
                            </div>
                        </div>

                        <div className="space-y-4 text-sm font-medium text-white/70 mb-6 pb-6 border-b border-white/10">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹9,997</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>₹50</span>
                            </div>
                            <div className="flex justify-between text-green-400">
                                <span>Discount</span>
                                <span>-₹0</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-10">
                            <span className="text-lg font-bold">Total</span>
                            <span className="text-3xl font-bold">₹{total.toLocaleString('en-IN')}</span>
                        </div>

                        <button className="w-full h-14 bg-[#5F8C62] text-white text-lg font-bold rounded-xl shadow-lg shadow-[#5F8C62]/20 hover:bg-[#4F7C52] transition-colors flex items-center justify-center gap-2 mb-4">
                            <CreditCard className="w-5 h-5" /> Pay securely with Razorpay
                        </button>

                        <div className="flex items-center justify-center gap-2 text-xs text-white/50">
                            <ShieldCheck className="w-4 h-4" /> 256-bit SSL Encrypted Checkout
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
