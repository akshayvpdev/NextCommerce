import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">Your trusted source for premium tech products.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-primary">Shipping</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">Email: support@techstore.com</p>
            <p className="text-gray-600">Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; 2024 TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}