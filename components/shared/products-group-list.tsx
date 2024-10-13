import { FC } from "react";
import { cn } from "@/lib/utils";
import { Title } from "@/components/shared/title";
import { ProductCard } from "@/components/shared/product-card";

interface ProductsGroupListProps {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: FC<ProductsGroupListProps> = ({
  className,
  title,
  items,
  listClassName,
  categoryId,
}) => {
  return (
    <div className={cn("", className)}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
