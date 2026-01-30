export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const cn = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const generateRandomRating = (): { rate: number; count: number } => {
  return {
    rate: Math.round((Math.random() * 2 + 3) * 10) / 10,
    count: Math.floor(Math.random() * 500) + 50,
  };
};

export const generateRandomDiscount = (): number | null => {
  const hasDiscount = Math.random() > 0.5;
  if (!hasDiscount) return null;
  return Math.floor(Math.random() * 30) + 10;
};

export const calculateDiscountedPrice = (
  originalPrice: number,
  discountPercentage: number
): number => {
  return originalPrice * (1 - discountPercentage / 100);
};
