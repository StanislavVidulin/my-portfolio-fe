import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center mt-10 px-8 py-4 border-t border-gray-700 text-gray-400 max-w-7xl mx-auto">
      <div>
        © 2025 Stanislav Vidulin
        </div>

      <div className="flex space-x-10 text-3xl">
        <a
          href="https://github.com/StanislavVidulin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition-colors duration-300"
        >
          <FaGithub className="cursor-pointer" />
        </a>

        <a
          href="https://www.linkedin.com/in/stanislav-vidulin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition-colors duration-300"
        >
          <FaLinkedin className="cursor-pointer" />
        </a>

        <a
          href="https://www.instagram.com/stas_vidulin/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-white transition-colors duration-300"
        >
          <FaInstagram className="cursor-pointer" />
        </a>
      </div>
    </footer>
  );
}
