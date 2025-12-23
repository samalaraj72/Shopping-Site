import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { href: "/category/new", label: "New" },
    { href: "/category/women", label: "Women" },
    { href: "/category/men", label: "Men" },
    { href: "/category/girls", label: "Girls" },
    { href: "/category/boys", label: "Boys" },
    { href: "/category/toddler", label: "Toddler" },
    { href: "/category/baby", label: "Baby" },
    { href: "/category/maternity", label: "Maternity" },
    { href: "/category/jeans", label: "Jeans" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="flex flex-col">
                {/* Top promo bar */}
                <div className="bg-navy-900 px-4 py-2 text-center text-xs font-semibold text-white sm:text-sm">
                    FREE SHIPPING ON $50+ FOR REWARDS MEMBERS
                </div>

                {/* Main Header */}
                <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <span className="bg-navy-900 px-3 py-1 text-2xl font-bold tracking-tight text-white">
                            GAP
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-navy-900"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* Search - expanded on desktop, icon on mobile */}
                        <div className="hidden items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 md:flex">
                            <Search className="h-4 w-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search Gap"
                                className="bg-transparent text-sm outline-none placeholder:text-gray-500 w-32 focus:w-48 transition-all"
                            />
                        </div>
                        <button className="md:hidden">
                            <Search className="h-6 w-6 text-gray-700" />
                        </button>

                        {/* Account */}
                        <Link href="/account" className="flex flex-col items-center">
                            <User className="h-6 w-6 text-gray-700" />
                        </Link>

                        {/* Cart */}
                        <Link href="/cart" className="flex items-center gap-1">
                            <ShoppingBag className="h-6 w-6 text-gray-700" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
