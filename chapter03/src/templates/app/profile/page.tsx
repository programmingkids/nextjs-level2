import { Content } from '@/app/profile/content';

// URLでアクセス可能
export default function Page() {
  return (
    <div className="main">
      <Title />
      <Content />
    </div>
  );
}

// URLでアクセス不可
const Title = function () {
  return <h1 className="p-4 bg-sky-200 text-xl">Profile</h1>;
};
