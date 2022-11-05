import { useState } from "react";
import { Floating, ItemType, Product, Receipt } from "../../components";
import { Solution, SolutionType } from "./solutions.content";
import { products } from "./solutions.data";

export const SolutionEcommerce: React.FC<SolutionType> = (props) => {
  const [basket, setBasket] = useState<ItemType[]>([products[0], products[1]]);
  return (
    <Solution content={props.content} isReversed={props.isReversed}>
      <div className="relative flex items-center  justify-center gap-6 ">
        <Floating>
          <Product products={products} onBuy={(product) => setBasket((prev) => [...prev, product])} />
        </Floating>
        <Floating delay={0.7}>
          <Receipt items={basket} title="Bonnetje" />
        </Floating>
      </div>
    </Solution>
  );
};
