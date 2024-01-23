import Button from "./Button";

const ButtonNames = [
  { fiskill: "React" },
  { fiskill: "Next.JS" },
  { fiskill: "Typescript" },
  { fiskill: "Nest.js" },
  { fiskill: "PostgraSQL" },
  { fiskill: "Tailwindcss" },
  { fiskill: "Figma" },
  { fiskill: "Cypress" },
  { fiskill: "StoryBook" },
  { fiskill: "Git" },
];
const Zurag = () => {
  return (
    <div className="flex px-[48px] py-[48px] justify-center items-center ">
      <img
        className="rounded-[12px] w-[480px] h-[384px]"
        src="https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dnirb8CfZwMvr6mGiJJI~n52sESoRHkt0FI-qrwIUtnby6UuYtmOC6Pg0GZ6pX3iZUQXN0862jHKItND0Ovy1kY7xpggvdgBvTF2I2xRjRVKNbk1HzwbnFHmy4eGin0vlw7qYPKrvw~xTYlj9pIzBka3jDpY0rdkHXg-IpLvPPx0m3UVQq-4mY2-IWyXJqSFdMRHChbmHkE29vm9wsdn2zLhlmQDs2FH6qv~8TziWdfcOtbqUZKqwe9puyACNHZ-eztqjoP-e8wB~6v2lemgOB0m~6c0TzPDRoSYSPH3HYrMj9BGnpZzRgWP~NVlt5TIBnecruVrdUuYrTB~UYB4uQ__"
        alt=""
      />
    </div>
  );
};
const Bichwer = () => {
  return (
    <div className="flex px-[48px] py-[48px] flex-col items-center gap-[24px] self-stretch">
      <h1>Fiskil</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
      <div>
        {ButtonNames.map((el, i) => (
          <Button key={i} names={el.fiskill} />
        ))}
      </div>
    </div>
  );
};
const Swap = [[<Zurag />], [<Bichwer />]];
const j = 3;
export default function WorkContainer() {
  return (
    <div className="flex">
      {Swap.map((el,i)=>(

      ))}
    </div>
  );
}
