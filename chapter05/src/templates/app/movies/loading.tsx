import { LoadingSpinner } from '@/components/spinner';

export default function Loading() {
  return (
    <div className="main p-8 bg-white">
      <LoadingSpinner textColor={'text-fuchsia-500'} />
    </div>
  );
}
