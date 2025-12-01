import Link from "next/link";
interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center space-x-1  mb-4 px-6"
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
