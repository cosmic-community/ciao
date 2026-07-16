export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export type InventoryStatus = 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Pre-Order';

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    banner_image?: CosmicImage;
    display_order?: number;
  };
}

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name?: string;
    description?: string;
    price?: number;
    sale_price?: number;
    sku?: string;
    main_image?: CosmicImage;
    gallery?: CosmicImage[];
    inventory_status?: InventoryStatus | { key: string; value: string };
    available_quantity?: number;
    materials_care?: string;
    category?: Category;
    featured?: boolean;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    reviewer_name?: string;
    headline?: string;
    rating?: number;
    review_text?: string;
    verified_purchase?: boolean;
    product?: Product;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}