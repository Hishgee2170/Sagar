export const Header = () => {
  return (
    <div
      className="flex w-[1440px] h-[68px] px-[80px]
    py-[16px] justify-between items-center self-stretch"
    >
      <div className="px-[32px] flex justify-between items-center flex-1">
        <div className="text-center text-3xl not-italic font-bold leading-9">{"<SS />"}</div>
        <div className="flex justify-center items-center gap-[24px]">
          <div>About</div>
          <div>Work</div>
          <div>Testimonials</div>
          <div>Contact</div>
          <img
            src="/Users/23LP6838/Documents/Hello/newProject/shinesana/src/Zurag/Home/Desktop/Icon.jpg"
            alt="!"
          />
          <button className="px-[16px] py-[6px] w-[136px] h-[36px] flex justify-center items-center gap-[8px] rounded-[12px] bg-gray-900 text-gray-50">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
