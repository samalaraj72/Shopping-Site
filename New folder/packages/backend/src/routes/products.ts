import { Router } from 'express';
import prisma from '../prisma';

const router = Router();

// GET all products
router.get('/', async (req, res) => {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      variants: true,
      images: true,
    },
  });
  res.json(products);
});

// GET product by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      variants: true,
      images: true,
      reviews: true,
    },
  });
  res.json(product);
});

// POST create product
router.post('/', async (req, res) => {
  const { name, slug, description, categoryId, brandId, basePrice, discountPrice } = req.body;
  const product = await prisma.product.create({
    data: {
      name,
      slug,
      description,
      categoryId,
      brandId,
      basePrice,
      discountPrice,
    },
  });
  res.json(product);
});

export default router;
