import { Router } from 'express';
import prisma from '../prisma';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Get user's wishlist
router.get('/', authenticateToken, async (req, res) => {
  try {
    const wishlist = await prisma.wishlist.findUnique({
      where: { userId: req.userId },
      include: {
        items: {
          include: {
            product: {
              include: {
                images: true,
                category: true,
              },
            },
          },
        },
      },
    });

    res.json(wishlist || { items: [] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch wishlist' });
  }
});

// Add item to wishlist
router.post('/items', authenticateToken, async (req, res) => {
  try {
    const { productId } = req.body;

    // Find or create wishlist
    let wishlist = await prisma.wishlist.findUnique({
      where: { userId: req.userId },
    });

    if (!wishlist) {
      wishlist = await prisma.wishlist.create({
        data: {
          userId: req.userId!,
        },
      });
    }

    // Check if already in wishlist
    const existing = await prisma.wishlistItem.findFirst({
      where: {
        wishlistId: wishlist.id,
        productId,
      },
    });

    if (existing) {
      return res.status(400).json({ message: 'Item already in wishlist' });
    }

    await prisma.wishlistItem.create({
      data: {
        wishlistId: wishlist.id,
        productId,
      },
    });

    res.json({ message: 'Item added to wishlist' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add item to wishlist' });
  }
});

// Remove item from wishlist
router.delete('/items/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.wishlistItem.delete({
      where: { id },
    });

    res.json({ message: 'Item removed from wishlist' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove item' });
  }
});

export default router;
