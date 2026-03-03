"use client"

import Link from "next/link"
import { ArrowLeft, Send, Building2, Phone, Mail, User, FileText, MessageSquare } from "lucide-react"

export default function SteelbridgeQuotePage() {
    return (
        <div className="w-full">

            {/* Header */}
            <div className="w-full bg-[#15181A] border-b border-white/10 pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <Link href="/steelbridge" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#BFC5CC] hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3">Request a Quote</h1>
                    <p className="text-lg text-[#BFC5CC] font-light max-w-2xl">
                        Fill out the form below and our technical sales team will get back to you within 24 hours with a customized proposal.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Quote Form */}
                    <div className="w-full lg:w-2/3">
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

                            {/* Company & Contact */}
                            <section className="bg-[#15181A] border border-white/10 p-6 md:p-8">
                                <h2 className="text-xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <Building2 className="w-5 h-5 text-[#1A3A5A]" /> Company Details
                                </h2>
                                <div className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-bold text-white/70 uppercase tracking-wider mb-2">
                                                <User className="w-3 h-3 inline mr-1" /> Full Name *
                                            </label>
                                            <input type="text" required className="w-full px-4 py-3 bg-[#0E1A2B] border border-white/10 text-white placeholder-white/30 focus:border-[#1A3A5A] focus:ring-1 focus:ring-[#1A3A5A] outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-white/70 uppercase tracking-wider mb-2">
                                                <Building2 className="w-3 h-3 inline mr-1" /> Company Name *
                                            </label>
                                            <input type="text" required className="w-full px-4 py-3 bg-[#0E1A2B] border border-white/10 text-white placeholder-white/30 focus:border-[#1A3A5A] focus:ring-1 focus:ring-[#1A3A5A] outline-none transition-all" placeholder="ABC Industries" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-bold text-white/70 uppercase tracking-wider mb-2">
                                                <Mail className="w-3 h-3 inline mr-1" /> Email Address *
                                            </label>
                                            <input type="email" required className="w-full px-4 py-3 bg-[#0E1A2B] border border-white/10 text-white placeholder-white/30 focus:border-[#1A3A5A] focus:ring-1 focus:ring-[#1A3A5A] outline-none transition-all" placeholder="you@company.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-white/70 uppercase tracking-wider mb-2">
                                                <Phone className="w-3 h-3 inline mr-1" /> Phone Number *
                                            </label>
                                            <input type="tel" required className="w-full px-4 py-3 bg-[#0E1A2B] border border-white/10 text-white placeholder-white/30 focus:border-[#1A3A5A] focus:ring-1 focus:ring-[#1A3A5A] outline-none transition-all" placeholder="+91 98765 43210" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-white/70 uppercase tracking-wider mb-2">City / State</label>
                                        <input type="text" className="w-full px-4 py-3 bg-[#0E1A2B] border border-white/10 text-white placeholder-white/30 focus:border-[#1A3A5A] focus:ring-1 focus:ring-[#1A3A5A] outline-none transition-all" placeholder="Mumbai, Maharashtra" />
                                    </div>
                                </div>
                            </section>

                            {/* Machine Interest */}
                            <section className="bg-[#15181A] border border-white/10 p-6 md:p-8">
                                <h2 className="text-xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <FileText className="w-5 h-5 text-[#1A3A5A]" /> Machine Requirements
                                </h2>
                                <div className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-bold text-white/70 uppercase tracking-wider mb-2">Machine Category *</label>
                                        <select required className="w-full px-4 py-3 bg-[#0E1A2B] border border-white/10 text-white focus:border-[#1A3A5A] focus:ring-1 focus:ring-[#1A3A5A] outline-none transition-all appearance-none">
                                            <option value="">Select a category</option>
                                            <option value="cnc-turning">CNC Turning Center</option>
                                            <option value="vertical-machining">Vertical Machining Center</option>
                                            <option value="laser-welding">Laser Welding System</option>
                                            <option value="welding-robot">Welding Robot</option>
                                            <option value="other">Other / Custom</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-white/70 uppercase tracking-wider mb-2">Specific Machine Model (Optional)</label>
                                        <input type="text" className="w-full px-4 py-3 bg-[#0E1A2B] border border-white/10 text-white placeholder-white/30 focus:border-[#1A3A5A] focus:ring-1 focus:ring-[#1A3A5A] outline-none transition-all" placeholder="e.g., SB-TC500 Series" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-white/70 uppercase tracking-wider mb-2">Quantity Required</label>
                                        <input type="number" min="1" defaultValue="1" className="w-full px-4 py-3 bg-[#0E1A2B] border border-white/10 text-white placeholder-white/30 focus:border-[#1A3A5A] focus:ring-1 focus:ring-[#1A3A5A] outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-white/70 uppercase tracking-wider mb-2">
                                            <MessageSquare className="w-3 h-3 inline mr-1" /> Additional Notes / Requirements
                                        </label>
                                        <textarea rows={5} className="w-full px-4 py-3 bg-[#0E1A2B] border border-white/10 text-white placeholder-white/30 focus:border-[#1A3A5A] focus:ring-1 focus:ring-[#1A3A5A] outline-none transition-all resize-none" placeholder="Provide details about your production requirements, preferred controller, budget range, delivery timeline, etc." />
                                    </div>
                                </div>
                            </section>

                            <button type="submit" className="w-full h-16 bg-white text-[#0E1A2B] font-black uppercase tracking-widest hover:bg-[#BFC5CC] transition-colors flex items-center justify-center gap-3 text-lg">
                                <Send className="w-5 h-5" /> Submit Inquiry
                            </button>
                        </form>
                    </div>

                    {/* Contact Sidebar */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-[#15181A] border border-white/10 p-6 md:p-8 lg:sticky lg:top-24 space-y-8">
                            <div>
                                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">Why SteelBridge?</h3>
                                <ul className="space-y-4 text-[#BFC5CC] text-sm">
                                    {[
                                        "Dedicated technical pre-sales consultation",
                                        "Competitive financing & EMI options",
                                        "Pan-India installation & commissioning",
                                        "24/7 service support network",
                                        "Comprehensive operator training included"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-0.5 w-5 h-5 bg-[#1A3A5A] flex items-center justify-center flex-shrink-0">
                                                <span className="text-white text-[10px] font-bold">{i + 1}</span>
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">Direct Contact</h3>
                                <div className="space-y-4 text-sm">
                                    <div className="flex items-center gap-3 text-[#BFC5CC]">
                                        <Phone className="w-4 h-4 text-[#1A3A5A]" />
                                        <span>+91 98000 00000</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#BFC5CC]">
                                        <Mail className="w-4 h-4 text-[#1A3A5A]" />
                                        <span>sales@steelbridge.in</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#BFC5CC]">
                                        <Building2 className="w-4 h-4 text-[#1A3A5A]" />
                                        <span>Mumbai, Maharashtra, India</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <p className="text-white/40 text-xs leading-relaxed">
                                    By submitting this form, you agree to be contacted by our sales team. We typically respond within 24 business hours. For urgent inquiries, please call us directly.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
