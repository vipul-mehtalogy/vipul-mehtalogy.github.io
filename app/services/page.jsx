import React from "react";
import { services } from "@/data/services.json"
import Image from "next/image"
import Link from "next/link"
import Breadcrumb from "@/components/BreadcrumbItem";
import Mehtalogy from "@/components/Mehtalogy"

export default function ServicesPage() {

    return (
        <div className="min-h-screen">

            <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Servies" }]} />
            <section className="text-center">
                <div className="max-w-2xl mx-auto text-center p-2 mt-2">
                    <h1 className="">Our Services & Capabilities</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        At <Mehtalogy />, we engineer secure, scalable and cloud‑agnostic platforms that empower businesses to modernize, automate and innovate.
                    </p>
                </div>
            </section>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                    <article key={s.title} className="card card-elevated p-5">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Image src={s.icon} alt="" width={40} height={40} />
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
        </div >
    );
}
