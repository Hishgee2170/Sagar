import Button from "@/component/Block/Button";
import ExperienceContainer from "../Block/ExperienceContainer";
export const Experience = () => {
  return (
    <div className="flex px-[96px] py-[80px] flex-col justify-center items-center  w-[1472px] h-[1108px] bg-gray-50">
      <div className=" w-[1216px] h-[1012px] flex px-[32px] py-[0px] flex-col justify-center items-center gap-[48px] ">
        <div className="flex flex-col  items-center gap-[16px] ">
          <Button name={"Experience"} />
          <div className="flex flex-col items-start   ">
            Here is a quick summary of my most recent experiences:
          </div>
        </div>

        <div>
          <ExperienceContainer
            items={
              <>
                <div className="text-gray-900 text-[20px] leading-[28px]]">
                  Sr. Frontend Developer
                </div>
                <div className="flex flex-col items-start gap-[4px] self-stretch">
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Ut pretium arcu et massa semper, id fringilla leo semper.
                    </li>
                    <li>Sed quis justo ac magna.</li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>
              </>
            }
            ognoo={"Nov 2021 - Present"}
          />
        </div>

        <div>
          <ExperienceContainer
            items={
              <>
                <div className="text-gray-900 text-[20px] leading-[28px]]">
                  Team Lead
                </div>
                <div className="flex flex-col items-start gap-[4px] self-stretch">
                  <ul>
                    <li>Sed quis justo ac magna.</li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>Sed quis justo ac magna.</li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>
              </>
            }
            ognoo={"Jul 2017 - Oct 2021"}
          />
        </div>
        <div>
          <ExperienceContainer
            items={
              <>
                <div className="text-gray-900 text-[20px] leading-[28px]]">
                  Full Stack Developer
                </div>
                <div className="flex flex-col items-start gap-[4px] self-stretch">
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>
              </>
            }
            ognoo={"Dec 2015 - May 2017"}
          />
        </div>
      </div>
    </div>
  );
};
