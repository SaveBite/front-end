interface Props {
  item: {
    productName: string;
    category: string;
    price: number;
    quantity: number;
    reorderLevel: number;
    reorderQuantity: number;
    unitsSold: number;
    salesValue: number;
  };
}

function StockItemCell({ item }: Props) {
  const {
    productName,
    category,
    price,
    quantity,
    reorderLevel,
    reorderQuantity,
    unitsSold,
    salesValue,
  } = item;
  return (
    <div className="w-full flex bg-white">
      <span className="flex-1 py-[8px] px-[20px]">{productName}</span>
      <span className="flex-1 py-[8px] px-[20px]">{category}</span>
      <span className="flex-1 py-[8px] px-[20px]">{reorderQuantity}</span>
    </div>
  );
}

export default StockItemCell;
