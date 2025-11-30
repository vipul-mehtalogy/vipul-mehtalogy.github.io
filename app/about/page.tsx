"use client";

import Link from "next/link";
import { FaHandshake, FaUserCog, FaGlobeAsia, FaRocket } from "react-icons/fa";
import Breadcrumb from "@/components/BreadcrumbItem";
import Mehtalogy from "@/components/Mehtalogy"

export default function AboutPage() {
    return (
        <main className="min-h-screen pb-2">
            <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "About Us" }]} />
           
            <section className="text-center">
                <div className="max-w-2xl mx-auto text-center p-2 mt-2">
                    <h1 className="">About <Mehtalogy/></h1>

                    <p className="text-lg max-w-2xl mx-auto">
                        Your dedicated <span className="highlight">Technology Partner</span> helping
                        businesses scale through engineering excellence, cloud solutions, and smart
                        automation.
                    </p>
                </div>
            </section>

            {/* ============================= */}
            {/* OUR STORY */}
            {/* ============================= */}
            <section className="px-6 md:px-20 py-12">

                <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12 items-center">
                    <div>
                        <h2 className="mb-4 text-center">Who We Are</h2>

                        <p className="leading-relaxed mb-4">
                            Mehtalogy is a technology services company built on one mission: to empower SMEs and
                            enterprises with modern, scalable, and efficient digital solutions. We believe in
                            becoming your long-term partner rather than a typical service provider.
                        </p>

                        <p className="leading-relaxed">
                            With hands-on experience across cloud development, SaaS platforms, automation,
                            integrations, and end-to-end project execution, we help your business run smoother,
                            smarter, and faster.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================= */}
            {/* WHY CHOOSE US */}
            {/* ============================= */}
            <section className="px-6 md:px-20 py-12 bg-accent/20">
                <div className="max-w-6xl mx-auto text-center mb-10">
                    <h2 className="">Why Partner With Us?</h2>
                    <p className="mt-2 max-w-3xl mx-auto">
                        We focus on measurable impact, long-term partnerships, and high-quality engineering.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {[
                        { icon: FaHandshake, title: "Partnership-First", desc: "We work with you as a strategic ally, not a vendor." },
                        { icon: FaUserCog, title: "Engineering Excellence", desc: "Modern, scalable, and maintainable tech solutions." },
                        { icon: FaGlobeAsia, title: "Global Mindset", desc: "Experience serving startups to enterprises worldwide." },
                        { icon: FaRocket, title: "Future-Ready", desc: "Cloud, AI, automation & integration-driven approach." }
                    ].map((item, i) => (
                        <div key={i} className="bg-background p-6 shadow rounded-xl text-center">
                            <item.icon className="text-4xl text-accent mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============================= */}
            {/* OUR MISSION */}
            {/* ============================= */}
            <section className="px-6 md:px-20 py-16">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="">Our Mission</h2>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        Our goal is to support businesses in their digital transformation journey—helping them
                        build reliable systems, scale operations, reduce manual effort, and stay ahead in a
                        competitive market through intelligent technology.
                    </p>
                </div>
            </section>

            {/* ============================= */}
            {/* CTA SECTION */}
            {/* ============================= */}
            <section className="px-6 md:px-20 py-12 text-center bg-dark ">
                <h2 className="">Let’s Build Something Powerful Together</h2>

                <p className="mb-6 max-w-2xl mx-auto">
                    Whether you need cloud development, automation, or full-stack execution—we’re ready to
                    partner with you.
                </p>

                <Link href="tel:+919424932197" className="btn-primary">
                    Book a Consultation
                </Link>
            </section>
        </main>
    );
}
