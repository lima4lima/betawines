import { createRouter } from '@trpc/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { z, ZodType } from 'zod';

const prisma = new PrismaClient();

const RegisterInput = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(8),
});

const LoginInput = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const UserRouter = createRouter()
  .mutation('register', {
    input: RegisterInput,
    resolve: async ({ input }: { input: z.infer<typeof RegisterInput> }) => {
      const hashedPassword = await bcrypt.hash(input.password, 10);
      const user = await prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
          password: hashedPassword,
        },
      });
      return user;
    },
  })
  .mutation('login', {
    input: LoginInput,
    resolve: async ({ input }: { input: z.infer<typeof LoginInput> }) => {
      const user = await prisma.user.findUnique({
        where: { email: input.email },
      });
      if (!user) throw new Error('Invalid login');

      const passwordValid = await bcrypt.compare(input.password, user.password);
      if (!passwordValid) throw new Error('Invalid login');

      return user;
    },
  });
