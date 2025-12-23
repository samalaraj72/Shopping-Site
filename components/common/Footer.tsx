import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

                    {/* Newsletter */}
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider">
                            SEE IT FIRST
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Get 20% off your first purchase when you sign up for our emails.
                        </p>
                        <form className="mt-4 flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-navy-900 focus:outline-none focus:ring-1 focus:ring-navy-900 sm:text-sm"
                            />
                            <button
                                type="submit"
                                className="flex-shrink-0 rounded-md border border-transparent bg-navy-900 px-4 py-2 text-sm font-medium text-white hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2"
                            >
                                Join
                            </button>
                        </form>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider">
                            CUSTOMER SUPPORT
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-navy-900">Customer Service</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-navy-900">Buy Online. Pick Up In-Store.</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-navy-900">Store Locator</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-navy-900">Returns & Exchanges</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider">
                            GAP GOOD REWARDS
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-navy-900">Join Gap Good Rewards</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-navy-900">Apply for a GapCard</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-navy-900">My Points & Rewards</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-navy-900">Pay Bill</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider">
                            ABOUT US
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-navy-900">Sustainability</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-navy-900">Careers</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-navy-900">Who We Are</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">© 2024 Gap Inc. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">YouTube</span>
                            <Youtube className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
