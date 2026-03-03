"use client"

import Link from "next/link"
import { ArrowLeft, Minus, Plus, Trash2, ArrowRight } from "lucide-react"

export default function PamoCartPage() {
    // Mock Cart Items for layout development
    const cartItems = [
        { id: 1, name: "Premium Wireless Earbuds Pro", price: 2999, quantity: 1, image: "Headphones" },
        { id: 2, name: "Smart Fitness Watch", price: 3499, quantity: 2, image: "Watch" }
    ]

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const shipping = 50
    const total = subtotal + shipping

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-12">

            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-[#202222] tracking-tight">Your Cart</h1>
                <Link href="/pamo/products" className="text-sm font-semibold text-[#5F8C62] hover:opacity-80 transition-opacity flex items-center gap-2">
                    Continue Shopping <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {cartItems.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-3xl border border-[#202222]/10 shadow-sm">
                    <p className="text-xl text-[#202222]/60 font-semibold mb-6">Your cart is empty</p>
                    <Link href="/pamo/products" className="btn-primary-pamo inline-flex">
                        Browse Products
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Cart Items List */}
                    <div className="w-full lg:w-2/3 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-6 bg-white rounded-2xl border border-[#202222]/10 shadow-sm relative group">

                                {/* Product Image Placeholder */}
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-[#F5F5F5] flex-shrink-0 flex items-center justify-center text-xs text-[#202222]/30 font-bold overflow-hidden">
                                    {item.image}
                                </div>

                                {/* Product Details */}
                                <div className="flex-grow flex flex-col justify-between h-full w-full">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#202222] mb-1 line-clamp-1">{item.name}</h3>
                                        <p className="text-xl font-bold text-[#5F8C62]">₹{item.price.toLocaleString('en-IN')}</p>
                                    </div>

                                    {/* Quantity & Actions */}
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center bg-[#F5F5F5] rounded-lg p-1">
                                            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-[#202222] transition-colors">
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-8 text-center font-bold text-[#202222]">{item.quantity}</span>
                                            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-[#202222] transition-colors">
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <button className="p-2 text-[#202222]/40 hover:text-red-500 transition-colors hidden sm:block">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Mobile Trash Button */}
                                <button className="absolute top-4 right-4 p-2 text-[#202222]/40 hover:text-red-500 transition-colors sm:hidden">
                                    <Trash2 className="w-5 h-5" />
                                </button>

                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white rounded-2xl border border-[#202222]/10 shadow-sm p-6 lg:sticky lg:top-24">
                            <h2 className="text-xl font-bold text-[#202222] mb-6">Order Summary</h2>

                            <div className="space-y-4 text-sm font-medium text-[#202222]/70 mb-6 pb-6 border-b border-[#202222]/10">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="text-[#202222] font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping Estimate</span>
                                    <span className="text-[#202222] font-bold">₹{shipping.toLocaleString('en-IN')}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-8">
                                <span className="text-lg font-bold text-[#202222]">Total</span>
                                <span className="text-2xl font-bold text-[#5F8C62]">₹{total.toLocaleString('en-IN')}</span>
                            </div>

                            <Link href="/pamo/checkout" className="btn-primary-pamo w-full text-center flex items-center justify-center gap-2">
                                Checkout <ArrowRight className="w-5 h-5" />
                            </Link>

                            <p className="text-xs text-center text-[#202222]/50 mt-4">
                                Taxes calculated at checkout.
                            </p>
                        </div>
                    </div>

                </div>
            )}

        </div>
    )
}
