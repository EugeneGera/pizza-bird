import { FC } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  id: number;
  imageUrl?: string;
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  className,
  imageUrl,
  name,
  price,
  id,
}) => {
  return (
    <div className={cn("", className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size={"sm"} className={"mb-1 mt-3 font-bold"} />
        <p className="text-sm text-gray-400">
          Пряная говядина, шампиньоны, ароматный грибной соус, маринованные
          огурчики, моцарелла, красный лук, фирменный соус альфредо
        </p>
      </Link>
      <div className="flex justify-between items-center mt-4">
        <span className={"text-[20px]"}>
          от <b>{price} ₽</b>
        </span>
        <Button variant="secondary">
          <Plus size={16} className="mr-1" />
          Добавить
        </Button>
      </div>
    </div>
  );
};
