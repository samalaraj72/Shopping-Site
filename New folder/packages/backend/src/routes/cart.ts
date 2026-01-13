import { Router } from 'express';
import prisma from '../prisma';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Get user's cart
router.get('/', authenticateToken, async (req, res) => {
  try {
    const cart = await prisma.cart.findUnique({
      where: { userId: req.userId },
      include: {
        items: {
          include: {
            productVariant: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });

    if (!cart) {
      return res.json({ items: [], total: 0 });
    }

    const total = cart.items.reduce((sum: number, item: any) => sum + item.price * item.qty, 0);
    res.json({ ...cart, total });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cart' });
  }
});

// Add item to cart
router.post('/items', authenticateToken, async (req, res) => {
  try {
    const { productVariantId, qty } = req.body;

    // Find or create cart
    let cart = await prisma.cart.findUnique({
      where: { userId: req.userId },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId: req.userId!,
          status: 'ACTIVE',
        },
      });
    }

    // Get product variant
    const variant = await prisma.productVariant.findUnique({
      where: { id: productVariantId },
    });

    if (!variant) {
      return res.status(404).json({ message: 'Product variant not found' });
    }

    // Check if item already exists
    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productVariantId,
      },
    });

    if (existingItem) {
      // Update quantity
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { qty: existingItem.qty + qty },
      });
    } else {
      // Create new item
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productVariantId,
          qty,
          price: variant.price,
        },
      });
    }

    res.json({ message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add item to cart' });
  }
});

// Update cart item quantity
router.patch('/items/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { qty } = req.body;

    await prisma.cartItem.update({
      where: { id },
      data: { qty },
    });

    res.json({ message: 'Cart updated' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update cart' });
  }
});

// Remove item from cart
router.delete('/items/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.cartItem.delete({
      where: { id },
    });

    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove item' });
  }
});

export default router;
