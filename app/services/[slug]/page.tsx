import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";

import servicesData from "@/data/services.json";
import {Service} from "@/data/types.js"


export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  const service = servicesData.services.find((s: Service) => s.slug === slug  );

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src={service.banner}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-light text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-lg md:text-xl text-muted mb-8 leading-relaxed">
          {service.longText}
        </p>

        {/* How It Helps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-accent">How This Service Helps</h2>
          <p className="text-lg text-foreground leading-relaxed">{service.howItHelps}</p>
        </div>

        {/* Business Goals */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-accent">Business Goals</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-foreground">
            {service.businessGoals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>

        {/* Key Points */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-accent">Key Capabilities & Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-foreground">
            {service.keyPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return servicesData.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const slug = await params;

  const service = servicesData.services.find(
    (s: Service) => s.slug === slug.slug
  );

  if (!service) {
    return {
      title: "Service Not Found | Mehtalogy",
      description: "Requested service does not exist."
    };
  }

  return {
    title: `${service.title} | Mehtalogy`,
    description: service.desc || service.title,
  };
}
