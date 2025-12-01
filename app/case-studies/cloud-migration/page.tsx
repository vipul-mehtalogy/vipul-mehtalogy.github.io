import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Breadcrumb from "@/components/BreadcrumbItem";
import Mehtalogy from "@/components/Mehtalogy";

export const metadata = {
  title: "Large-Scale On-Prem to Cloud Migration | Mehtalogy LABS Case Study",
  description:
    "How Mehtalogy LABS led a large-scale migration from on-premise systems to a modern, reliable, and secure cloud platform with minimal downtime.",
  keywords: [
    "Cloud Migration",
    "On-prem to Cloud",
    "Application Modernization",
    "Azure Migration",
    "AWS Migration",
    "Kubernetes Migration",
    "Mehtalogy LABS",
    "Technology Partner",
    "Enterprise Cloud Strategy",
  ],
};

export default function CloudMigrationCaseStudy() {
  return (
    <main className="p-4">

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies" },
      { name: "Large-Scale On-Prem to Cloud Migration" }
      ]} />

      <section className="container mx-auto px-6 md:px-10  mb-16">
        <h1 className="">
          Large-Scale Migration from On-Prem to Cloud
        </h1>
        <p className="text-lg mb-4">
          Enabling scalability, security, and operational efficiency through
          cloud-native modernization.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="container mx-auto px-6 md:px-10 mb-16">
        <h2 className="">Overview</h2>
        <p className="text-lg mb-4">
          A leading banking enterprise depended on on-premise legacy systems, siloed data stores, and aging infrastructure.
          They partnered with <Mehtalogy /> to design and execute a secure, phased, and zero-data-loss cloud migration—while modernizing critical platforms to cloud-native architectures.
        </p>
      </section>

      {/* CHALLENGES */}
      <section className="container mx-auto px-6 md:px-10 mb-16">
        <h2 className="mb-4">Challenges</h2>
        <ul className="list-disc pl-6   space-y-2 max-w-4xl">
          <li>Complex legacy systems running on aging hardware</li>
          <li>High operational cost and limited scalability on-prem</li>
          <li>No centralized monitoring or unified DevOps processes</li>
          <li>Disparate databases across multiple business units</li>
          <li>Downtime constraints requiring near-zero disruption</li>
          <li>Security, compliance, and audit readiness requirements</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section className="container mx-auto px-6 md:px-10 mb-16">
        <h2 className="">Solution Delivered</h2>

        <p className="  max-w-4xl mb-6">
          <Mehtalogy /> delivered an end-to-end cloud migration program with strong emphasis
          on automation, containerization, and future-proof architecture.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <div className="shadow-md p-6 rounded-xl border border-border-color">
            <h3 className="text-xl font-semibold mb-2">
              Cloud Readiness & Architecture
            </h3>
            <p className=" ">
              Comprehensive assessment of all apps & databases, followed by a
              cloud-native reference architecture based on Azure/AWS.
            </p>
          </div>

          <div className="shadow-md p-6 rounded-xl border border-border-color">
            <h3 className="text-xl font-semibold mb-2">Containerization & AKS</h3>
            <p className=" ">
              Legacy services containerized and deployed using AKS/EKS for maximum
              scalability, resiliency, and simplified CI/CD pipelines.
            </p>
          </div>

          <div className="shadow-md p-6 rounded-xl border border-border-color">
            <h3 className="text-xl font-semibold mb-2">
              DevOps Automation & CI/CD
            </h3>
            <p className=" ">
              Infrastructure-as-Code (IaC) via Terraform + GitOps workflows ensured
              repeatable, secure deployments.
            </p>
          </div>

          <div className="shadow-md p-6 rounded-xl border border-border-color">
            <h3 className="text-xl font-semibold mb-2">
              Unified Observability
            </h3>
            <p className=" ">
              Centralized dashboards using Azure Monitor, Grafana, and Elastic for
              monitoring, alerting, and long-term analytics.
            </p>
          </div>
        </div>
      </section>

      {/* MIGRATION APPROACH */}
      <section className="container mx-auto px-6 md:px-10 mb-16">
        <h2 className="text-2xl font-semibold mb-4">Migration Approach</h2>

        <ul className="list-disc pl-6   space-y-2 max-w-4xl">
          <li>Workload classification (Rehost / Refactor / Rebuild)</li>
          <li>Data migration using DMS, replication, and staging pipelines</li>
          <li>Pilot testing with rollback-safe deployments</li>
          <li>Progressive migration of services in controlled waves</li>
          <li>Near-zero-downtime cutover strategy</li>
        </ul>
      </section>

      {/* IMPACT */}
      <section className="container mx-auto px-6 md:px-10 mb-16">
        <h2 className="text-2xl font-semibold mb-4">Impact Delivered</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          <div className="bg-bg-accent p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-1">60% Lower Costs</h3>
            <p className=" ">
              Reduction in hardware, licensing, and maintenance overhead.
            </p>
          </div>

          <div className="bg-bg-accent p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-1">Modernized Stack</h3>
            <p className=" ">
              Migrated legacy apps to containerized microservices using cloud-native
              infrastructure.
            </p>
          </div>

          <div className="bg-bg-accent p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-1">Stronger Security</h3>
            <p className=" ">
              Zero-trust model, cloud IAM, and improved audit readiness.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 md:px-10 text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">
          Planning a Migration to the Cloud?
        </h2>
        <p className="  max-w-3xl mx-auto mb-6">
          Whether you’re modernizing legacy infrastructure or scaling globally,
          <Mehtalogy /> can be your trusted Technology Partner.
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
