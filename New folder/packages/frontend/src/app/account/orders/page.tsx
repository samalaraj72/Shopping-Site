const orders = [
  {
    number: 'WU88191111',
    date: 'January 22, 2021',
    datetime: '2021-01-22',
    href: '#',
    invoiceHref: '#',
    total: '$302.00',
    products: [
      {
        id: 1,
        name: 'Nomad Tumbler',
        description:
          'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
        href: '#',
        price: '$35.00',
        status: 'out-for-delivery',
        date: 'January 5, 2021',
        datetime: '2021-01-05',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg',
        imageAlt: 'Olive drab green insulated tumbler with matching screw-on lid.',
      },
      // More products...
    ],
  },
  // More orders...
]

export default function OrdersPage() {
  return (
    <div>
      <div className="py-6 px-4 sm:p-6 lg:pb-8">
        <h2 className="text-lg font-medium leading-6 text-gray-900">Order history</h2>
        <p className="mt-1 text-sm text-gray-500">
          Check the status of recent orders, manage returns, and discover similar products.
        </p>
      </div>
      <div className="mt-8">
        <div className="space-y-20">
          {orders.map((order) => (
            <div key={order.number}>
              <h3 className="sr-only">
                Order placed on <time dateTime={order.datetime}>{order.date}</time>
              </h3>

              <div className="rounded-lg bg-gray-50 px-4 py-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
                <dl className="flex-auto space-y-4 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                  <div className="flex justify-between sm:block">
                    <dt className="font-medium text-gray-900">Date placed</dt>
                    <dd className="sm:mt-1">
                      <time dateTime={order.datetime}>{order.date}</time>
                    </dd>
                  </div>
                  <div className="flex justify-between pt-4 sm:block sm:pt-0">
                    <dt className="font-medium text-gray-900">Order number</dt>
                    <dd className="sm:mt-1">{order.number}</dd>
                  </div>
                  <div className="flex justify-between pt-4 font-medium text-gray-900 sm:block sm:pt-0">
                    <dt>Total amount</dt>
                    <dd className="sm:mt-1">{order.total}</dd>
                  </div>
                </dl>
                <a
                  href={order.invoiceHref}
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
                >
                  View Invoice
                  <span className="sr-only">for order {order.number}</span>
                </a>
              </div>

              <ul role="list" className="mt-6 divide-y divide-gray-200">
                {order.products.map((product) => (
                  <li key={product.id} className="flex space-x-6 py-6">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                    />
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto space-y-1 text-sm font-medium">
                          <h4 className="text-gray-900">{product.name}</h4>
                          <p className="text-gray-900">{product.price}</p>
                        </div>
                        <div className="flex flex-none space-x-4">
                          <a
                            href={product.href}
                            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            View Product
                            <span className="sr-only">, {product.name}</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Buy Again
                            <span className="sr-only">, {product.name}</span>
                          </a>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
