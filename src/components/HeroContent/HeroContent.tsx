import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import myPhoto from "../../assets/IMG_2037.JPG";

const titles = [
  "Full Stack Developer",
  "Java Back-End Developer",
  "TS Front-End Developer",
];

export default function HeroContent() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentTitle = titles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
      setSpeed(50);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      setSpeed(150);
    } else {
      timeout = setTimeout(() => {
        const updatedText = isDeleting
          ? currentTitle.substring(0, text.length - 1)
          : currentTitle.substring(0, text.length + 1);
        setText(updatedText);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, speed]);

  return (
    <section
      id="hero"
      className="px-6 max-w-7xl mx-auto pt-16 pb-16 text-gray-100 font-poppins"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="flex-1 text-center md:text-left md:pr-16 animate-fadeIn delay-200">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent tracking-wide drop-shadow-lg break-words">
            Hallo, ich bin Stanislav Vidulin
          </h1>

          <div className="flex justify-center md:justify-start space-x-8 text-3xl mb-8 text-gray-400">
            <a
              href="https://github.com/StanislavVidulin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/stanislav-vidulin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/stas_vidulin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed tracking-wide mx-auto md:mx-0">
            <span className="border-r-2 border-cyan-400 animate-cursor font-semibold text-cyan-400">
              {text}
            </span>
            <br />
            Herzlich Willkommen auf meinem Portfolio! Ich freue mich, dass Sie
            da sind!
          </p>
        </div>

        <div className="flex-shrink-0 animate-fadeIn delay-500">
          <img
            src={myPhoto}
            alt="Stanislav"
            className="w-[600px] h-[600px] rounded-xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105 hover:shadow-3xl"
          />
        </div>
      </div>
    </section>
  );
}
