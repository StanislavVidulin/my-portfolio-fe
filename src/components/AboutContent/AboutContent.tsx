import {
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaFlag,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import InfoItem from "src/components/InfoItem/InfoItem";

export default function AboutContent() {
  return (
    <section
      id="about"
      className="px-6 max-w-7xl mx-auto pt-8 pb-4 text-gray-100 font-poppins"
    >
      <h2 className="text-5xl font-semibold mb-10 border-b border-white pb-4">
        Über mich
      </h2>

      <div className="bg-gray-800 rounded-xl p-8 sm:p-10">
        <p className="text-2xl font-semibold leading-relaxed mb-12 text-gray-200 tracking-wide text-center">
          Ich bin ein sehr motivierter Fullstack Developer und freue mich
          darauf, mich in der Softwareentwicklung weiterzuentwickeln.
          Programmieren begeistert mich, und ich arbeite gern an neuen
          Herausforderungen. Teamarbeit und das Lernen neuer Technologien machen
          mir besonders viel Spaß. Mein Ziel ist es, meine Fähigkeiten
          kontinuierlich auszubauen und langfristig in dieser Branche
          erfolgreich zu sein.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-16 text-gray-200 tracking-wide">
          <InfoItem
            icon={<FaMapMarkerAlt />}
            label="Ort"
            value="Moosburg an der Isar, Deutschland"
          />
          <InfoItem icon={<FaBirthdayCake />} label="Alter" value="27" />
          <InfoItem icon={<FaFlag />} label="Nationalität" value="Ukrainisch" />
          <InfoItem
            icon={<FaGraduationCap />}
            label="Studium"
            value="Nationale Karazin-Universität, Internationale Wirtschaft"
          />
          <InfoItem
            icon={<FaLaptopCode />}
            label="Weiterbildung"
            value="AIT TR GmbH, Berlin, Deutschland"
          />
          <InfoItem
            icon={<FaBriefcase />}
            label="Praktikum"
            value="Upteam GmbH"
          />
        </div>

        <div className="flex justify-center">
          <a
            href="/Bewerbungsunterlagen.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full transition-colors"
          >
            Bewerbungsunterlagen ansehen
          </a>
        </div>
      </div>
    </section>
  );
}