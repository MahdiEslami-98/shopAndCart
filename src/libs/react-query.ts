import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      throwOnError: false,
      staleTime: 1000 * 60 * 3,
      gcTime: 1000 * 60 * 5,
    },
  },
});

export default queryClient;
