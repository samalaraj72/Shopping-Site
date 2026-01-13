'use client'
import { useEffect, useState, Fragment } from 'react'
import { ContentClient, HierarchyContentItem } from 'dc-delivery-sdk-js'
import clsx from 'clsx';
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface ContentMeta {
  schema: string;
  name: string;
  deliveryId: string;
  hierarchy: {
    parentId: string;
    root: boolean;
    position: string;
  };
}

interface Content {
  _meta: ContentMeta;
  title: string;
  description: string;
  url?: string;
}

interface MenuItem {
  content: Content;
  children: MenuItem[];
}



const client = new ContentClient({
  hubName: 'jeanstag'
});

export const Header = () => {
  const [headerMenu, setHeaderMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchHeaderMenu = async () => {
      try {
        const menu = await client.getByHierarchy<any>({

          rootId: '157de3f0-c1e4-4de3-a077-4ba451e1df21',
          // optional tuning:
          maximumDepth: 10,        // up to 14 in the HTTP API
          // maximumPageSize: 100,   // CDv2 hierarchies page size
          // sortKey: 'yourSortKey', // matches your schema’s sort key
          // sortOrder: 'ASC'  

        });
        debugger;
        if (menu && menu.children) {
          debugger;
          console.log(menu?.children);
          setHeaderMenu(menu?.children);
        }
      } catch (error) {
        console.error('Failed to fetch footer menu:', error);
      }
    };

    fetchHeaderMenu();
  }, []);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">zaptozip</span>
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">⚡ zaptozip</span>
          </a>
        </div>
        
<Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {headerMenu?.map((category) => (
          <Popover key={category.content._meta.deliveryId} className="relative flex">
            {({ open }) => (
              <>
                <div className="relative flex">
                  <Popover.Button
                    className={classNames(
                      open
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-700 hover:text-gray-800',
                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                    )}
                  >
                    {category.content.title}
                  </Popover.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="fixed inset-0 z-20 bg-white p-4">
                    <div className="mx-auto flex h-full max-w-7xl flex-col overflow-y-auto px-8">
                      <div className="flex justify-end pt-4">
                        <Popover.Button className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                      <div className="mx-auto mt-6 max-w-7xl px-8">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                          {category.children.map((section) => (
                            <div key={section.content._meta.deliveryId}>
                              <p id={`${section.content._meta.deliveryId}-heading`} className="font-medium text-gray-900">
                                {section.content.title || 'Title'}
                              </p>
                              <ul
                                role="list"
                                aria-labelledby={`${section.content._meta.deliveryId}-heading`}
                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                              >
                                {section.children.map((item) => (
                                  <li key={item.content._meta.deliveryId} className="flex">
                                    <a href={item.content.url} className="hover:text-gray-800">
                                      {item.content.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}
      </div>
    </Popover.Group>

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
