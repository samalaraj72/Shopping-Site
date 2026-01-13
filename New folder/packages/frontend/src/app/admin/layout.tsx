import { ReactNode } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/admin' },
  { name: 'Products', href: '/admin/products' },
  { name: 'Categories', href: '/admin/categories' },
  { name: 'Inventory', href: '/admin/inventory' },
  { name: 'Campaigns', href: '/admin/campaigns' },
  { name: 'Promo Codes', href: '/admin/promos' },
  { name: 'Orders', href: '/admin/orders' },
  { name: 'Returns', href: '/admin/returns' },
  { name: 'Users', href: '/admin/users' },
  { name: 'Analytics', href: '/admin/analytics' },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="px-2 py-6 sm:px-6 lg:col-span-3 lg:px-0 lg:py-0">
          <nav className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                <span className="truncate">{item.name}</span>
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
          {children}
        </div>
      </div>
    </div>
  );
}
