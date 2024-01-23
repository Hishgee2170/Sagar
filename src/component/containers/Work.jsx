import Button from "../Block/Button";
import WorkContainer from "../Block/WorkContainer";
export const Work = () => {
  return (
    <div
      className="flex py-[96px] px-[80px]
  flex-col justify-center items-center self-stretch bg-white"
    >
      <div className="flex px-[32px] flex-col justify-center items-center gap-[48px] ">
        <div className="flex flex-col items-center gap-[16px] ">
          <Button name={"Work"} />
          <div className="text-[20px] leading-[28px] text-gray-600">
            Some of the noteworthy projects I have built:
          </div>
        </div>
        <WorkContainer/>
      </div>
    </div>
  );
};
