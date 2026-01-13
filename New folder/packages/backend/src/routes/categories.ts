import { Router } from 'express';
import prisma from '../prisma';

const router = Router();

// GET all categories
router.get('/', async (req, res) => {
  const categories = await prisma.category.findMany({
    include: {
      subCategories: true,
    },
  });
  res.json(categories);
});

// GET category by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const category = await prisma.category.findUnique({
    where: { id },
    include: {
      subCategories: true,
      products: true,
    },
  });
  res.json(category);
});

// POST create category
router.post('/', async (req, res) => {
  const { name, slug, displayOrder, parentId } = req.body;
  const category = await prisma.category.create({
    data: {
      name,
      slug,
      displayOrder,
      parentId,
    },
  });
  res.json(category);
});

export default router;
