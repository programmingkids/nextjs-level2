import { NationHeader } from '@/components/nationHeader';

type NationProps = {
  params: {
    name: string;
  };
};

export default function Page({ params: { name } }: NationProps) {
  return (
    <div className="main">
      <h1 className="p-4 bg-rose-500 text-white text-xl">
        Nation / {name.toUpperCase()}
      </h1>
      <NationHeader />
      <div className="py-4 px-6">
        <h1 className="text-xl">Nation {name.toUpperCase()}</h1>
        <div className="py-4 text-start">
          {('Nation ' + name + ', ').repeat(100)}
        </div>
      </div>
    </div>
  );
}
