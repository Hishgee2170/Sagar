import Button from "../Block/Button";

export const Skills = () => {
  const iconsScript = [
    { url: "#", ner: "JavaScript" },
    { url: "#", ner: "Typescript" },
    { url: "#", ner: "React" },
    { url: "#", ner: "Next.js" },
    { url: "#", ner: "Node.js" },
    { url: "#", ner: "Express.js" },
    { url: "#", ner: "Nest.js" },
    { url: "#", ner: "Socket.io" },
  ];
  const icons = [
    { url: "#", ner: "PostgreSQL" },
    { url: "#", ner: "MongoDB" },
    { url: "#", ner: "Sass/Scss" },
    { url: "#", ner: "Tailwindcss" },
    { url: "#", ner: "Figma" },
    { url: "#", ner: "Cypress" },
    { url: "#", ner: "Stroybook" },
    { url: "#", ner: "Git" },
  ];

  return (
    <div className="flex px-[80px] py-[96px] w-[1440px] h-[560px] flex-col justify-center items-center self-stretch gap-[48px]">
      <div className="flex flex-col items-start gap-[16px] self-stretch justify-center">
        <Button className=" w-[1216px] h-[28px]" name={"Skills"} />
        <div className="flex flex-col justify-center items-center self-stretch text-gray-600">
          The skills, tools and technologies I am really good at:
        </div>
      </div>
      <div className="flex flex-col items-start gap-[48px] self-stretch px-[32px] w-[1280px] h-[248px]">
        <div className="flex justify-between items-center self-stretch w-[1216px] h-[100px]">
          {iconsScript.map((el, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center gap-[8px] self-stretch"
            >
              <img className="w-[64px] h-[64px]" src={el.url} alt="!" />
              <div className="leading-[28px]">{el.ner}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center self-stretch w-[1216px] h-[100px]">
          {icons.map((el, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center gap-[8px] self-stretch"
            >
              <img className="w-[64px] h-[64px]" src={el.url} alt="!" />
              <div className="leading-[28px]">{el.ner}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
