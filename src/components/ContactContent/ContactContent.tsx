import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Spinner from "src/components/Spinner/Spinner";
import Notification from "../Notification/Notification";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_jmftb16",
        "template_v3c6tmn",
        formData,
        "swyRgUdf_9wuvTasS"
      )
      .then(() => {
        setShowNotification(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setError(
          "Fehler beim Senden der Nachricht. Bitte überprüfen Sie Ihre Internetverbindung oder versuchen Sie es später erneut."
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="px-8 py-8 max-w-7xl mx-auto relative font-poppins"
    >
      <h2 className="text-5xl font-bold mb-10 border-b-2 border-white pb-2">
        Kontakt
      </h2>

      <div className="w-full h-96 rounded-md overflow-hidden shadow-lg mb-10">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.528152597887!2d11.914547115681194!3d48.54513747926253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddc5c8d3011f9%3A0x51c7c5b9a1e2af9d!2sMoosburg%20an%20der%20Isar!5e0!3m2!1sen!2sde!4v168XXXXXXX"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-36 items-stretch">
        <div className="max-w-full md:max-w-xs shrink-0 text-lg text-gray-300 flex flex-col justify-between">
          <p>
            Haben Sie ein spannendes Projekt, bei dem ich meine Fähigkeiten
            einbringen kann? Oder wünschen Sie weitere Informationen zu meinen
            bisherigen Arbeiten? Ich freue mich sehr, von Ihnen zu hören und
            stehe Ihnen jederzeit gerne per E-Mail oder über das Kontaktformular
            zur Verfügung.
          </p>

          <div className="space-y-5 mt-10">
            <a
              href="https://www.google.com/maps/place/Moosburg+an+der+Isar,+Deutschland"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-white transition-colors duration-300"
            >
              <FaMapMarkerAlt className="w-6 h-6" />
              Moosburg an der Isar, Deutschland
            </a>
            <a
              href="mailto:stasvidulin97@gmail.com"
              className="flex items-center gap-4 hover:text-white transition-colors duration-300"
            >
              <HiOutlineMail className="w-6 h-6" />
              stasvidulin97@gmail.com
            </a>
            <a
              href="https://github.com/StanislavVidulin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-white transition-colors duration-300"
            >
              <FaGithub className="w-6 h-6" />
              StanislavVidulin
            </a>
            <a
              href="https://www.linkedin.com/in/stanislav-vidulin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
              Stanislav Vidulin
            </a>
            <a
              href="https://www.instagram.com/stas_vidulin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-white transition-colors duration-300"
            >
              <FaInstagram className="w-6 h-6" />
              stas_vidulin
            </a>
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          className="bg-gray-800 p-10 rounded-md space-y-8 flex-grow w-full md:w-auto flex flex-col justify-between"
          style={{ minHeight: "420px" }}
        >
          <div className="space-y-10">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-md bg-gray-700 border border-gray-600 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-md bg-gray-700 border border-gray-600 text-white"
            />
            <textarea
              name="message"
              placeholder="Nachricht"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-md bg-gray-700 border border-gray-600 text-white resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-3 rounded-full min-w-[200px] self-start flex justify-center items-center ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? <Spinner /> : "Nachricht senden"}
          </button>
        </form>
      </div>

      {showNotification && (
        <Notification
          message="Vielen Dank für Ihre Nachricht!"
          onClose={() => setShowNotification(false)}
        />
      )}

      {error && (
        <Notification message={error} onClose={() => setError(null)} isError />
      )}
    </section>
  );
}
