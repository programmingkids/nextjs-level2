import { ProductHeader } from "@/components/productHeader";

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-gray-500 text-white text-xl">Not Found</h1>
      <div className="p-4">プロダクトが存在しません</div>
      <div className="p-4">URLを確認のうえ、再度アクセスしてください</div>
      <ProductHeader />
    </div>
  );
}
