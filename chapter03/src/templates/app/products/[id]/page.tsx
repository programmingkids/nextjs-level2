import { ProductHeader } from "@/components/productHeader";

type ProductProps = {
  params: {
    id: string;
  };
};

export default function Page({ params: { id } }: ProductProps) {
  return (
    <div className="main">
      <h1 className="p-4 bg-amber-500 text-xl">Products / {id}</h1>
      <ProductHeader />
      <div className="py-4 px-6">
        <h1 className="text-xl">Product {id}</h1>
        <div className="py-4 text-start">
          {("Product" + id + ", ").repeat(100)}
        </div>
      </div>
    </div>
  );
}
