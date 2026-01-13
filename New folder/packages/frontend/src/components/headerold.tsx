import { ShoppingBagIcon } from '@heroicons/react/24/outline'

export const Header = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">zaptozip</span>
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">⚡ zaptozip</span>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/men" className="text-sm font-semibold leading-6 text-gray-900">Men</a>
          <a href="/women" className="text-sm font-semibold leading-6 text-gray-900">Women</a>
          <a href="/boys" className="text-sm font-semibold leading-6 text-gray-900">Boys</a>
          <a href="/girls" className="text-sm font-semibold leading-6 text-gray-900">Girls</a>
          <a href="/sale" className="text-sm font-semibold leading-6 text-gray-900">Sale</a>
          <a href="/new-arrivals" className="text-sm font-semibold leading-6 text-gray-900">New Arrivals</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <a href="/admin" className="text-sm font-semibold leading-6 text-gray-900">Admin</a>
          <a href="/account" className="text-sm font-semibold leading-6 text-gray-900">Account</a>
          <a href="/cart" className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon
              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
            <span className="sr-only">items in cart, view bag</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
