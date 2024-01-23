export default function ExperienceContainer({ items, ognoo }) {
  return (
    <div className="px-[32px] py-[32px] w-[896px] flex flex-col items-start rounded-[12px] bg-white shadow-[0px 2px 2px 0px]">
      <div className="flex items-start gap-[48px] self-stretch w-[832px] ">
        <div className="flex flex-col items-start gap-[12px] flex-1">
          <img src="#" alt="upwork" />
        </div>
        <div className="flex w-[384px] flex-col items-start gap-[16px]">
          {items}
        </div>
        <div className="flex items-start gap-[24px]">{ognoo}</div>
      </div>
    </div>
  );
}
