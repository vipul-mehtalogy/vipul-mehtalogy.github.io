import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import caseStudiesData from "@/data/case-studies.json";
import Breadcrumb from "@/components/BreadcrumbItem";

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* import Breadcrumb from "@/components/BreadcrumbItem"; */}
            <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Case Studies", }]} />
            {/* Hero Section */}
            <section className="text-center py-20 bg-bg-light border-b border-border">
                <h1 className="text-5xl font-extrabold text-accent mb-4">
                    Case Studies
                </h1>
                <p className="text-lg text-muted max-w-2xl mx-auto">
                    Real-world implementations showcasing Mehtalogy's engineering, cloud,
                    IIoT, and AI expertise — delivering measurable business impact.
                </p>
            </section>


            {/* Case Studies Grid */}
            <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
                {caseStudiesData.caseStudies.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="block border border-border rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h2 className="text-2xl font-bold text-primary mb-2">
                            {item.title}
                        </h2>
                        <p className="text-muted text-sm mb-3">{item.subtitle}</p>
                        <p className="text-foreground text-base leading-relaxed">
                            {item.impact}
                        </p>
                        <div className="mt-4 text-primary hover:text-accent font-semibold">
                            Read More →
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    );
}


export const metadata = {
    title: "Case Studies | Mehtalogy",
    description:
        "Explore Mehtalogy’s real-world engineering, cloud, AI, and IIoT case studies demonstrating tangible business outcomes.",
};