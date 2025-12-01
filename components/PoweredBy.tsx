import Link from "next/link";
import Image from "next/image";
import Mehtalogy from "@/components/Mehtalogy"
export default function PoweredBy() {
  return (
    <div className="container mx-auto flex items-center justify-between p-2">

      {/* LOGO */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/favicon.svg"
          alt="Mehtalogy Technology Partner Logo"
          width={40}
          height={40}
          priority
          className="object-contain"
        />
        <h1 className="">
          <Mehtalogy/>
        </h1>

      </Link>
    </div>
  );
}
