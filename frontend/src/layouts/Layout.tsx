import Header from "../components/Header";
import Hero from "../components/Hero";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="bg-white z-10">{children}</div>
    </div>
  );
};

export default Layout;
