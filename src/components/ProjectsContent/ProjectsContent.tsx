import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Projekt 1: Shop Basic",
    description: `Im Rahmen meiner Weiterbildung habe ich diesen Online-Shop in Java entwickelt, um ein tiefes Verständnis für die verschiedenen Schichten einer Anwendung zu erlangen. 
Das Projekt fokussiert sich auf die Clean Architecture und zeigt, wie Präsentations-, Geschäftslogik- und Datenschichten zusammenarbeiten. 
Ziel war es, die Prinzipien der sauberen Architektur und den Schichtaufbau praxisnah zu verstehen und umzusetzen.`,
    technologies: ["Java", "Clean Architecture", "MVC", "Maven"],
    github: "https://github.com/StanislavVidulin/shop_basic",
  },
  {
    title: "Projekt 2: Weather App",
    description: `In diesem Projekt habe ich eine Wetteranwendung entwickelt,
die es ermöglicht, aktuelle Wetterdaten für eine beliebige Stadt abzurufen.
Die App kommuniziert mit der OpenWeatherMap-API, sendet HTTP-Anfragen und verarbeitet die erhaltenen JSON-Daten.`,
    technologies: [
      "JavaScript",
      "Fetch API",
      "OpenWeatherMap API",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/StanislavVidulin/20_Weather_App_03_03_2025",
  },
  {
    title: "Projekt 3: User Project (Frontend)",
    description: `Entwicklung einer mehrseitigen React-Anwendung mit Login-Formular, Anzeige der Benutzerdaten und Historie aller abgefragten Nutzer. 
Validierte Eingabefelder, API-Anfragen mit Ladeanzeige und Fehlerhandling. Nutzerhistorie mit Einzel- und Gesamtlöschfunktion.`,
    technologies: [
      "React",
      "React Hooks",
      "Form-Validierung",
      "REST API",
      "CSS",
    ],
    github: "https://github.com/StanislavVidulin/project",
  },
  {
    title: "Projekt 4: Forum Service",
    description: `Backend-Service für ein Forum, entwickelt mit Spring Boot und Java 17. 
Implementierung von REST-APIs zur Verwaltung von Beiträgen und Kommentaren. Verwendung von Spring-Anmerkungen (Annotations) für Dependency Injection und Mapping.
Datenbankanbindung über MongoDB. Zur Objektabbildung (DTO zu Entity) wurde ModelMapper eingesetzt. Maven wurde als Build-Management-Tool verwendet. 
API-Tests erfolgten mit Postman.`,
    technologies: [
      "Java 17",
      "Spring Boot",
      "Maven",
      "MongoDB",
      "ModelMapper",
      "REST API",
      "Postman",
      "Annotations",
    ],
    github: "https://github.com/StanislavVidulin/forum-service",
  },
  {
    title: "Projekt 5: Person Service",
    description: `Backend-Service zur Verwaltung von Personen mit Spring Boot und Java 17. 
Implementierung von CRUD-REST-APIs, Datenpersistenz mit Spring Data JPA und In-Memory H2-Datenbank. 
Verwendung von Lombok zur Codevereinfachung und ModelMapper für DTO-Mapping.`,
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "H2",
      "Lombok",
      "ModelMapper",
      "REST API",
    ],
    github: "https://github.com/StanislavVidulin/person-service",
  },
  {
    title: "Projekt 6: Book Service",
    description: `Backend-Service zur Verwaltung von Büchern, Autoren und Verlagen mit Spring Boot und Java 17. 
Modellierung komplexer Beziehungen: Many-to-Many zwischen Büchern und Autoren sowie Many-to-One von Büchern zu Verlagen. 
Persistenz über Spring Data JPA mit MySQL-Datenbank. Verwendung von Lombok zur Codevereinfachung und ModelMapper für DTO-Mapping.`,
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "Lombok",
      "ModelMapper",
      "REST API",
    ],
    github: "https://github.com/StanislavVidulin/book-service",
  },
  {
    title: "Projekt 7: Task Tracker Backend",
    description: `Backend-Service zur Verwaltung von Aufgaben, entwickelt im Rahmen meines Praktikums bei Upteam GmbH mit Spring Boot und Java 17. 
Implementierung von RESTful APIs mit Sicherheitsfunktionen durch Spring Security und JWT. 
Nutzung von Spring Data JPA für Persistenz mit MySQL-Datenbank. Integration von E-Mail-Versand über Spring Mail. 
API-Dokumentation mit Swagger.`,
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "MySQL",
      "Spring Mail",
      "Swagger",
      "Gradle",
      "REST API",
    ],
    github: "https://github.com/StanislavVidulin/task-tracker-be",
  },
  {
    title: "Projekt 8: Task Tracker Frontend",
    description: `Frontend-Anwendung zur Verwaltung von Aufgaben, entwickelt im Rahmen meines Praktikums bei Upteam GmbH mit React, TypeScript und Tailwind CSS. 
Umsetzung benutzerfreundlicher, responsiver Benutzeroberflächen mit React Hooks, Formik für Formularvalidierung sowie Redux Toolkit zur Zustandsverwaltung. 
Integration von API-Anfragen mittels Axios und Navigation mit React Router.`,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Formik",
      "Redux Toolkit",
      "Axios",
      "React Router",
    ],
    github: "https://github.com/StanislavVidulin/task-tracker-fe",
  },
  {
    title: "Projekt 9: Persönliche Portfolio-Website",
    description: `Entwicklung meiner persönlichen Portfolio-Website zur Präsentation meiner Projekte und Fähigkeiten. 
Das Projekt wurde eigenständig umgesetzt und fokussiert auf responsives Design und einfache Bedienbarkeit.`,
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "JSX",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/StanislavVidulin/my-portfolio-fe",
  },
];

export default function ProjectsContent() {
  return (
    <section
      id="projects"
      className="px-6 max-w-7xl mx-auto py-2 pb-4 text-gray-100 font-poppins"
    >
      <h2 className="text-5xl font-semibold mb-10 border-b border-white-400 pb-4">
        Projekte
      </h2>
      <div
        className="grid gap-10 justify-center 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-3"
      >
        {projects.map(({ title, description, github, technologies }, idx) => (
          <div
            key={idx}
            className="bg-gray-800 shadow-xl rounded-3xl p-8 hover:scale-[1.04] transition-transform duration-300 cursor-pointer relative overflow-hidden flex flex-col max-w-md mx-auto"
          >
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent blur-xl pointer-events-none rounded-t-3xl" />

            <h3 className="text-2xl font-semibold mb-5 text-indigo-300 drop-shadow-md">
              {title}
            </h3>
            <p className="text-gray-300 mb-7 whitespace-pre-line leading-relaxed flex-grow">
              {description}
            </p>

            {technologies && technologies.length > 0 && (
              <div className="mt-auto mb-6">
                <h4 className="text-gray-400 font-semibold mb-2">
                  Technologien
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 bg-opacity-50 text-gray-300 text-sm font-medium rounded-lg px-3 h-8 flex items-center min-w-max select-none
                     transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:brightness-110 hover:scale-105 transition duration-300 self-start mt-auto"
            >
              <FaGithub className="mr-3 text-lg" />
              Code ansehen
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
