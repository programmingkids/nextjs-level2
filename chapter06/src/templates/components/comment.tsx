import { type Comment } from '@/app/comments/data';

type CommentProps = Comment;

export const CommentBox = function ({
  name,
  nickname,
  body,
  bgcolor,
}: CommentProps) {
  return (
    <div className="mx-auto my-5 px-4 py-6 max-w-lg rounded-xl border border-gray-300 shadow-lg bg-white hover:bg-rose-100">
      <div className="text-left focus:outline-none focus:ring-1">
        <div className="flex">
          <div
            className={`h-20 w-20 min-w-20 rounded-full flex items-center justify-center ${bgcolor}`}
          >
            {nickname}
          </div>
          <div className="ml-4 flex flex-col sm:w-96">
            <p className="mb-2 font-medium text-gray-900">{name}</p>
            <div className="text-sm text-gray-500">{body}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
