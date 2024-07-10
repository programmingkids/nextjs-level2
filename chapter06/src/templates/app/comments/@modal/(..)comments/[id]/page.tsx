import { CommentBox } from "@/components/comment";
import { comments, type Comment } from "@/app/comments/data";
import Modal from "@/components/modal";

type CommentPageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params: { id } }: CommentPageProps) {
  const comment: Comment | undefined = comments.find(
    (e) => e.id === Number(id),
  );
  return comment ? (
    <Modal>
      <CommentBox {...comment} />
    </Modal>
  ) : (
    <div className="mx-auto my-5 px-4 py-6 max-w-lg text-center">
      該当データがありません
    </div>
  );
}
