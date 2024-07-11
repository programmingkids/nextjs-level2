import Link from 'next/link';
import { comments } from '@/app/comments/data';
import { CommentBox } from '@/components/comment';

export default function Page() {
  return (
    <main className="main">
      <h1 className="p-4 text-2xl bg-rose-200">Comments</h1>
      <div className="mx-4">
        {comments.map((e) => (
          <Link key={e.id} href={`/comments/${e.id}`} scroll={false}>
            <CommentBox {...e} />
          </Link>
        ))}
      </div>
    </main>
  );
}
