import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Breadcrumb from "@/components/BreadcrumbItem";
import Mehtalogy from "@/components/Mehtalogy";

export const metadata = {
  title: "Case Study: Food Traceability & Safety | Mehtalogy LABS Technology Partner",
  description:
    "How Mehtalogy LABS built a geo-replicated IIoT platform using Azure, AKS, and Istio to deliver end-to-end food traceability, compliance, and real-time monitoring.",
  keywords: [
    "food traceability",
    "food safety",
    "IIoT case study",
    "Azure IoT",
    "AKS microservices",
    "Istio service mesh",
    "compliance platform",
    "geo-replicated IoT",
    "Mehtalogy LABS Technology Partner"
  ],
};

export default function CaseStudyFoodTraceability() {
  return (
    <main className="p-4">

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies" },
      { name: "Food Traceability & Safety" }
      ]} />
      {/* HERO */}
      <section className="container mx-auto px-6 md:px-10  mb-16">
        <h1 className="">
          Food Traceability & Safety <span className="text-accent">IIoT Platform</span>
        </h1>

        <p className="text-lg mb-4">
          Geo-replicated IIoT platform built on <strong>Azure</strong>, <strong>AKS</strong>, and <strong>Istio</strong>
          for end-to-end traceability, safety compliance, and predictive monitoring.
        </p>

        <div className="mt-10">
          <Image
            src="/img/case-studies/food-traceability.png"
            alt="Food traceability and IIoT compliance architecture"
            width={1200}
            height={600}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container mx-auto p-4">
        <h2 className="">Overview</h2>

        <p className="max-w-4xl leading-relaxed">
          A global food producer approached <Mehtalogy/> to build a <strong>unified end-to-end traceability system</strong>
          across farms, processing plants, warehouses, and distributors.
          The challenge: ensuring <strong>real-time monitoring</strong>, <strong>regulatory compliance</strong>, and
          <strong>tamper-proof data integrity</strong> across geographically distributed locations.
        </p>

        <p className="max-w-4xl mt-4 leading-relaxed">
          The solution required a resilient, <strong>geo-replicated IIoT architecture</strong>,
          capable of processing millions of telemetry events per hour while ensuring
          <strong>99.99% uptime</strong> and seamless global failover.
        </p>
      </section>

      {/* OBJECTIVES */}
      <section className="container mx-auto p-4">
        <h2 className="">Project Objectives</h2>

        <ul className="grid md:grid-cols-2 gap-6">
          <li className="p-5 border border-border-light rounded-xl">
            <strong>End-to-end food traceability</strong> from farm to consumer.
          </li>
          <li className="p-5 border border-border-light rounded-xl">
            Real-time sensor monitoring (temperature, humidity, spoilage detection, etc.).
          </li>
          <li className="p-5 border border-border-light rounded-xl">
            <strong>Geo-replicated IIoT ingestion</strong> with cross-region failover.
          </li>
          <li className="p-5 border border-border-light rounded-xl">
            <strong>Product Recall management:</strong> removing unsafe food from the market by tracing batches backward (“fork to farm”) to identify the source—whether manufacturing issues, contamination, or other faults.
          </li>
        </ul>
      </section>

      {/* SOLUTION ARCHITECTURE */}
      <section className="container mx-auto p-4 ">
        <h2 className="">Solution Architecture</h2>

        <p className=" max-w-4xl leading-relaxed mb-8">
          <Mehtalogy/> developed a distributed IIoT platform based on:
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-border-light rounded-xl">
            <h3 className="font-semibold text-lg mb-3">Azure IIoT</h3>
            <p className="">
              Device provisioning, secure MQTT communication, geo-replication, and message routing.
            </p>
          </div>

          <div className="p-6 border border-border-light rounded-xl">
            <h3 className="font-semibold text-lg mb-3">AKS Microservices</h3>
            <p className="">
              Event processing pipelines, compliance engines, digital twin models, and batch evaluation.
            </p>
          </div>

          <div className="p-6 border border-border-light rounded-xl">
            <h3 className="font-semibold text-lg mb-3">Istio Service Mesh</h3>
            <p className="">
              Zero-trust security, mTLS, traffic shaping, observability, and multi-region consistency.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="container mx-auto p-4">
        <h2 className="">Impact & Results</h2>

        <ul className="grid md:grid-cols-2 gap-6 ">
          <li className="p-5 border border-border-light rounded-xl">
            <strong>40% reduction</strong> in spoilage incidents.
          </li>
          <li className="p-5 border border-border-light rounded-xl">
            Real-time audit trails enabling <strong>100% compliance visibility</strong>.
          </li>
          <li className="p-5 border border-border-light rounded-xl">
            <strong>Global active-active redundancy</strong> with zero downtime failover.
          </li>
          <li className="p-5 border border-border-light rounded-xl">
            Predictive alerts increased operational efficiency by <strong>35%</strong>.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 md:px-12 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Want to Build a High-Scale IIoT Platform?
        </h2>
        <p className="max-w-2xl mx-auto">
          <Mehtalogy/> specializes in distributed cloud architectures, traceability platforms,
          and mission-critical industrial software.
        </p>

        <Link
          href="https://wa.me/919424932197"
          target="_blank"
          className="btn-primary flex items-center gap-2"
        >
          <FaWhatsapp className="text-xl" />
          Chat on WhatsApp
        </Link>
      </section>
    </main>
  );
}
