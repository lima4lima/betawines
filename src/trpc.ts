import { createTRPCClient } from '@trpc/client';
import { router } from '~/api'; // Replace 'AppRouter' with 'router'

export const client = createTRPCClient<typeof router>({ // use 'typeof router' here
  url: 'http://localhost:3000/api/trpc', // replace with server's address
});
