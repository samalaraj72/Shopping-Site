const products = [
  {
    id: 1,
    name: 'Relaxed Oxford Shirt',
    href: '/products/relaxed-oxford-shirt',
    imageSrc: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=800&fit=crop',
    imageAlt: 'White oxford button-down shirt',
    price: '$62',
    color: 'White',
  },
  {
    id: 2,
    name: 'Stretch Selvedge Jeans',
    href: '/products/stretch-selvedge-jeans',
    imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop',
    imageAlt: 'Dark wash selvedge denim jeans',
    price: '$98',
    color: 'Dark Wash',
  },
  {
    id: 3,
    name: 'Merino Wool Pullover',
    href: '/products/merino-wool-pullover',
    imageSrc: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop',
    imageAlt: 'Charcoal merino wool sweater',
    price: '$92',
    color: 'Charcoal',
  },
  {
    id: 4,
    name: 'Canvas Utility Jacket',
    href: '/products/canvas-utility-jacket',
    imageSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    imageAlt: 'Tan canvas utility jacket',
    price: '$118',
    color: 'Tan',
  },
  {
    id: 5,
    name: 'Performance Polo',
    href: '/products/performance-polo',
    imageSrc: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&h=800&fit=crop',
    imageAlt: 'Navy blue performance polo shirt',
    price: '$45',
    color: 'Navy',
  },
  {
    id: 6,
    name: 'Tech Joggers',
    href: '/products/tech-joggers',
    imageSrc: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop',
    imageAlt: 'Black technical jogger pants',
    price: '$68',
    color: 'Black',
  },
  {
    id: 7,
    name: 'Flannel Work Shirt',
    href: '/products/flannel-work-shirt',
    imageSrc: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop',
    imageAlt: 'Red and black flannel shirt',
    price: '$58',
    color: 'Red Plaid',
  },
  {
    id: 8,
    name: 'Slim Fit Blazer',
    href: '/products/slim-fit-blazer',
    imageSrc: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop',
    imageAlt: 'Charcoal slim fit blazer',
    price: '$245',
    color: 'Charcoal',
  },
]

export const Recommendations = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Personalized recommendations</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
