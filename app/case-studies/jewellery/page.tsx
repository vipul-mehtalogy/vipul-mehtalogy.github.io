import Image from "next/image";

export const metadata = {
  title: "Case Study: Jewellery Product Catalog & Real-Time Pricing | Mehtalogy",
  description:
    "How Mehtalogy transformed a traditional jewellery business with live pricing, inventory tracking, product automation and anti-theft digital systems.",
};

export default function JewelleryCaseStudy() {
  return (
    <main className="min-h-screen bg-light px-6 py-12">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Jewellery Product Catalog & Real-time Pricing Transformation
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Jewellery retailers face challenges unique to the industry: rapidly fluctuating
          prices, multi-variant products, inventory shrinkage, and operational
          inefficiency. We helped Sapna Shri Jewellers digitize their entire sales and
          product experience with a smart real-time catalogue powered by pricing engines,
          smart automation and inventory control.
        </p>

        <Image
          src="/img/case-studies/jewellery/banner1.png"
          width={1200}
          height={500}
          alt="Jewellery Case Study"
          className="rounded-xl shadow-lg mb-8"
        />

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenge</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Pricing changes multiple times a day</li>
          <li>No central catalog for products and variants</li>
          <li>Product listing changes were manual & slow</li>
          <li>Customer trust depends heavily on transparency</li>
          <li>High operational load and dependency on staff</li>
          <li>Theft risk and missing item tracking was manual</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Solution</h2>
        <p className="text-gray-700 mb-6">
          We built a hybrid platform that provides a real-time connected product
          catalog, automated pricing engine, and a digital inventory intelligence layer.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <FeatureCard
            title="Automated Dynamic Product Catalog"
            description="Products sync automatically from inventory and pricing logic. Each product receives SEO-ready pages, images, and descriptions."
          />

          <FeatureCard
            title="Real-Time Pricing Engine"
            description="Gold and diamond prices auto-update across all products with automated recalculation. No human error, no downtime."
          />

          <FeatureCard
            title="Inventory & Stock Tracking"
            description="Monitor live stock, track quantity changes, and control item availability across showroom and website."
          />

          <FeatureCard
            title="Anti-Theft Item Tracking"
            description="Smart software keeps a watch on boxes presented to customers. Reduces inventory shrinkage and improves security."
          />

          <FeatureCard
            title="Unique Item Identification"
            description="Each jewellery item receives a unique digital ID for tracking, audit, reordering, history and authentication."
          />

          <FeatureCard
            title="Sale & Billing Integration"
            description="Sold items auto-remove from website & catalogue instantly, ensuring real-time stock accuracy."
          />

          <FeatureCard
            title="Push Notifications"
            description="Price drop alerts, offers, festival campaigns & new arrivals are broadcast directly to customer browsers & mobile." />

          <FeatureCard
            title="Daily Reports & Analytics"
            description="Track daily sales, view product demand, performance and generate operational insights automatically." />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Business Impact</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Higher customer trust due to real-time pricing</li>
          <li>Inventory is always up-to-date</li>
          <li>Reduced manual work and operational errors</li>
          <li>24×7 digital showroom experience</li>
          <li>Enhanced security and stock intelligence</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Technology Stack</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Next.js + Static Generation + Dynamic Routing</li>
          <li>Cloud based worker service for pricing updates</li>
          <li>Inventory sync and catalog automation</li>
          <li>PWA for notifications and mobile-first UX</li>
        </ul>

        
      </section>
      <section className="max-w-5xl mx-auto bg-accent p-6 rounded-xl border border-blue-200 mt-12 mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Live Implementation
        </h2>

        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/img/case-studies/jewellery/favicon.svg"
            alt="Sapna Shri Jewellers Logo"
            className="h-10 bg-black"
          />
          <p className="text-gray-700">
            This platform powers Sapna Shri Jewellers’ live product catalog, pricing
            engine and sales automation.
          </p>
        </div>

        <a
          href="https://sapnashrijewellers.in"
          target="_blank"
          className="btn btn-primary"
        >
          Visit Sapna Shri Jewellers
        </a>
      </section>
    </main>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}
