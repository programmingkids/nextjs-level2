type LayoutProps = Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>;

export default function Layout({ children, modal }: LayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
