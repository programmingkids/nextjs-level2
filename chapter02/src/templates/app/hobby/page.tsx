export default function Page() {
  const data = ["旅行", "カラオケ", "アニメ", "ゲーム"];

  return (
    <div className="main">
      <h1 className="p-4 bg-amber-200 text-xl">趣味</h1>
      <div className="p-4 list-decimal">
        {data.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </div>
    </div>
  );
}
