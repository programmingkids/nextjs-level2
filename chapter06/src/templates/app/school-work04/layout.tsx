type LayoutProps = Readonly<{
  children: React.ReactNode;
  event: React.ReactNode;
  exam: React.ReactNode;
  login: React.ReactNode;
}>;

export default function Layout({ children, event, exam, login }: LayoutProps) {
  const isLogin = false;

  return isLogin ? (
    <>
      {children}
      <div className="grid grid-cols-2 gap-4 mx-8">
        {event}
        {exam}
      </div>
    </>
  ) : (
    <div className="main p-4">{login}</div>
  );
}
