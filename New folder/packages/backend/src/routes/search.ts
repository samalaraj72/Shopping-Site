import { Router } from 'express';
import prisma from '../prisma';

const router = Router();

// Search products
router.get('/', async (req, res) => {
  try {
    const { q, category, minPrice, maxPrice, sort } = req.query;

    const where: any = {
      isActive: true,
    };

    // Search by name or description
    if (q) {
      where.OR = [
        { name: { contains: q as string, mode: 'insensitive' } },
        { description: { contains: q as string, mode: 'insensitive' } },
      ];
    }

    // Filter by category
    if (category) {
      where.categoryId = category;
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      where.basePrice = {};
      if (minPrice) where.basePrice.gte = parseFloat(minPrice as string);
      if (maxPrice) where.basePrice.lte = parseFloat(maxPrice as string);
    }

    // Determine sorting
    let orderBy: any = { createdAt: 'desc' };
    if (sort === 'price-asc') orderBy = { basePrice: 'asc' };
    if (sort === 'price-desc') orderBy = { basePrice: 'desc' };
    if (sort === 'rating') orderBy = { rating: 'desc' };

    const products = await prisma.product.findMany({
      where,
      orderBy,
      include: {
        category: true,
        images: true,
      },
      take: 50,
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to search products' });
  }
});

export default router;
