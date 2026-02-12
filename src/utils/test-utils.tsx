import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
}

export function withQueryClient(ui: React.ReactNode) {
  const testClient = createTestQueryClient();
  return <QueryClientProvider client={testClient}>{ui}</QueryClientProvider>;
}
