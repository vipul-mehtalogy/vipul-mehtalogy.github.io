import React from "react";
import { services } from "@/data/services.json"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {

    return (
        <div className="min-h-screen py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-primary mb-6">Our Services & Capabilities</h1>
                <p className="text-lg text-muted max-w-3xl mb-12">
                    At <span className="text-primary font-semibold">Mehtalogy</span>, we engineer secure, scalable and cloud‑agnostic platforms that empower businesses to modernize, automate and innovate.
                </p>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => (
                        <article key={s.title} className="card card-elevated p-5">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Image src={s.icon} alt="" width={28} height={28} />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{s.title}</h3>
                                    <p className="mt-2">{s.desc}</p>
                                    <Link href={`/services/${s.slug}`} className="link mt-3 inline-block">
                                        Learn more →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
