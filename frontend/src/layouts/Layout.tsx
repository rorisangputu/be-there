interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
