import { ProductHeader } from '@/components/productHeader';

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-amber-500 text-xl text-white">Product List</h1>
      <ProductHeader />
    </div>
  );
}
