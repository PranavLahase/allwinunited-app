'use client'

import Link from "next/link"
import { ArrowLeft, Heart, Shield, Truck, Star } from "lucide-react"

export default function PamoAboutPage() {
    return (
        <main className="min-h-screen bg-[#EFECE0] pt-[72px]">
            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-br from-[#5F8C62]/10 to-[#EFECE0]">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#202222] mb-4">
                        About <span className="text-[#5F8C62]">pamo</span>
                    </h1>
                    <p className="text-lg text-[#202222]/70 max-w-2xl mx-auto leading-relaxed">
                        We bring you the finest lifestyle products and trending gadgets,
                        carefully curated to elevate your everyday life. Quality you can trust,
                        style you can feel.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#202222] text-center mb-12">Why Choose PAMO?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Star, title: "Premium Quality", desc: "Every product is hand-picked and quality tested before listing." },
                            { icon: Truck, title: "Fast Delivery", desc: "Swift and reliable shipping to your doorstep, nationwide." },
                            { icon: Shield, title: "Secure Payments", desc: "Your transactions are protected with industry-leading security." },
                            { icon: Heart, title: "Customer First", desc: "Dedicated support team ready to help you anytime." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#5F8C62]/10 flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-[#5F8C62]" />
                                </div>
                                <h3 className="font-semibold text-[#202222] mb-2">{item.title}</h3>
                                <p className="text-sm text-[#202222]/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 px-6 bg-white/50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-[#202222] mb-6">Our Story</h2>
                    <p className="text-[#202222]/70 leading-relaxed mb-4">
                        PAMO was born from a simple idea — make premium lifestyle products accessible to everyone.
                        As a part of the AllwinUnited family, we combine the trust of an established brand with
                        the excitement of discovering new, trending products.
                    </p>
                    <p className="text-[#202222]/70 leading-relaxed">
                        From smart gadgets to everyday essentials, we curate products that blend innovation
                        with practicality, ensuring every purchase brings value to your life.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-6 text-center">
                <Link
                    href="/pamo/products"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#5F8C62] text-white rounded-full font-semibold hover:bg-[#4a7a4d] transition-colors duration-300"
                >
                    Explore Our Products
                </Link>
                <div className="mt-6">
                    <Link href="/pamo" className="inline-flex items-center gap-2 text-[#5F8C62] hover:underline text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </section>
        </main>
    )
}
