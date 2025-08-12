import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 bg-gray-100 border-b">
      <nav className="container flex gap-4">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/about" className="text-blue-600 hover:underline">About Us</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>
    </header>
  );
}