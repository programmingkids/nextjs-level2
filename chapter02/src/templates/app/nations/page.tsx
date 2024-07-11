export default function Pagge() {
  const data = ['Japan', 'England', 'France', 'Italy'];

  return (
    <div className="main">
      <h1 className="p-4 bg-emerald-200 text-xl">Nations</h1>
      <div className="p-4 list-disc">
        {data.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </div>
    </div>
  );
}
