export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-grey-200 text-xl">Private Folder</h1>
      <div className="py-4 px-6">
        <h1 className="text-xl">This is Private Folder</h1>
        <div className="py-4 text-start">{"Private, ".repeat(100)}</div>
      </div>
    </div>
  );
}
