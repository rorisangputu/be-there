import Header from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative">
      <Header />
      <div className="absolute top-0 left-0 right-0 bottom-0 z-50">
        {children}
      </div>
    </div>
  );
};

export default Layout;
