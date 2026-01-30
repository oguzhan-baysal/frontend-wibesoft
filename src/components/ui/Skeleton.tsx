import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200 rounded",
        className
      )}
      aria-hidden="true"
    />
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col">
      <Skeleton className="aspect-square w-full rounded-2xl mb-4" />
      <Skeleton className="h-5 w-3/4 mb-2" />
      <div className="flex items-center gap-2 mb-2">
        <Skeleton className="h-4 w-20" />
      </div>
      <Skeleton className="h-6 w-1/3" />
    </div>
  );
};

export const ProductDetailSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="flex md:flex-col gap-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="w-20 h-20 rounded-xl" />
          ))}
        </div>
        <Skeleton className="flex-1 aspect-square rounded-2xl" />
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-14 w-full rounded-full" />
      </div>
    </div>
  );
};
