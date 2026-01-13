import { Router } from 'express';
import prisma from '../prisma';

const router = Router();

// GET all users
router.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// GET user by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id },
  });
  res.json(user);
});

// POST create user
router.post('/', async (req, res) => {
  const { email, firstName, lastName, passwordHash } = req.body;
  const user = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      passwordHash,
    },
  });
  res.json(user);
});

export default router;
