import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { LayoutProps } from "./types";

export default function Layout({ children }: LayoutProps) {
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