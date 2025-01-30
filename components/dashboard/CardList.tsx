import Card from "./Card";

function CardList() {
  return (
    <div className="flex gap-4 w-[90%] m-auto py-[30px] ">
      <Card
        title="Stock in Hand"
        data="59.700 Egp"
        icon="/dashboard/cashIcon.svg"
      />
      <Card title="Positive Stock" data="155" icon="/dashboard/positive.svg" />
      <Card title="Negative Stock" data="88" icon="/dashboard/negative.svg" />
      <Card title="Below Par" data="93" icon="/dashboard/par.svg" />
      <Card title="Below Minimum" data="26" icon="/dashboard/minimum.svg" />
    </div>
  );
}

export default CardList;
