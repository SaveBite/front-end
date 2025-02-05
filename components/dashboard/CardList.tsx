"use client";
import { useStock } from "@/contexts/Stock";
import Card from "./Card";

function CardList() {
  const { statistics } = useStock()!;
  const { stockInHand, positiveStock, negativeStock, belowPar, belowMinimum } =
    statistics!;
  return (
    <>
      {statistics?.stockInHand && (
        <div className={`flex gap-4 w-[90%] m-auto py-[30px] `}>
          <Card
            title="stockInHand"
            data={stockInHand}
            icon="/dashboard/cashIcon.svg"
          />
          <Card
            title="positiveStock"
            data={positiveStock}
            icon="/dashboard/positive.svg"
          />
          <Card
            title="negativeStock"
            data={negativeStock}
            icon="/dashboard/negative.svg"
          />
          <Card title="belowPar" data={belowPar} icon="/dashboard/par.svg" />
          <Card
            title="belowMinimum"
            data={belowMinimum}
            icon="/dashboard/minimum.svg"
          />
        </div>
      )}
    </>
  );
}

export default CardList;
