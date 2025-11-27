"use client";

import Link from "next/link";


interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center space-x-1 text-sm text-muted-foreground mb-4"
    >
      
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-accent transition-colors pr-2"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-accent font-medium">{item.name}</span>
          )}
          {i < items.length - 1 && ">"}
        </span>
      ))}
    </nav>
  );
}
