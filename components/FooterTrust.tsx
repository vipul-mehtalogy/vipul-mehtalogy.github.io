"use client";

import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg-dark  py-12 mt-16 border-t border-border-color">
      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ======================================================
           BRAND + SHORT MISSION
        ======================================================= */}
        <div className="space-y-4">
          <Link href="/" className="hover:textde text-light flex items-center gap-3">
            <Image
              src="/img/logo.png"
              alt="Mehtalogy Logo"
              width={45}
              height={45}
              className="object-contain"
            />
            <span className="text-2xl font-semibold text-light">Mehtalogy</span>
          </Link>
          <p className="text-light text-sm leading-relaxed">
            Your dedicated <strong className="text-accent">Technology Partner</strong> —
            delivering cloud development, integrations, automation, and
            digital transformation for SMEs & enterprises.
          </p>
        </div>

        {/* ======================================================
            QUICK NAVIGATION
        ===========================================<br />============ */}
        <nav>
          <h4 className="text-lg text-white mb-4  pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="transition">About Us</Link>
            </li>            
            <li>
              <Link href="/blogs" className="transition">Blogs</Link>
            </li>            
          </ul>
        </nav>

        {/* ======================================================
            CONTACT INFORMATION + ICONS
        ======================================================= */}
        <address className="not-italic">
          <h4 className="text-lg  text-white mb-4  pb-2">
            Contact Us
          </h4>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-muted text-lg" />
              <a href="mailto:vipul@mehtalogy.com" className=" transition">
                vipul@mehtalogy.in
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaPhone className="text-muted text-lg" />
              <a href="tel:+919424932197" className=" transition">
                +91 94249 32197
              </a>
            </li>

            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-muted text-lg mt-1" />
              <address className="text-muted">
                197 Goyal Nagar, Indore, <br />MP, India, 452018
                
              </address>
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-xl  transition" />
            </Link>
            <Link href="https://github.com" target="_blank">
              <FaGithub className="text-xl  transition" />
            </Link>
            <Link href="/" target="_blank">
              <FaGlobe className="text-xl  transition" />
            </Link>
          </div>
        </address>
      </div>

      {/* ======================================================
          FOOTER BOTTOM
      ======================================================= */}
      <div className="text-center text-xs text-muted mt-8 pt-6 border-t border-border-color">
        © {new Date().getFullYear()} Mehtalogy — All Rights Reserved.
      </div>
    </footer>
  );
}
