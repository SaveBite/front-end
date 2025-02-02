import Card from "./Card";

function CardList() {
  return (
    <div className="flex gap-4 w-[90%] m-auto py-[30px] ">
      <Card
        title="stockInHand"
        data="59.700 Egp"
        icon="/dashboard/cashIcon.svg"
      />
      <Card title="positiveStock" data="155" icon="/dashboard/positive.svg" />
      <Card title="negativeStock" data="88" icon="/dashboard/negative.svg" />
      <Card title="belowBar" data="93" icon="/dashboard/par.svg" />
      <Card title="belowMinimum" data="26" icon="/dashboard/minimum.svg" />
    </div>
  );
}

export default CardList;
