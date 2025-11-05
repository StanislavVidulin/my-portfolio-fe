const technologies = {
  programmiersprachen: ["Java", "JavaScript", "TypeScript"],
  backend: ["Spring", "Spring Boot", "Node.js", "REST API"],
  frontend: [
    "HTML",
    "CSS",
    "React",
    "React Router",
    "Redux",
    "Bootstrap",
    "Tailwind CSS",
  ],
  datenbanken: ["MySQL", "PostgreSQL", "MongoDB"],
  tools: [
    "IntelliJ IDEA",
    "VS Code",
    "Git",
    "GitHub",
    "Postman",
    "Docker",
    "DBeaver",
    "Beekeeper Studio",
    "Maven",
    "Trello",
  ],
};

export default function Technologies() {
  const codeLines = Object.entries(technologies).map(([key, values]) => {
    const formattedValues = values.map((value, id) => (
      <span key={id}>
        <span className="text-[#cf9078]">'{value}'</span>
        {id < values.length - 1 && <span className="text-white">, </span>}
      </span>
    ));
    return { key, formattedValues };
  });

  return (
    <section className="max-w-7xl mx-auto p-6 rounded-lg text-gray-100 font-mono overflow-x-auto shadow-xl bg-gradient-to-br from-gray-900 to-gray-700">
      <h2 className="text-5xl font-semibold mb-10 border-b border-white pb-4">
        Technologien
      </h2>
      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          <span className="text-gray-500 w-8 select-none">1</span>
          <span className="ml-2 text-white">{"{"}</span>
        </div>

        {codeLines.map(({ key, formattedValues }, index) => (
          <div key={index} className="flex items-center">
            <span className="text-gray-500 w-8 select-none">{index + 2}</span>
            <span className="ml-16 whitespace-nowrap">
              <span className="text-white"> </span>
              <span className="text-[#87c0de]">{key}</span>
              <span className="text-white">: [</span>
              {formattedValues}
              <span className="text-white">],</span>
            </span>
          </div>
        ))}

        <div className="flex items-center">
          <span className="text-gray-500 w-8 select-none">
            {codeLines.length + 2}
          </span>
          <span className="ml-2 text-white">{"}"}</span>
        </div>
      </div>
    </section>
  );
}
