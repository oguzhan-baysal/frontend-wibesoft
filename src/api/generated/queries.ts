import { useQuery } from "@tanstack/react-query";
import { ProductsService } from "./requests/services.gen";
import type { GetProductsByIdData, Product } from "./requests/types.gen";

// Query Keys
export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (filters?: Record<string, unknown>) => [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: number) => [...productKeys.details(), id] as const,
};

// Hook: Get all products
export const useGetAllProducts = () => {
  return useQuery({
    queryKey: productKeys.lists(),
    queryFn: () => ProductsService.getProducts(),
  });
};

// Hook: Get product by ID
export const useGetProductById = (data: GetProductsByIdData) => {
  return useQuery({
    queryKey: productKeys.detail(data.id),
    queryFn: () => ProductsService.getProductsById(data),
    enabled: !!data.id,
  });
};

// Re-export types
export type { Product, GetProductsByIdData } from "./requests/types.gen";
