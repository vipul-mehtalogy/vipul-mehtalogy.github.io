import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Breadcrumb from "@/components/BreadcrumbItem";

export const metadata = {
  title: "Mining Plant Advisory | Mehtalogy Case Study",
  description:
    "How Mehtalogy built a real-time Mining Plant Advisory system leveraging cloud, IoT, edge automation, and intelligent analytics to optimize operations.",
  keywords: [
    "Mining Advisory",
    "Plant Advisory System",
    "IIoT",
    "Industrial IoT",
    "Real-time monitoring",
    "Mining operations",
    "Mehtalogy",
    "Technology Partner",
  ],
};

export default function MiningPlantAdvisoryCaseStudy() {
  return (
    <main className="p-4 bg-light text-dark">

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies" },
      { name: "Mining Plant Advisory" }
      ]} />
      {/* HERO */}
      <section className="container mx-auto px-6 md:px-10 text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
          Mining Plant Advisory
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Real-time operational intelligence for safer, smarter, and more efficient mining.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="container mx-auto px-6 md:px-10 mb-16">
        <h2 className="text-2xl font-semibold text-dark mb-4">Overview</h2>
        <p className="max-w-4xl">
          A global mining operator needed a unified **Plant Advisory System** to monitor
          critical equipment, detect process deviations, and reduce unplanned downtime.
          Mehtalogy became their **Technology Partner**, designing and building a
          scalable IIoT and analytics-driven advisory platform that integrates data from
          multiple sources and enables real-time decision-making.
        </p>
      </section>

      {/* CHALLENGES */}
      <section className="container mx-auto px-6 md:px-10 mb-16">
        <h2 className="text-2xl font-semibold text-dark mb-4">Challenges</h2>
        <ul className="list-disc pl-6  space-y-2 max-w-4xl">
          <li>Disparate PLCs and devices across multiple mining lines</li>
          <li>No unified visibility into asset health or plant conditions</li>
          <li>High downtime due to late detection of anomalies</li>
          <li>Need for secure, scalable, cloud-ready architecture</li>
          <li>Demand for edge-level computing where connectivity is unreliable</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section className="container mx-auto px-6 md:px-10 mb-16">
        <h2 className="text-2xl font-semibold text-dark mb-4">Solution Delivered</h2>
        <p className=" max-w-4xl mb-6">
          Mehtalogy designed an end-to-end **Mining Plant Advisory Platform** powered by
          IIoT, edge services, and cloud-native microservices.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <div className="bg-white shadow-md p-6 rounded-xl border border-border-color">
            <h3 className="text-xl font-semibold text-dark mb-2">Unified IIoT Layer</h3>
            <p className="">
              Standardized data ingestion from PLCs, sensors, and industrial machinery using
              MQTT, OPC-UA, and industrial connectors.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border border-border-color">
            <h3 className="text-xl font-semibold text-dark mb-2">Real-Time Advisory Engine</h3>
            <p className="">
              Intelligent rule engine to detect process deviations, predict issues,
              and alert operators in real time.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border border-border-color">
            <h3 className="text-xl font-semibold text-dark mb-2">Edge + Cloud Architecture</h3>
            <p className="">
              Compute at edge for fast response; cloud for storage, analytics, and
              cross-site visibility.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl border border-border-color">
            <h3 className="text-xl font-semibold text-dark mb-2">Interactive Operator Dashboards</h3>
            <p className="">
              Live plant views, advisory notifications, KPIs, and compliance summaries.
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="container mx-auto px-6 md:px-10 mb-16">
        <h2 className="text-2xl font-semibold text-dark mb-4">
          High-Level Architecture
        </h2>

        <ul className="list-disc pl-6 space-y-2 max-w-4xl">
          <li>IIoT Edge Device Gateways</li>
          <li>MQTT / OPC-UA data ingestion pipeline</li>
          <li>Cloud microservices (Azure / AKS)</li>
          <li>Time-series storage + analytics</li>
          <li>Advisory rule engine and notifications</li>
          <li>Operations dashboards for plant managers</li>
        </ul>
      </section>

      {/* IMPACT / RESULTS */}
      <section className="container mx-auto px-6 md:px-10 mb-16">
        <h2 className="text-2xl font-semibold text-dark mb-4">Impact Delivered</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          <div className="bg-bg-accent p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-dark mb-1">↓ Downtime</h3>
            <p className="">Earlier anomaly detection reduced equipment failures.</p>
          </div>

          <div className="bg-bg-accent p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-dark mb-1">↑ Operational Safety</h3>
            <p className="">Real-time warnings improved operator response time.</p>
          </div>

          <div className="bg-bg-accent p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-dark mb-1">Unified Visibility</h3>
            <p className="">Complete plant overview across multiple mining lines.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 md:px-10 text-center mt-20">
        <h2 className="text-2xl font-semibold text-dark mb-4">
          Need a Technology Partner for Mining & Industrial IoT?
        </h2>
        <p className=" max-w-3xl mx-auto mb-6">
          Mehtalogy helps engineering and manufacturing companies build reliable, scalable
          digital solutions that improve safety and efficiency.
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
