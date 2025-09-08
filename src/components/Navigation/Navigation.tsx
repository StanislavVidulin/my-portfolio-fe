import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Startseite" },
  { id: "about", label: "Über mich" },
  { id: "projects", label: "Projekte" },
  { id: "contact", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
  className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    scrolled
      ? "bg-gray-900 bg-opacity-90 shadow-md backdrop-blur-sm"
      : "bg-transparent"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 py-5 flex flex-wrap justify-end gap-4 md:space-x-10">
    {sections.map(({ id, label }) => (
      <button
        key={id}
        onClick={() => scrollToSection(id)}
        className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300 whitespace-nowrap"
      >
        {label}
      </button>
    ))}

    <a
      href="/Lebenslauf-Stanislav-Vidulin"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold px-5 py-2 rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300 whitespace-nowrap"
    >
      Lebenslauf
    </a>
  </div>
</nav>

  );
}