import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans overflow-x-hidden flex flex-col">
      <Navigation />

      <main className="pt-20 max-w-7xl mx-auto px-6 space-y-28 flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
