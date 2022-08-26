import React from "react";
import StoryblokImage from "../StoryblokImage";

interface ReceiptProps {
  products: {
    id: string;
    title: string;
    color: string;
    price: string;
    image: string;
  }[];
}

const Receipt: React.FC<ReceiptProps> = ({ products }) => {
  return (
    <div className="w-[320px] rounded-lg bg-dark-purple-600 p-5">
      <div className="border-b-2 border-dark-purple-400 pb-5">
        <p className="body-2  text-teal-500">Your Order</p>
      </div>

      <div className="h-[240px] overflow-scroll">
        {products.map((el) => {
          return (
            <div
              key={el.id}
              className="border-b-3 my-5 flex gap-4 border-dark-purple-400  last:border-b-0"
            >
              <div>
                <div className="grid h-full w-14 items-center rounded-lg bg-dark-purple-500">
                  <StoryblokImage
                    filename={el.image}
                    alt=""
                    is_external_url={false}
                    size={300}
                    lazy={true}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="body-2 font-bold">{el.title}</p>
                <div className="flex items-center gap-2">
                  <span className="body-1">Color</span>
                  <img className="h-3 w-3 rounded-full" src={el.color} />
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="body-2">{el.price}</p>
                  <div className="rounded-lg bg-dark-purple-500 px-3 text-grey-200">
                    <span className="body-1">1 </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="body-1 border-b-2 border-t-2 border-dark-purple-400 py-5 pb-5">
        <div className="mb-1 flex justify-between">
          <p>Delivery</p>
          <p>€ 4,95</p>
        </div>
        <div className="flex justify-between">
          <p>Discount</p>
          <p>€ 10</p>
        </div>
      </div>

      <div className="flex items-baseline justify-between pt-5">
        <p className="body-1">Total</p>
        <p className="body-3 font-bold ">€ 120,00</p>
      </div>
    </div>
  );
};

export default Receipt;
