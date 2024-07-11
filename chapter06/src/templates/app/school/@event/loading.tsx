import { LoadingSpinner } from '@/components/spinner';

export default function Loading() {
  return (
    <div className="main border border-orange-600 rounded-lg min-h-40">
      <div className="flex justify-center items-center h-full">
        <LoadingSpinner textColor={'text-orange-500'} />
      </div>
    </div>
  );
}
