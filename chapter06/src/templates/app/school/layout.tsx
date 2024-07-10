type LayoutProps = Readonly<{
  children: React.ReactNode;
  event: React.ReactNode;
  exam: React.ReactNode;
}>;

export default function Layout({ children, event, exam }: LayoutProps) {
  return (
    <>
      {children}
      <div className="grid grid-cols-2 gap-4 mx-8">
        {event}
        {exam}
      </div>
    </>
  );
}
