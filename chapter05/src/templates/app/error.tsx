"use client";

type ErrorProps = {
  error: Error;
};

export default function Error({ error }: ErrorProps) {
  return (
    <div className="main p-4 bg-red-600 text-white text-xl">
      <h1>{error.message}</h1>
    </div>
  );
}
