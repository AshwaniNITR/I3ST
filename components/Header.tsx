import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center gap-3 px-6 py-4">
      <Link href="/">
        <Image
          src="/IEEE Instcon.png"
          alt="INSTCon 2026 Logo"
          width={48}
          height={48}
          priority
        />
      </Link>

      <span className="text-xl font-semibold">
        INSTCon 2026
      </span>
    </header>
  );
}
