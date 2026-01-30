"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useGetProductById } from "@/api/generated";
import { useCartStore } from "@/store/useCartStore";
import {
  Button,
  Rating,
  QuantitySelector,
  ProductDetailSkeleton,
  ErrorMessage,
} from "@/components/ui";
import { formatPrice, cn } from "@/lib/utils";

const AVAILABLE_COLORS = [
  { name: "Brown", value: "#4A3728" },
  { name: "Green", value: "#314F4A" },
  { name: "Navy", value: "#31344F" },
];

const AVAILABLE_SIZES = ["Small", "Medium", "Large", "X-Large"];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);

  const [selectedColor, setSelectedColor] = useState(AVAILABLE_COLORS[0].name);
  const [selectedSize, setSelectedSize] = useState(AVAILABLE_SIZES[1]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const addItem = useCartStore((state) => state.addItem);

  const {
    data: product,
    isLoading,
    isError,
    refetch,
  } = useGetProductById({ id: productId });

  const handleAddToCart = () => {
    if (!product) return;

    addItem({
      id: product.id || 0,
      title: product.title || "",
      price: product.price || 0,
      image: product.image || "",
      quantity,
      size: selectedSize,
      color: selectedColor,
    });

    // Reset quantity after adding
    setQuantity(1);
  };

  const handleColorSelect = (colorName: string) => {
    setSelectedColor(colorName);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ProductDetailSkeleton />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorMessage
          title="Product not found"
          message="We couldn't find the product you're looking for. It may have been removed or doesn't exist."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  // API'de olmayan veriler için varsayılanlar
  const rating = product.rating?.rate || 4.5;
  const reviewCount = product.rating?.count || 150;
  const originalPrice = product.price || 0;
  const hasDiscount = productId % 3 === 0;
  const discountPercentage = hasDiscount ? 20 : 0;
  const discountedPrice = hasDiscount
    ? originalPrice * (1 - discountPercentage / 100)
    : originalPrice;

  // Demo için birden fazla görsel simülasyonu
  const productImages = [product.image, product.image, product.image];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/" className="hover:text-black transition-colors">
              Shop
            </Link>
          </li>
          <li>/</li>
          <li className="text-black font-medium truncate max-w-[200px]">
            {product.title}
          </li>
        </ol>
      </nav>

      {/* Product Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
            {productImages.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all",
                  selectedImage === index
                    ? "border-black"
                    : "border-transparent hover:border-gray-300"
                )}
                aria-label={`View image ${index + 1}`}
                tabIndex={0}
              >
                <div className="relative w-full h-full bg-gray-100">
                  <Image
                    src={img || "/placeholder.png"}
                    alt={`${product.title} thumbnail ${index + 1}`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src={productImages[selectedImage] || "/placeholder.png"}
              alt={product.title || "Product image"}
              fill
              className="object-contain p-8"
              priority
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <Rating rating={rating} size="md" showValue={false} />
            <span className="text-sm text-gray-600">
              {rating}/5 ({reviewCount} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl md:text-3xl font-bold">
              {formatPrice(discountedPrice)}
            </span>
            {hasDiscount && (
              <>
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(originalPrice)}
                </span>
                <span className="bg-red-100 text-red-600 text-sm font-medium px-3 py-1 rounded-full">
                  -{discountPercentage}%
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="border-t border-gray-200 pt-6">
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-3">
                Select Colors
              </h3>
              <div className="flex gap-3">
                {AVAILABLE_COLORS.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => handleColorSelect(color.name)}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                      selectedColor === color.name
                        ? "ring-2 ring-offset-2 ring-black"
                        : ""
                    )}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name} color`}
                    tabIndex={0}
                  >
                    {selectedColor === color.name && (
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-3">
                Choose Size
              </h3>
              <div className="flex flex-wrap gap-3">
                {AVAILABLE_SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleSizeSelect(size)}
                    className={cn(
                      "px-6 py-3 rounded-full font-medium text-sm transition-all",
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                    aria-label={`Select size ${size}`}
                    tabIndex={0}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <QuantitySelector
                quantity={quantity}
                onIncrease={handleQuantityIncrease}
                onDecrease={handleQuantityDecrease}
                size="lg"
              />
              <Button
                onClick={handleAddToCart}
                size="lg"
                fullWidth
                className="flex-1"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
