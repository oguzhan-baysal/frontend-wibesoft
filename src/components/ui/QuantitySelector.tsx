import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
  size = "md",
  className,
}: QuantitySelectorProps) => {
  const sizes = {
    sm: {
      container: "h-8",
      button: "w-8 text-sm",
      text: "w-8 text-sm",
    },
    md: {
      container: "h-10",
      button: "w-10 text-base",
      text: "w-10 text-base",
    },
    lg: {
      container: "h-12",
      button: "w-12 text-lg",
      text: "w-12 text-lg",
    },
  };

  const handleDecrease = () => {
    if (quantity > min) {
      onDecrease();
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onIncrease();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    action: "increase" | "decrease"
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (action === "increase") {
        handleIncrease();
      } else {
        handleDecrease();
      }
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center bg-gray-100 rounded-full",
        sizes[size].container,
        className
      )}
    >
      <button
        type="button"
        onClick={handleDecrease}
        onKeyDown={(e) => handleKeyDown(e, "decrease")}
        disabled={quantity <= min}
        className={cn(
          "flex items-center justify-center rounded-l-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          sizes[size].button,
          sizes[size].container
        )}
        aria-label="Decrease quantity"
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12H4"
          />
        </svg>
      </button>
      <span
        className={cn(
          "flex items-center justify-center font-medium",
          sizes[size].text
        )}
        aria-label={`Quantity: ${quantity}`}
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={handleIncrease}
        onKeyDown={(e) => handleKeyDown(e, "increase")}
        disabled={quantity >= max}
        className={cn(
          "flex items-center justify-center rounded-r-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          sizes[size].button,
          sizes[size].container
        )}
        aria-label="Increase quantity"
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};
