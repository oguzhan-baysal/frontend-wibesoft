import { cn } from "@/lib/utils";

interface RatingProps {
  rating: number;
  maxRating?: number;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Rating = ({
  rating,
  maxRating = 5,
  showValue = true,
  size = "md",
  className,
}: RatingProps) => {
  const sizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const renderStar = (index: number) => {
    const filled = index < Math.floor(rating);
    const partial = index === Math.floor(rating) && rating % 1 !== 0;
    const fillPercentage = partial ? (rating % 1) * 100 : 0;

    return (
      <div key={index} className="relative">
        {/* Empty star */}
        <svg
          className={cn(sizes[size], "text-gray-200")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        {/* Filled star (overlay) */}
        {(filled || partial) && (
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: filled ? "100%" : `${fillPercentage}%` }}
          >
            <svg
              className={cn(sizes[size], "text-yellow-400")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
    >
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, i) => renderStar(i))}
      </div>
      {showValue && (
        <span className={cn("text-gray-600 ml-1", textSizes[size])}>
          {rating.toFixed(1)}/5
        </span>
      )}
    </div>
  );
};
