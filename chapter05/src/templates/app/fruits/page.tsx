export default function Page() {
  // 必ずエラーが発生する
  throw new Error("this is fruits error");

  // JSXは表示されないので意味ない
  return (
    <div className="main mb-4">
      <h1 className="p-4 bg-sky-200 text-xl">Color</h1>
      <div>
        <li>Apple</li>
        <li>Orange</li>
        <li>Melon</li>
        <li>Grape</li>
      </div>
    </div>
  );
}
