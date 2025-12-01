// app/page.tsx  (Next.js App Router - SSG friendly)

import Link from "next/link";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import {services} from "@/data/services.json"
import {caseStudies} from "@/data/case-studies.json"
import {Service} from "@/data/types"


export default function Home() {
  const FaWhatsapp = (FaIcons as Record<string, React.ElementType>)["FaWhatsapp"];
  return (
    <main className="theme-blue">
      {/* HERO */}
      <section className="py-2 bg-transparent">
        <div className="container mx-auto max-w-content px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>             

              <h1 className="h1 mb-4">
                We join your team as your long-term technology partner — cloud, integration, and product delivery.
              </h1>

              <p className="lead mb-6">
                Mehtalogy helps operational businesses modernize systems, build reliable cloud platforms, and deliver data-driven
                outcomes. From architecture and migrations to IIoT and AI — we run with your ops teams to make technology dependable.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="https://wa.me/919424932197" target="_blank" className="btn btn-primary"
                >
                  Book Consulting
                </Link>

                <Link href="/services" className="btn btn-cancel ">
                  Explore Services
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 items-center text-sm ">
                <div className="flex items-center gap-3">
                  <Image src="/img/trust.png" alt="Trusted" width={28} height={28} />
                  <span>Trusted by enterprise engineering teams</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/img/shield.png" alt="Security" width={28} height={28} />
                  <span>Security-first, compliance-aware (HIPAA, BFSI)</span>
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto">
              {/* illustrative panel / product screenshot */}
              <div className="card shadow-soft">
                <Image
                  src="/img/hero/dashboard.png"
                  alt="Platform dashboard"
                  width={720}
                  height={420}
                  className="rounded-md"
                />
                <div className="mt-4">
                  <h3 className="font-semibold">Operational dashboards & real-time telemetry</h3>
                  <p className="mt-2">
                    Integrate on-premise systems, IoT telemetry and cloud analytics to provide operational insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto max-w-content px-6">
          <h2 className="h2 mb-6">Capabilities</h2>
          <p className="mb-8">
            We partner across the technology lifecycle — architecture, delivery and ongoing stewardship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((s:Service) =>{
            const Icon = (FaIcons as Record<string, React.ElementType>)[s.icon];
            return(
              <article key={s.title} className="card card-elevated p-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="text-3xl text-primary"/>
                    {/* <Image src={s.icon} alt="" width={28} height={28} /> */}
                  </div>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-2">{s.desc}</p>
                    <Link href={`/services/${s.slug}`} className="link mt-3 inline-block">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </article>            );
            })}
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-16">
        <div className="container mx-auto max-w-content px-6">
          <h2 className="h2 mb-6">Why partner with Mehtalogy?</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h4 className="font-semibold mb-2">We embed with operations</h4>
              <p className="">We work alongside operations teams to deliver solutions that match the reality of day-to-day workflows.</p>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold mb-2">Speed without risk</h4>
              <p className="">Reusable accelerators and governance to migrate fast while keeping production safe.</p>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold mb-2">End-to-end ownership</h4>
              <p className="">From HLD to runbooks and L3 support — we provide long-term stewardship, not just a throw-away project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 bg-bg-accent">
        <div className="container mx-auto max-w-content px-6">
          <h2 className="h2 mb-6">Selected case studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((c) => (
              <article key={c.title} className="card p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2">{c.subtitle}</p>
                <p className="mt-3">{c.impact}</p>
                <div className="mt-4">
                  <Link href={c.href} className="link">
                    Read case study →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-12">
        <div className="container mx-auto max-w-content px-6 text-center">
          <h2 className="h2 mb-4">Technologies we work with</h2>
          <p className="mb-6">Azure, Kubernetes, .NET/Core, Python, React, Node.js, CosmosDB, Redis, Docker, Istio</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* logos as inline images (place in /public/img/logos/) */}
            {["azure", "kubernetes", "dotnet", "react", "nodejs", "python", "aws"].map((n) => (
              <div key={n} className="p-4 rounded-md">
                <Image src={`/img/tech/${n}.png`} alt={`${n} logo`} width={80} height={36} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="py-16 bg-bg-light">
        <div className="container mx-auto max-w-content px-6">
          <h2 className="h2 mb-6">What partners say</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <blockquote className="card p-5">
              <p className="">“Mehtalogy helped us migrate our product line to Azure with minimal downtime and clear governance.”</p>
              <footer className="mt-4 text-sm text-muted">— Head of Engineering, Foodtech</footer>
            </blockquote>

            <blockquote className="card p-5">
              <p className="">“Their team embedded with operations and delivered predictive analytics that changed our maintenance cycle.”</p>
              <footer className="mt-4 text-sm text-muted">— Plant Manager, Mining Co.</footer>
            </blockquote>

            <blockquote className="card p-5">
              <p className="">“Strong architecture leadership and practical delivery — exactly the partner we needed.”</p>
              <footer className="mt-4 text-sm text-muted">— CTO, Manufacturing</footer>
            </blockquote>
          </div>
        </div>
      </section> */}

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-20 px-6 bg-light text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Your Next Innovation</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you are scaling operations or modernizing your tech stack, Mehtalogy is ready to partner with you.
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
