const technologies = {
  programmiersprachen: ["Java", "JavaScript", "TypeScript", "Python"],
  backend: ["Spring Boot", "Node.js", "REST API", "JUnit"],
  frontend: ["HTML", "CSS", "React", "Next.js", "Redux", "Bootstrap", "Tailwind CSS"],
  datenbanken: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
  tools: [
    "IntelliJ IDEA",
    "PyCharm",
    "VS Code",
    "Git",
    "GitHub",
    "Postman",
    "Docker",
    "DBeaver",
    "Beekeeper Studio",
    "Maven",
    "Trello",
    "Linux",
    "Swagger",
    "Netlify",
    "Vercel"
  ],
};

export default function Technologies() {
  const codeLines = Object.entries(technologies).map(([key, values]) => {
    const formattedValues = values.map((value, id) => (
      <span key={id} className="whitespace-nowrap">
        <span className="text-[#cf9078]">'{value}'</span>
        {id < values.length - 1 && <span className="text-white">, </span>}
      </span>
    ));
    return { key, formattedValues };
  });

  return (
    <section className="max-w-7xl mx-auto p-6 rounded-lg text-gray-100 font-mono shadow-xl bg-gradient-to-br from-gray-900 to-gray-700">
      <h2 className="text-5xl font-semibold mb-10 border-b border-white pb-4">
        Technologien
      </h2>
      <div className="flex flex-col gap-1 text-sm md:text-base">

        <div className="flex">
          <span className="text-gray-500 min-w-[2rem] select-none">1</span>
          <span className="text-white">{"{"}</span>
        </div>

        {codeLines.map(({ key, formattedValues }, index) => (
          <div key={index} className="flex items-start">
            <span className="text-gray-500 min-w-[2rem] select-none">
              {index + 2}
            </span>
            
            <div className="ml-4 md:ml-8 flex flex-wrap">
              <span className="text-[#87c0de]">{key}</span>
              <span className="text-white">: [</span>
              <div className="flex flex-wrap gap-x-2">
                {formattedValues}
              </div>
              <span className="text-white">],</span>
            </div>
          </div>
        ))}

        <div className="flex">
          <span className="text-gray-500 min-w-[2rem] select-none">
            {codeLines.length + 2}
          </span>
          <span className="text-white">{"}"}</span>
        </div>
      </div>
    </section>
  );
}
