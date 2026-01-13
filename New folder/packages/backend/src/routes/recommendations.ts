import { Router } from 'express';
import prisma from '../prisma';
import { optionalAuth } from '../middleware/auth';

const router = Router();

// Get recommended products (simple algorithm based on popularity and user history)
router.get('/', optionalAuth, async (req, res) => {
  try {
    let recommendedProducts;

    if (req.userId) {
      // Get user's order history
      const orders = await prisma.order.findMany({
        where: { userId: req.userId },
        include: {
          items: {
            include: {
              productVariant: {
                include: {
                  product: {
                    include: {
                      category: true,
                    },
                  },
                },
              },
            },
          },
        },
        take: 5,
      });

      // Extract categories from user's purchases
      const purchasedCategories = orders
        .flatMap((order: any) => order.items.map((item: any) => item.productVariant.product.categoryId))
        .filter((id: string, index: number, self: string[]) => self.indexOf(id) === index);

      // Get products from similar categories
      if (purchasedCategories.length > 0) {
        recommendedProducts = await prisma.product.findMany({
          where: {
            categoryId: { in: purchasedCategories },
            isActive: true,
          },
          orderBy: [{ rating: 'desc' }, { totalReviews: 'desc' }],
          include: {
            category: true,
            images: true,
          },
          take: 12,
        });
      }
    }

    // Fallback: Get trending/popular products
    if (!recommendedProducts || recommendedProducts.length === 0) {
      recommendedProducts = await prisma.product.findMany({
        where: { isActive: true },
        orderBy: [{ rating: 'desc' }, { totalReviews: 'desc' }],
        include: {
          category: true,
          images: true,
        },
        take: 12,
      });
    }

    res.json(recommendedProducts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch recommendations' });
  }
});

// Get trending products
router.get('/trending', async (req, res) => {
  try {
    // Get products with most recent orders
    const products = await prisma.product.findMany({
      where: { isActive: true },
      orderBy: [{ totalReviews: 'desc' }, { rating: 'desc' }],
      include: {
        category: true,
        images: true,
      },
      take: 20,
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch trending products' });
  }
});

export default router;
