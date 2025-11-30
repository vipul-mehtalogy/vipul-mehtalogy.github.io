import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Mehtalogy from "@/components/Mehtalogy"

import caseStudiesData from "@/data/case-studies.json";
import Breadcrumb from "@/components/BreadcrumbItem";

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* import Breadcrumb from "@/components/BreadcrumbItem"; */}
            <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Case Studies", }]} />
            {/* Hero Section */}
            <section className="text-center">
                <div className="max-w-2xl mx-auto text-center p-2 mt-2">
                    <h1 className="">
                        Case Studies
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Real-world implementations showcasing <Mehtalogy/> engineering, cloud,
                        IIoT, and AI expertise — delivering measurable business impact.
                    </p>
                </div>
            </section>


            {/* Case Studies Grid */}
            <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
                {caseStudiesData.caseStudies.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="block border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h2 className="text-2xl mb-2">
                            {item.title}
                        </h2>
                        <p className="text-muted text-sm mb-3">{item.subtitle}</p>
                        <p className="text-foreground text-base leading-relaxed">
                            {item.impact}
                        </p>
                        <div className="mt-4 font-semibold">
                            Read More →
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    );
}


export const metadata = {
    title: "Case Studies | MEHTALOGY LABS",
    description:
        "Explore MEHTALOGY LABS real-world engineering, cloud, AI, and IIoT case studies demonstrating tangible business outcomes.",
};