import { createRouter } from '@trpc/server';

import { UserRouter } from '~/routers/user';

export const router = createRouter()
  .merge('user.', UserRouter);
