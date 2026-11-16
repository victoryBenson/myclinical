import { QueryClient } from "@tanstack/react-query";


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute
      gcTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      retry: 1,
    },
    mutations: {
      retry: 0,
    },
  },
});

/**
 * Cross-Tab Query Cache Synchronization via native BroadcastChannel.
 *
 * Automatically notifies other open browser tabs when data mutations occur
 * so cached queries are invalidated and refetched across tabs without full reloads.
 */
const CACHE_SYNC_CHANNEL_NAME = "ithere-care-cache-sync";

interface CacheSyncMessage {
  type: "invalidate-queries";
  queryKey: readonly unknown[];
}

let syncChannel: BroadcastChannel | null = null;

if (typeof window !== "undefined" && "BroadcastChannel" in window) {
  try {
    syncChannel = new BroadcastChannel(CACHE_SYNC_CHANNEL_NAME);
    syncChannel.onmessage = (event: MessageEvent<CacheSyncMessage>) => {
      if (event.data?.type === "invalidate-queries" && event.data.queryKey) {
        queryClient.invalidateQueries({
          queryKey: event.data.queryKey,
          refetchType: "active",
        });
      }
    };
  } catch (error) {
    console.warn("BroadcastChannel for query cache synchronization could not be initialized:", error);
  }
}


export const broadcastQueryInvalidation = (queryKey: readonly unknown[]) => {
  if (syncChannel) {
    try {
      syncChannel.postMessage({
        type: "invalidate-queries",
        queryKey,
      } satisfies CacheSyncMessage);
    } catch (error) {
      console.warn("Failed to broadcast query invalidation message:", error);
    }
  }
};
